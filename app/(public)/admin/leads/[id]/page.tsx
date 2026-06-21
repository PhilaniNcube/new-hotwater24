import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";
import { AdminLeadContent } from "./_components/admin-lead-content";
import { AdminLeadSkeleton } from "./_components/admin-lead-skeleton";

export default function AdminLeadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main className="container py-10 mx-auto max-w-7xl">
      <div className="flex items-center justify-between w-full mb-6">
        <h1 className="text-3xl font-medium">Lead Details</h1>
        <div className="flex items-center gap-3">
          <Link href="/admin">
            <Button type="button" variant="outline">Dashboard</Button>
          </Link>
          <Link href="/admin/leads?page=1&page_size=500&search=">
            <Button type="button" variant="outline">Leads</Button>
          </Link>
          <LogoutButton />
        </div>
      </div>
      <Suspense fallback={<AdminLeadSkeleton />}>
        {params.then(({ id }) => (
          <AdminLeadContent id={Number(id)} />
        ))}
      </Suspense>
    </main>
  );
}
