import { type Config } from "drizzle-kit";

import { env } from "~/env.mjs";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  verbose: true,
  tablesFilter: ["hn_jobs_*"],
} satisfies Config;

console.log(env.DATABASE_URL);
