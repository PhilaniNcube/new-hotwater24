"use server";

import { createClient } from "@/utils/supabase/server";

type SignupActionState = {
  error: boolean;
  message: string;
  success: boolean;
};

const defaultState: SignupActionState = {
  error: false,
  message: "",
  success: false,
};

export async function signup(
  _prevState: SignupActionState | null,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!email || !password || !confirmPassword) {
    return {
      ...defaultState,
      error: true,
      message: "Email, password and confirm password are required",
    };
  }

  if (password !== confirmPassword) {
    return {
      ...defaultState,
      error: true,
      message: "Passwords do not match",
    };
  }

  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.WEBSITE_URL}/auth/confirm?next=/admin`,
      },
    });

    if (error) {
      console.error("Sign up error:", error.message);
      throw error;
    }

    return {
      ...defaultState,
      success: true,
      message:
        "Account created. Please check your email to confirm your account.",
    };
  } catch (_error) {
    return {
      ...defaultState,
      error: true,
      message: "Could not create account. Please try again.",
    };
  }
}
