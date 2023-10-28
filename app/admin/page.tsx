import { cookies } from "next/headers";
import { Card, LineChart, Title, BarChart } from "@tremor/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createServerClient } from "@supabase/ssr";

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

  const quotesData = supabase
    .from("quotes")
    .select("*", { count: "exact" })
    .limit(40)
    .order("created_at", { ascending: false });

   const tableData = supabase.from("flowrate_counts").select("*").order("flowrate", { ascending: true });

  const [{ data: leads, error: leadsError, count }, {data:table, error}] = await Promise.all([
    quotesData,
    tableData
  ]);

  console.log(count);

  return (
    <main className="container py-10">
      <div className="w-full flex justify-between items-center">
      <h1 className="text-3xl font-medium">Admin Dashboard</h1>
      <Link href={{
        pathname: "/admin/leads",
        query: {
          page: "1",
          page_size: "500",
          search: ""
        }
      }}>
        <Button type="button" className="bg-blue-600 text-white">
          Leads
        </Button>
      </Link>
      </div>
      <Card className="mt-4 px-6 text-black">
        <Title>Flowrate Summary</Title>
        <BarChart
          color="emerald"
          className="mt-6"
          data={table!}
          index="flowrate"
          colors={["emerald", "gray"]}
          showGridLines={true}
          categories={["count"]}
          yAxisWidth={30}
        />
      </Card>
    </main>
  );
};
export default page;
