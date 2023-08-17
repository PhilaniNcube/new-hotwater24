'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { toast } from '@/components/ui/use-toast'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const dynamic = "force-dynamic";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [view, setView] = useState('sign-in')
  // const router = useRouter()
  const supabase = createClientComponentClient<Database>()

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
    e.preventDefault()

    if(view === "sign-in") {
    const {data,error} = await supabase.auth.signInWithOtp({
        email: email,
        // password,
      });

      console.log({data,error});

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Please check your email for login link",
          variant: "destructive",
        });
      }
    }  else {
      let { data, error } = await supabase.auth.resetPasswordForEmail(email);
      console.log({ error });

      if(data) {
        toast({
          title: "Success",
          description: "Please check your email for password reset link"
        })
      }
    }

  }

  const toggleView = () => {
    if(view === "sign-in") {
      setView("reset")
    } else if (view === "reset"){
      setView("sign-in")
    }
  }

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
        {view === "sign-in" ? (
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
        ) : null}

        <Button type="submit" className="mt-3 w-full">
          {view === "sign-in" ? "Log In" : "Reset Password"}
        </Button>

        <Button type="button" variant="link" onClick={toggleView}>
         {view === "sign-in" ? "Reset Password" : "Sign In" }
        </Button>
      </form>
    </div>
  );
}
