import "server-only";

import { cache } from "react";
import { createClient } from "@/utils/supabase/server";

export const getIsAdmin = cache(async () => {
  const supabase = await createClient();
  const { data } = await supabase.rpc("is_admin");
  return data;
});
