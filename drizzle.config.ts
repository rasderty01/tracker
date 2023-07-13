import type { Config } from "drizzle-kit";

import "dotenv/config";

export default {
  schema: "./src/lib/db/schema.ts",
  out: "./src/migrations",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "",
  },
} satisfies Config;
