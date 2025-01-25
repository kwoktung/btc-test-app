import 'dotenv/config'

import { defineConfig } from "drizzle-kit";



export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  dbCredentials: {
    url: process.env.AUTH_DRIZZLE_URL ?? 'postgres://127.0.0.1:5432/btc-demo',
  },
});