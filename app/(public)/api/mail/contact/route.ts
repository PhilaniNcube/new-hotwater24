import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail';
import { CookieOptions, createServerClient } from '@supabase/ssr';
import { createClient } from '@/utils/supabase/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const dynamic = 'force-dynamic'

export async function POST(req:NextRequest) {

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
