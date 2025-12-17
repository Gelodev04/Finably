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
      "Beta application API called, DATABASE_URL:",
      process.env.DATABASE_URL ? "SET" : "NOT SET"
    );

    // Vercel automatically parses JSON into req.body
    const { email, fullName, platforms, financePlanning, agreeToEmails } =
      req.body || {};

    // Validate required fields
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    if (!agreeToEmails) {
      return res.status(400).json({ error: "Email consent is required" });
    }

    // Create beta application entry
    console.log("Attempting to create beta application entry...");

    // Use a timeout to ensure we don't exceed Vercel's 10s limit
    const createPromise = prisma.betaApplication.create({
      data: {
        email: email.toLowerCase().trim(),
        fullName: fullName?.trim() || null,
        platforms: platforms || [],
        financePlanning: financePlanning?.trim() || null,
        agreeToEmails: agreeToEmails,
      },
    });

    // Race against a timeout (8 seconds to leave buffer for Vercel's 10s limit)
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error("Database operation exceeded time limit")),
        8000
      )
    );

    const betaApplication = await Promise.race([createPromise, timeoutPromise]);
    console.log("Beta application created successfully:", betaApplication.id);

    return res.status(201).json({
      success: true,
      message: "Beta application submitted successfully",
      data: betaApplication,
    });
  } catch (error) {
    console.error("Beta application submission error:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      name: error.name,
    });

    return res.status(500).json({
      error: "Failed to submit beta application. Please try again later.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
