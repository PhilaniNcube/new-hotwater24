// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req:Request) {
// get the email, name  from the request body
const { email, phone, first_name, last_name, address, city } = await req.json()

try {

  const res = await fetch(`https://salomonpiena-27.elitefunnels.com/api/site/contacts`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${process.env.SIMVOLY_API}`
  },
  body: JSON.stringify({
    name: `${first_name} ${last_name}`,
    email: email,
    address: address,
    city: city,
    phone:phone,
    properties: [{
      name: 'lead_status',
      value: 'pending'
    }]
  })
})

  const data = await res.json()

  console.log({data})




} catch (error) {
  console.log(error)


} finally {
  return NextResponse.json({message: 'success'})
}


}
