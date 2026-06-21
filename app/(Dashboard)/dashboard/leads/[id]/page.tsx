import { Suspense } from "react";
import { LeadContent } from "../../../_components/lead-content";
import { LeadSkeleton } from "../../../_components/lead-skeleton";

export default function LeadPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<LeadSkeleton />}>
      {params.then(({ id }) => (
        <LeadContent id={Number(id)} />
      ))}
    </Suspense>
  );
}
