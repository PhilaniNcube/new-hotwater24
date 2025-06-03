import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HouseTypesChart } from "@/components/charts/HouseTypesChart";

import { getLeads } from "@/lib/queries/leads";
import { Database } from "@/schema";

type Quote = Database["public"]["Tables"]["quotes"]["Row"];

// Define types for analytics return data
interface ChartDataItem {
  name: string;
  value: number;
}

interface MonthlyDataItem {
  month: string;
  leads: number;
}

interface FlowRateDataItem {
  range: string;
  count: number;
}

interface AnalyticsData {
  totalLeads: number;
  contactedLeads: number;
  conversionRate: number;
  houseTypes: ChartDataItem[];
  cities: ChartDataItem[];
  gasSupply: ChartDataItem[];
  financing: ChartDataItem[];
  monthlyData: MonthlyDataItem[];
  avgGeyserPrice: number;
  avgBathrooms: number;
  avgElectricGeysers: number;
  flowRateRanges: FlowRateDataItem[];
  completeSolutionRate: number;
}

// Helper function to calculate analytics from quotes data
function calculateAnalytics(quotes: Quote[]): AnalyticsData {
  const totalLeads: number = quotes.length;
  const contactedLeads: number = quotes.filter((q) => q.contacted).length;
  const conversionRate: number =
    totalLeads > 0 ? (contactedLeads / totalLeads) * 100 : 0;

  // House type distribution
  const houseTypeMap = new Map<string, number>();
  quotes.forEach((quote) => {
    const count = houseTypeMap.get(quote.houseType) || 0;
    houseTypeMap.set(quote.houseType, count + 1);
  });

  // City distribution (top 10)
  const cityMap = new Map<string, number>();
  quotes.forEach((quote) => {
    const count = cityMap.get(quote.city) || 0;
    cityMap.set(quote.city, count + 1);
  });

  // Gas supply distribution
  const gasSupplyMap = new Map<string, number>();
  quotes.forEach((quote) => {
    const count = gasSupplyMap.get(quote.gasSupply) || 0;
    gasSupplyMap.set(quote.gasSupply, count + 1);
  });

  // Financing preferences
  const financingMap = new Map<string, number>();
  quotes.forEach((quote) => {
    const financeType: string =
      quote.financing === "" || quote.financing === "false"
        ? "No Financing"
        : quote.financing === "true"
          ? "Full Financing"
          : quote.financing || "Unknown";
    const count = financingMap.get(financeType) || 0;
    financingMap.set(financeType, count + 1);
  });

  // Monthly trend (last 6 months)
  const monthlyMap = new Map<string, number>();
  quotes.forEach((quote) => {
    const date = new Date(quote.created_at);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const count = monthlyMap.get(monthKey) || 0;
    monthlyMap.set(monthKey, count + 1);
  });

  // Average pricing
  const validPrices = quotes.filter(
    (q): q is Quote & { geyserPrice: number } =>
      q.geyserPrice !== null && q.geyserPrice > 0
  );
  const avgGeyserPrice: number =
    validPrices.length > 0
      ? validPrices.reduce((sum, q) => sum + q.geyserPrice, 0) /
        validPrices.length
      : 0;

  // Bathroom and geyser statistics
  const bathroomQuotes = quotes.filter(
    (q): q is Quote & { bathrooms: number } => q.bathrooms !== null
  );
  const avgBathrooms: number =
    bathroomQuotes.length > 0
      ? bathroomQuotes.reduce((sum, q) => sum + q.bathrooms, 0) /
        bathroomQuotes.length
      : 0;

  const electricGeyserQuotes = quotes.filter(
    (q): q is Quote & { electric_geysers: number } =>
      q.electric_geysers !== null
  );
  const avgElectricGeysers: number =
    electricGeyserQuotes.length > 0
      ? electricGeyserQuotes.reduce((sum, q) => sum + q.electric_geysers, 0) /
        electricGeyserQuotes.length
      : 0;

  // Flow rate distribution
  const flowRateRanges: Record<string, number> = {
    "0-10 L/min": quotes.filter((q) => q.flowRate <= 10).length,
    "11-20 L/min": quotes.filter((q) => q.flowRate > 10 && q.flowRate <= 20)
      .length,
    "21-30 L/min": quotes.filter((q) => q.flowRate > 20 && q.flowRate <= 30)
      .length,
    "31+ L/min": quotes.filter((q) => q.flowRate > 30).length,
  };

  // Complete solution preference
  const completeSolution: number = quotes.filter(
    (q) => q.completeSolution === true
  ).length;
  const completeSolutionRate: number =
    totalLeads > 0 ? (completeSolution / totalLeads) * 100 : 0;

  return {
    totalLeads,
    contactedLeads,
    conversionRate,
    houseTypes: Array.from(houseTypeMap.entries()).map(([name, value]) => ({
      name,
      value,
    })),
    cities: Array.from(cityMap.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([name, value]) => ({ name, value })),
    gasSupply: Array.from(gasSupplyMap.entries()).map(([name, value]) => ({
      name,
      value,
    })),
    financing: Array.from(financingMap.entries()).map(([name, value]) => ({
      name,
      value,
    })),
    monthlyData: Array.from(monthlyMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-6)
      .map(([month, leads]) => ({ month, leads })),
    avgGeyserPrice,
    avgBathrooms,
    avgElectricGeysers,
    flowRateRanges: Object.entries(flowRateRanges).map(([range, count]) => ({
      range,
      count,
    })),
    completeSolutionRate,
  };
}

const page = async () => {
  const quotes = await getLeads();
  const analytics = calculateAnalytics(quotes);

  return (
    <main className="container py-10 mx-auto max-w-7xl min-h-[70vh]">
      <div className="flex items-center justify-between w-full mb-8">
        <h1 className="text-3xl font-medium">Admin Dashboard</h1>
        <Link
          href={{
            pathname: "/admin/leads",
            query: {
              page: "1",
              page_size: "500",
              search: "",
            },
          }}
        >
          <Button type="button" className="text-white bg-brand">
            Leads
          </Button>
        </Link>
      </div>

      {/* House Types Chart */}
      {/* <HouseTypesChart data={analytics.houseTypes} /> */}
    </main>
  );
};
export default page;
