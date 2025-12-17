export default async function handler(req) {
  return new Response(
    JSON.stringify({
      success: true,
      message: "API is working",
      timestamp: new Date().toISOString(),
      env: {
        DATABASE_URL: process.env.DATABASE_URL ? "SET" : "NOT SET",
        NODE_ENV: process.env.NODE_ENV,
      },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
