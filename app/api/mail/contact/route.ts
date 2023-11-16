import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail';
import { CookieOptions, createServerClient } from '@supabase/ssr';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const dynamic = 'force-dynamic'

export async function POST(req:NextRequest) {
  // Create a Supabase client configured to use cookies
    const cookieStore = cookies()

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
  const body = await req.json();

  const {name, email, message} = body

    const msg = {
    to: 'info@hotwater24.com', // Change to your recipient
    from: 'info@hotwater24.com', // Change to your verified sender
    cc: email,
    subject: 'Website Contact Form',
    text: `Name: ${name},
             Email: ${email},
             Message: ${message}
      `,
    html: `<div>
                    <div style="dislpay:flex; justify-content:center;">
                        <h2>Contact Form Submission</div>
                            <h3>Name: ${name}</h3>
                          <h3>Name: ${email}</h3>
                          <p>Message: ${message}</p>
                    </div>
                </div >`,
  };

  const status = await sgMail.send(msg);
  console.log({status})

  // This assumes you have a `todos` table in Supabase. Check out
  // the `Create Table and seed with data` section of the README 👇
  // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
  // const { data: todos } = await supabase.from('todos').select()

  return NextResponse.json({message: 'success'})
}
