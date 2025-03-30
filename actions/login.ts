"use server";

import { createClient } from "@/utils/supabase/server";

export async function login(prevState:unknown, formData:FormData) {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = await createClient();
    
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
            success: true,
            message: "Login successful",
        }

    } catch (error) {

        return {
            error: true,
            message: "Invalid email or password",
        }
        
    }

    

}