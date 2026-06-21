import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";
import { AdminLeadsContent } from "./_components/admin-leads-content";
import { AdminLeadsSkeleton } from "./_components/admin-leads-skeleton";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function AdminLeadsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div className="container py-10 mx-auto max-w-7xl">
      <div className="flex items-center justify-between w-full mb-6">
        <h1 className="text-3xl font-medium">Admin Leads</h1>
        <div className="flex items-center gap-3">
          <Link href="/admin">
            <Button type="button" variant="outline">Dashboard</Button>
          </Link>
          <LogoutButton />
        </div>
      </div>
      <Suspense fallback={<AdminLeadsSkeleton />}>
        {searchParams.then((sp) => {
          const page = typeof sp.page === "string" ? sp.page : "1";
          const per_page = typeof sp.page_size === "string" ? sp.page_size : "500";
          const search = typeof sp.search === "string" ? sp.search : "";
          return <AdminLeadsContent page={page} per_page={per_page} search={search} />;
        })}
      </Suspense>
    </div>
  );
}
