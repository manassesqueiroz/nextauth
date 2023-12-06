"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";
const prisma = new PrismaClient();

const SignupSchema = z.object({
  email: z.string({ invalid_type_error: "Write your Email" }).email(),
  password: z.string({ invalid_type_error: "Write your Password" }).min(6),
});
export type State = {
  errors?: {
    email?: string[] | undefined;
    password?: string[] | undefined
  };
  
  message?: string | null;
};

export async function SignUp(
  prevState: State,
  formData: FormData,
) {
  const validatedFields = SignupSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error Create user",
    };
  }
  const { email, password } = validatedFields.data;
  try {
    await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
      },
    });
  } catch (e) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
  return redirect("/login");
}
