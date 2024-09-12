import { getAdmin } from "@/lib/queries/auth";
import { getLeads } from "@/lib/queries/leads";
import LeadsTable from "../_components/leads-table";

const DashboardPage = async () => {

  const leads = await getLeads();

  return <div>
    <LeadsTable leads={leads} />
  </div>;
};
export default DashboardPage;
