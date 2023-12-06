import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export async function SignIn(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", Object.fromEntries(formData));
    redirect("/dashboard");
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
}