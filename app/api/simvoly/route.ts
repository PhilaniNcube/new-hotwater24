
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req:Request) {
// get the email, name  from the request body
const { email, phone, first_name, last_name, address, city } = await req.json()

try {

  const res = await fetch("https://salomonpiena-27.elitefunnels.com/api/site/contacts", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization:`Bearer ${process.env.SIMVOLY_API}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
          "Access-Control-Max-Age": "3600",
  },
  body: JSON.stringify({
    name: `${first_name} ${last_name}`,
    email: email,
    address: address || "",
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

  if (!data || data.success === false  ) {
   return NextResponse.json({message: 'There was an error saving data to Simvoly',})
  }

  return NextResponse.json({message: 'success', data: data})


} catch (error) {
  console.log(error, "Server Error")
  return NextResponse.json({message: 'There was an error', error: error})

} finally {
  // biome-ignore lint/correctness/noUnsafeFinally: <explanation>
return  NextResponse.json({message: 'success'})
}


}
