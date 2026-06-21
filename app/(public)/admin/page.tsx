import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";
import { AdminDashboardContent } from "./_components/admin-dashboard-content";
import { AdminDashboardSkeleton } from "./_components/admin-dashboard-skeleton";

export default function AdminPage() {
  return (
    <main className="container py-10 mx-auto max-w-7xl min-h-[70vh]">
      <div className="flex items-center justify-between w-full mb-8">
        <h1 className="text-3xl font-medium">Admin Dashboard</h1>
        <div className="flex items-center gap-3">
          <Link
            href={{
              pathname: "/admin/leads",
              query: {
                page: "1",
                page_size: "500",
                search: "",
              },
            }}
          >
            <Button type="button" className="text-white bg-brand">
              Leads
            </Button>
          </Link>
          <LogoutButton />
        </div>
      </div>

      <Suspense fallback={<AdminDashboardSkeleton />}>
        <AdminDashboardContent />
      </Suspense>
    </main>
  );
}
