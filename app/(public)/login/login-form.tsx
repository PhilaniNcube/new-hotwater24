"use client";

import { useActionState, useState } from "react";
import { loginWithMagicLink, loginWithPassword } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import { Loader2, AlertCircle } from "lucide-react";

const initialState = {
  error: false,
  message: "",
  success: false,
};

export default function LoginForm() {
  const [method, setMethod] = useState<"password" | "magic-link">("password");
  const [passwordState, passwordAction, isPasswordPending] = useActionState(
    loginWithPassword,
    initialState
  );
  const [magicState, magicAction, isMagicPending] = useActionState(
    loginWithMagicLink,
    initialState
  );

  const state = method === "password" ? passwordState : magicState;
  const isPending = method === "password" ? isPasswordPending : isMagicPending;
  const formAction = method === "password" ? passwordAction : magicAction;



  return (
    <div className="w-full max-w-md space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500">Use password or a magic link to access your account</p>
      </div>

      <div className="grid grid-cols-2 gap-2 p-1 rounded-md bg-muted">
        <Button
          type="button"
          variant={method === "password" ? "default" : "ghost"}
          className="w-full"
          onClick={() => setMethod("password")}
          disabled={isPending}
        >
          Password
        </Button>
        <Button
          type="button"
          variant={method === "magic-link" ? "default" : "ghost"}
          className="w-full"
          onClick={() => setMethod("magic-link")}
          disabled={isPending}
        >
          Magic Link
        </Button>
      </div>

      {state?.error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state?.success && (
        <Alert className="bg-green-50 text-green-800 border-green-200">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
            disabled={isPending}
          />
        </div>

        {method === "password" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-brand hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              required
              disabled={isPending}
            />
          </div>
        )}

        <Button type="submit" className="w-full bg-brand text-white" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {method === "password" ? "Logging in..." : "Sending magic link..."}
            </>
          ) : (
            method === "password" ? "Sign In" : "Send Magic Link"
          )}
        </Button>
      </form>

     
    </div>
  );
}