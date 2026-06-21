import { redirect } from "next/navigation";
import { getLead } from "@/features/leads/leads-queries";
import QuoteData from "../QuoteData";

export async function AdminLeadContent({ id }: { id: number }) {
  const lead = await getLead(id);

  if (!lead) {
    redirect("/admin/leads");
  }

  return <QuoteData lead={lead} />;
}
