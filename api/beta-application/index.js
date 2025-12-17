import "dotenv/config";
import { prisma } from "../_lib/prisma.js";

export default async function handler(req) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { email, fullName, platforms, financePlanning, agreeToEmails } = body;

    // Validate required fields
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!agreeToEmails) {
      return new Response(
        JSON.stringify({ error: "Email consent is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
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
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Beta application submission error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to submit beta application. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
