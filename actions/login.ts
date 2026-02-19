"use server";

import { createClient } from "@/utils/supabase/server";

type LoginActionState = {
    error: boolean;
    message: string;
    success: boolean;
};

const defaultState: LoginActionState = {
    error: false,
    message: "",
    success: false,
};

export async function loginWithPassword(
    _prevState: LoginActionState | null,
    formData: FormData
) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = await createClient();

    if (!email || !password) {
        return {
            ...defaultState,
            error: true,
            message: "Email and password are required",
        };
    }

    try {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error("Login error:", error.message);
            throw error;
        }

        return {
            ...defaultState,
            success: true,
            message: "Login successful",
        };
    } catch (_error) {
        return {
            ...defaultState,
            error: true,
            message: "Invalid email or password",
        };
    }
}

export async function loginWithMagicLink(
    _prevState: LoginActionState | null,
    formData: FormData
) {
    const email = formData.get("email") as string;
    const supabase = await createClient();

    if (!email) {
        return {
            ...defaultState,
            error: true,
            message: "Email is required",
        };
    }

    try {
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${process.env.WEBSITE_URL}/auth/confirm?next=/admin`,
            },
        });

        if (error) {
            console.error("Magic link login error:", error.message);
            throw error;
        }

        return {
            ...defaultState,
            success: true,
            message: "Magic link sent. Check your email to continue.",
        };
    } catch (_error) {
        return {
            ...defaultState,
            error: true,
            message: "Could not send magic link. Please try again.",
        };
    }
}

export const login = loginWithPassword;