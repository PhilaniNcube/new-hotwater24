import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LeadsTable from "./LeadsTable";

export const dynamic = "force-dynamic";

type ServerPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: ServerPageProps) => {

  const supabase = createServerComponentClient<Database>({ cookies });

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["page_size"] ?? "500";

  const searchTerm = searchParams["search"] || "";

  if(typeof searchTerm !== "string") throw new Error("Search term must be a string");



  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...


  const quotesData = supabase
    .from("quotes")
    .select("*", { count: "exact" })
    .range(start, end)
    .order("created_at", { ascending: false })
    .ilike('email', `%${searchTerm.toLowerCase()}%`);


  const [{ data: leads, error: leadsError, count }] = await Promise.all([
    quotesData,
  ]);



  const getPages = () => {
    if (!count) return 1;
    return Math.ceil(count / Number(per_page));
  };

  const pages = getPages();

  const hasNextPage = async (page: number) => {
    "use server"
    return await page < pages;
  }

  const hasPreviousPage = async (page: number) => {
    "use server"
    return await page > 1;
  }

  const isThereNextPage = await hasNextPage(Number(page));
  const isTherePreviousPage = await hasPreviousPage(Number(page));

  return (
    <div className="container">
      <h1>Admin Page</h1>
      <LeadsTable
        leads={leads!}
        isThereNextPage={isThereNextPage}
        isTherePreviousPage={isTherePreviousPage}
        page={Number(page)}
      />
    </div>
  );
};
export default page;
