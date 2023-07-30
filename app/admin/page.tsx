import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

type ServerPageProps = {
  searchParams: {
    page: string
    page_size: string
    search: string
  }
}

const page = async ({ searchParams }: ServerPageProps) => {
  console.log({ searchParams });

  const supabase = createServerComponentClient<Database>({ cookies });

  const quotesData = supabase
    .from("quotes")
    .select("*", { count: "exact" })
    .limit(40)
    .order("created_at", { ascending: false });

  const [{ data: leads, error: leadsError, count }] = await Promise.all([
    quotesData,
  ]);

  console.log(count);

  return (
    <div className="container">
      <h1>Admin Page</h1>
    </div>
  );
};
export default page;
