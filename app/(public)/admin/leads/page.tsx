import { cookies } from "next/headers";
import LeadsTable from "./LeadsTable";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 

const page = async (props: {searchParams:SearchParams}) => {

  const supabase = await createClient()
 
  const searchParams = await props.searchParams;


  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const page =  searchParams["page"] ?? "1";
  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const per_page = await searchParams["page_size"] ?? "500";

  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  const searchTerm = await searchParams["search"] || "";

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
				{leadsError || !leads ? (
					<p>Error fetching leads</p>
				) : (
					<LeadsTable
						leads={leads}
						isThereNextPage={isThereNextPage}
						isTherePreviousPage={isTherePreviousPage}
						page={Number(page)}
					/>
				)}
			</div>
		);
};
export default page;
