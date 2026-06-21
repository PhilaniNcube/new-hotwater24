import { notFound } from "next/navigation";
import { getLead } from "@/features/leads/leads-queries";
import LeadDetailsPage from "./lead-details";

export async function LeadContent({ id }: { id: number }) {
  const lead = await getLead(id);
  if (!lead) notFound();
  return (
    <div>
      <LeadDetailsPage leadDetails={lead} />
    </div>
  );
}
