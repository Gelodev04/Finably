import { fileURLToPath } from "url";
import { dirname, join } from "path";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function apiPlugin() {
  return {
    name: "api-plugin",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        // Only handle /api routes
        if (!req.url.startsWith("/api/")) {
          return next();
        }

        try {
          // Get the API route path
          const path = req.url.split("?")[0]; // Remove query string
          const routePath = path.replace("/api/", "").replace(/\/$/, "");

          console.log("API request:", req.method, path, "-> route:", routePath);

          // Map route paths to file paths
          const routeMap = {
            waitlist: join(__dirname, "api", "waitlist", "index.js"),
            "beta-application": join(
              __dirname,
              "api",
              "beta-application",
              "index.js"
            ),
          };

          const filePath = routeMap[routePath];

          if (!filePath) {
            console.log("Route not found:", routePath);
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "API route not found" }));
            return;
          }

          // Ensure environment variables are loaded
          if (!process.env.DATABASE_URL) {
            // Try to load dotenv if not already loaded
            try {
              await import("dotenv/config");
            } catch (e) {
              // dotenv might already be loaded
            }
          }

          // Import and execute the handler
          const module = await import(`file://${filePath}`);
          const handler = module.default;

          // Parse request body (for Express-style handlers)
          let body = "";
          await new Promise((resolve, reject) => {
            req.on("data", (chunk) => (body += chunk));
            req.on("end", resolve);
            req.on("error", reject);
          });

          // Create Express-style req object
          const expressReq = {
            method: req.method,
            url: req.url,
            headers: req.headers,
            body: body ? JSON.parse(body) : {},
          };

          // Create Express-style res object
          let statusCode = 200;
          const headers = {};
          const expressRes = {
            setHeader: (key, value) => {
              headers[key] = value;
            },
            status: (code) => {
              statusCode = code;
              return expressRes;
            },
            json: (data) => {
              res.writeHead(statusCode, {
                ...headers,
                "Content-Type": "application/json",
              });
              res.end(JSON.stringify(data));
            },
            end: (data) => {
              res.writeHead(statusCode, headers);
              res.end(data);
            },
          };

          // Call the handler with Express-style req and res
          await handler(expressReq, expressRes);
        } catch (error) {
          console.error("API error:", error);
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              error: "Internal server error",
              details: error.message,
            })
          );
        }
      });
    },
  };
}
