// src/env/index.ts
import { z } from "zod";
import "dotenv/config";
import chalk from "chalk";


const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default("2d"),
});


const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  
  const formattedErrors = _env.error.format();

  console.error(chalk.red("❌ Variáveis de ambiente inválidas:"));
  
  for (const key in formattedErrors) {
    const error = (formattedErrors as any)[key]?._errors;
    if (error && error.length > 0) {
      console.error(chalk.yellow(`- ${key}: ${error.join(", ")}`));
    }
  }

  throw new Error(chalk.red("Por favor, corrija as variáveis de ambiente listadas acima."));
}

export const env = _env.data;

export type Env = typeof env;
