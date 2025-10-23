import { PrismaClient } from "@prisma/client/extension";

import { env } from "../env/index.ts";


export const prisma = new PrismaClient(
   env.NODE_ENV === "development" ? {log: ["query", "info", "warn", "error"]} : {}
)