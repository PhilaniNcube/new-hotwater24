import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import QuoteData from "./QuoteData";
import { redirect } from "next/navigation";

const page = async ({params: {id}}:{params:{id:string}}) => {

  const supabase = createServerComponentClient<Database>({ cookies });

  const {data:lead, error} = await supabase.from("quotes").select("*").eq("id", id).single();

  if(error) redirect("/admin/leads");

  return <main className="container py-10">
    <QuoteData lead={lead!} />
  </main>;
};
export default page;
