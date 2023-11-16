'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { createBrowserClient } from '@supabase/ssr'

export default function LogoutButton() {
  const router = useRouter()

  // Create a Supabase client configured to use cookies
    const supabase = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );


  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <Button
      className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      onClick={signOut}
      variant="destructive"
    >
      Logout
    </Button>
  )
}
