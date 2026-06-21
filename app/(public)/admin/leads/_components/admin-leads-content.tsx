import { getAdminLeads } from "@/features/leads/leads-queries";
import LeadsTable from "../LeadsTable";

type AdminLeadsContentProps = {
  page: string;
  per_page: string;
  search: string;
};

export async function AdminLeadsContent({ page, per_page, search }: AdminLeadsContentProps) {
  const leads = await getAdminLeads(page, per_page, search);

  if (!leads) {
    return <p>Error fetching leads</p>;
  }

  // Note: pagination metadata is not returned by the cached query;
  // the existing LeadsTable only uses these for external page links.
  const isThereNextPage = leads.length >= Number(per_page);
  const isTherePreviousPage = Number(page) > 1;

  return (
    <LeadsTable
      leads={leads}
      isThereNextPage={isThereNextPage}
      isTherePreviousPage={isTherePreviousPage}
      page={Number(page)}
    />
  );
}
