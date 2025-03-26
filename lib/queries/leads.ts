import { createClient } from "@/utils/supabase/server";

export async function getLeads(page = 1, query = "") {
  const supabase = await createClient();

  const limit = 600;
  // get the start and end values for pagination
  const start = (page - 1) * limit;
  const end = page * limit;

  const { data, error } = await supabase.from("quotes").select("*").range(start, end).or(`houseType.ilike.%${query}%,email.ilike.%${query}%`).order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}


export async function getLead(id:number) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("quotes").select("*").eq("id", id).single();

  if (error) {
    throw error;
  }

  return data;
}
