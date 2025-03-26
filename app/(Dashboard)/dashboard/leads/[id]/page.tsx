import LeadDetailsPage from "@/app/(Dashboard)/_components/lead-details";
import { getLead } from "@/lib/queries/leads";

const LeadPage = async ({params}:{params:Promise<{id:number}>}) => {

  const { id } = await params;

  const lead = await getLead(id);

  return <div>
    <LeadDetailsPage leadDetails={lead} />
  </div>;
};
export default LeadPage;
