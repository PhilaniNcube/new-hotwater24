'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from '@/components/ui/use-toast'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createBrowserClient } from '@supabase/ssr'

export const dynamic = "force-dynamic";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [view, setView] = useState('sign-in')
  // const router = useRouter()
   const supabase = createBrowserClient<Database>(
     process.env.NEXT_PUBLIC_SUPABASE_URL || "",
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
   );


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

     await supabase.auth.signInWithOtp({
       email
     });

  alert("Please check your email address for a login link")

       toast({
          title: "Please check your email address for a login link",
          variant: "destructive",
       })
    }



  const toggleView = () => {
    if(view === "sign-in") {
      setView("reset")
    } else if (view === "reset"){
      setView("sign-in")
    }
  }

  return (
    <div className="flex flex-col justify-center flex-1 w-full h-screen gap-2 px-8 py-16 mx-auto sm:max-w-md">
      <h1 className="text-4xl font-bold text-center text-slate-800">Log In</h1>
      <form onSubmit={handleSignIn}>
        <div className="flex flex-col w-full space-y-3">
          <Label htmlFor="email">Email</Label>
          <Input
            required
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* {view === "sign-in" ? (
          <div className="flex flex-col w-full mt-3 space-y-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null} */}

        <Button type="submit" className="w-full mt-3">
          {view === "sign-in" ? "Log In" : "Reset Password"}
        </Button>

        <Button type="button" variant="link" onClick={toggleView}>
         {view === "sign-in" ? "Reset Password" : "Sign In" }
        </Button>
      </form>
    </div>
  );
}
