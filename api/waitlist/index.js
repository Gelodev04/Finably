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
        headers: { "Content-Type": "application/json" },
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
    return new Response(
      JSON.stringify({
        error: "Failed to join waitlist. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
