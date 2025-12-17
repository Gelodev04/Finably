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
    // Log for debugging
    console.log(
      "Waitlist API called, DATABASE_URL:",
      process.env.DATABASE_URL ? "SET" : "NOT SET"
    );
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create waitlist entry (Prisma will handle duplicate email error)
    const waitlistEntry = await prisma.waitlistEntry.create({
      data: {
        email: email.toLowerCase().trim(),
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully joined waitlist",
        data: waitlistEntry,
      }),
      {
        status: 201,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handle duplicate email error
    if (error.code === "P2002") {
      return new Response(
        JSON.stringify({
          error: "This email is already on the waitlist",
        }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.error("Waitlist submission error:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      name: error.name,
    });
    return new Response(
      JSON.stringify({
        error: "Failed to join waitlist. Please try again later.",
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
