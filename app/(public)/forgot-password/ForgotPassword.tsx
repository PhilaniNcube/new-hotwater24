"use client";

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  
  const supabase = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset`,
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setIsEmailSent(true);
        toast({
          title: "Success",
          description: "Password reset link has been sent to your email",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full h-screen px-8 sm:max-w-md mx-auto py-16 justify-center gap-2">
      <h1 className="text-4xl font-bold text-center text-slate-800">Forgot Password</h1>
      
      {isEmailSent ? (
        <div className="text-center space-y-4">
          <p className="mt-4">
            Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.
          </p>
          <Button asChild className="mt-4">
            <Link href="/login">Back to Login</Link>
          </Button>
        </div>
      ) : (
        <>
          <p className="text-center text-muted-foreground mt-2 mb-4">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleForgotPassword}>
            <div className="w-full flex flex-col space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                disabled={isLoading}
              />
            </div>

            <Button 
              type="submit" 
              className="mt-6 w-full bg-brand text-white" 
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </Button>
            
            <div className="mt-4 text-center">
              <Link href="/login" className="text-sm text-brand hover:underline">
                Back to login
              </Link>
            </div>
          </form>
        </>
      )}
    </div>
  );
}