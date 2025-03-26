import { createClient } from "@/utils/supabase/server";

export async function getAdmin () {
  const supabase = await createClient()

  const {data} = await supabase.rpc("is_admin")

  console.log(data)

  return data
}
