import { getLeads } from "@/features/leads/leads-queries";
import LeadsTable from "./leads-table";

export async function LeadsContent() {
  const leads = await getLeads();
  return <LeadsTable leads={leads} />;
}
