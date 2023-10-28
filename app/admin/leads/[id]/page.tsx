import { cookies } from "next/headers";
import QuoteData from "./QuoteData";
import { redirect } from "next/navigation";
import { createServerClient } from "@supabase/ssr";

const page = async ({params: {id}}:{params:{id:string}}) => {

    const cookieStore = cookies();

    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
        },
      }
    );

  const {data:lead, error} = await supabase.from("quotes").select("*").eq("id", id).single();

  if(error) redirect("/admin/leads");

  return <main className="container py-10">
    <QuoteData lead={lead!} />
  </main>;
};
export default page;
