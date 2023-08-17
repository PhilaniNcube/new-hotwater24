"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("sign-in");
  // const router = useRouter()
  const supabase = createClientComponentClient<Database>();

  // const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/auth/callback`,
  //     },
  //   })
  //   setView('check-email')
  // }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


const { data, error } = await supabase.auth.updateUser({
  email,
  password,
});

if(error) {
  toast({
    title: 'Error updating password'
  })
} else if(data) {
  toast({
    title: 'Success',
    description: "Password updated"
  })
}

  };



  return (
    <div className="flex-1 flex flex-col w-full h-screen px-8 sm:max-w-md mx-auto py-16 justify-center gap-2">
      <h1 className="text-4xl font-bold text-center text-slate-800">Log In</h1>
      <form onSubmit={handleSignIn}>
        <div className="w-full flex flex-col space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full mt-3 flex flex-col space-y-3">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="mt-3 w-full">
          Update Password
        </Button>
      </form>
    </div>
  );
}
