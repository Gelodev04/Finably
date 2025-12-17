import "dotenv/config";
import { prisma } from "../_lib/prisma.js";

export default async function handler(req, res) {
  // Add CORS headers for Vercel
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS request for CORS
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Log for debugging
    console.log(
      "Waitlist API called, DATABASE_URL:",
      process.env.DATABASE_URL ? "SET" : "NOT SET"
    );
    console.log("Request method:", req.method);

    // Vercel automatically parses JSON into req.body
    const { email } = req.body || {};

    console.log("Request body received:", {
      email: email ? "present" : "missing",
    });

    // Validate email
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    // Create waitlist entry (Prisma will handle duplicate email error)
    console.log("Attempting to create waitlist entry...");

    // Use a timeout to ensure we don't exceed Vercel's 10s limit
    const createPromise = prisma.waitlistEntry.create({
      data: {
        email: email.toLowerCase().trim(),
      },
    });

    // Race against a timeout (8 seconds to leave buffer for Vercel's 10s limit)
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error("Database operation exceeded time limit")),
        8000
      )
    );

    const waitlistEntry = await Promise.race([createPromise, timeoutPromise]);
    console.log("Waitlist entry created successfully:", waitlistEntry.id);

    return res.status(201).json({
      success: true,
      message: "Successfully joined waitlist",
      data: waitlistEntry,
    });
  } catch (error) {
    // Handle duplicate email error
    if (error.code === "P2002") {
      return res.status(409).json({
        error: "This email is already on the waitlist",
      });
    }

    console.error("Waitlist submission error:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      name: error.name,
    });

    return res.status(500).json({
      error: "Failed to join waitlist. Please try again later.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
