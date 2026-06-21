import "server-only";

import { cache } from "react";
import { createClient } from "@/utils/supabase/server";

export const getLeads = cache(async (page = 1, query = "") => {
  const supabase = await createClient();

  const limit = 600;
  const start = (page - 1) * limit;
  const end = page * limit;

  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .range(start, end)
    .or(`houseType.ilike.%${query}%,email.ilike.%${query}%`)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
});

export const getLead = cache(async (id: number) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
});

export const getAdminLeads = cache(
  async (page: string, perPage: string, search: string) => {
    const supabase = await createClient();

    const start = (Number(page) - 1) * Number(perPage);
    const end = start + Number(perPage);

    const { data, error } = await supabase
      .from("quotes")
      .select("*", { count: "exact" })
      .range(start, end)
      .order("created_at", { ascending: false })
      .ilike("email", `%${search.toLowerCase()}%`);

    if (error) {
      throw error;
    }

    return data ?? [];
  }
);
