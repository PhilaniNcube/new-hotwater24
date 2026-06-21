'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { createBrowserClient } from '@supabase/ssr'

export default function LogoutButton() {
  const router = useRouter()

  const signOut = async () => {
    const supabase = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
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
