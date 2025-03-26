
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {


  const supabase = await createClient()

  // This assumes you have a `todos` table in Supabase. Check out
  // the `Create Table and seed with data` section of the README 👇
  // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    console.log(error)
    return NextResponse.json({products: [], error: error.message}, {status: 500})
  }

  return NextResponse.json({products:products, error: null}, {status: 200})
}
