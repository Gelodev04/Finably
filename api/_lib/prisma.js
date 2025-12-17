import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// PrismaClient is attached to the `global` object to prevent
// exhausting your database connection limit in serverless environments.
const globalForPrisma = globalThis;

// Ensure DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL environment variable is not set!");
  // Don't throw here - let it fail gracefully when trying to connect
}

let prisma;
let pool;

// Reuse the same Prisma instance across function invocations
if (!globalForPrisma.prisma) {
  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 1, // Limit connections for serverless
      min: 0, // Don't keep idle connections
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 3000, // Fast connection timeout for serverless
      query_timeout: 5000, // Query timeout
      statement_timeout: 5000, // PostgreSQL statement timeout
    });

    const adapter = new PrismaPg(pool);
    globalForPrisma.prisma = new PrismaClient({
      adapter,
      log:
        process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    });

    console.log("Prisma client initialized successfully");
  } catch (error) {
    console.error("Failed to initialize Prisma client:", error);
    throw error;
  }
}

prisma = globalForPrisma.prisma;

export { prisma };
