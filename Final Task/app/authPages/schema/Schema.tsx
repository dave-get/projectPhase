import { ZodType, z } from "zod";

export const SignupSchema: ZodType = z
  .object({
    fullname: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const LoginSchema: ZodType = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});


export const VerifySchema: ZodType = z.object({
  input1: z.string().max(1).min(1),
  input2: z.string().max(1).min(1),
  input3: z.string().max(1).min(1),
  input4: z.string().max(1).min(1),
});

export type VerifyType = z.infer<typeof VerifySchema>
export type LoginType = z.infer<typeof LoginSchema>;
export type InputsType = z.infer<typeof SignupSchema>;
