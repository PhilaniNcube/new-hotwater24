
import { Card, Title, BarChart } from "@tremor/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";



const page = async () => {
  

    const supabase = await createClient();


   const tableData = supabase.from("flowrate_counts").select("*").order("flowrate", { ascending: true });

  const [ {data:table, error}] = await Promise.all([
    tableData
  ]);



  return (
    <main className="container py-10">
      <div className="flex items-center justify-between w-full">
      <h1 className="text-3xl font-medium">Admin Dashboard</h1>
      <Link href={{
        pathname: "/admin/leads",
        query: {
          page: "1",
          page_size: "500",
          search: ""
        }
      }}>
        <Button type="button" className="text-white bg-brand">
          Leads
        </Button>
      </Link>
      </div>
      <Card className="px-6 mt-4 text-black">
        <Title>Flowrate Summary</Title>
        <BarChart
          color="emerald"
          className="mt-6"
          data={table|| []}
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
