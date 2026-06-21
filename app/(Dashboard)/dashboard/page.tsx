import { Suspense } from "react";
import { LeadsContent } from "../_components/leads-content";
import { LeadsSkeleton } from "../_components/leads-skeleton";

export default function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<LeadsSkeleton />}>
        <LeadsContent />
      </Suspense>
    </div>
  );
}
