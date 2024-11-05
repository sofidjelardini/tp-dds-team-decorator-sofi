import { z, ZodType } from "zod";
import { LoginForm } from "../types";

export const LoginFormSchema: ZodType<LoginForm> = z.object({
  email: z.string().email({ message: "Mail no válido" }),
  password: z.string(),
});
