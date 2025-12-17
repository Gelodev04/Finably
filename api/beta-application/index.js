import "dotenv/config";
import { prisma } from "../_lib/prisma.js";

export default async function handler(req) {
  // Add CORS headers for Vercel
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS request for CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { email, fullName, platforms, financePlanning, agreeToEmails } = body;

    // Log for debugging
    console.log(
      "Beta application API called, DATABASE_URL:",
      process.env.DATABASE_URL ? "SET" : "NOT SET"
    );

    // Validate required fields
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (!agreeToEmails) {
      return new Response(
        JSON.stringify({ error: "Email consent is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Create beta application entry
    const betaApplication = await prisma.betaApplication.create({
      data: {
        email: email.toLowerCase().trim(),
        fullName: fullName?.trim() || null,
        platforms: platforms || [],
        financePlanning: financePlanning?.trim() || null,
        agreeToEmails: agreeToEmails,
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Beta application submitted successfully",
        data: betaApplication,
      }),
      {
        status: 201,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Beta application submission error:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      name: error.name,
    });
    return new Response(
      JSON.stringify({
        error: "Failed to submit beta application. Please try again later.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
}
