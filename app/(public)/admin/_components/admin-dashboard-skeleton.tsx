export function AdminDashboardSkeleton() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-2">
            <div className="h-4 w-24 bg-muted animate-pulse rounded" />
            <div className="h-8 w-16 bg-muted animate-pulse rounded" />
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-3">
            <div className="h-5 w-24 bg-muted animate-pulse rounded" />
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="h-4 w-full bg-muted animate-pulse rounded" />
            ))}
          </div>
        ))}
      </section>

      <section className="p-4 mt-6 border rounded-lg space-y-3">
        <div className="h-5 w-40 bg-muted animate-pulse rounded" />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-3 border rounded-md space-y-2">
              <div className="h-4 w-full bg-muted animate-pulse rounded" />
              <div className="h-6 w-8 bg-muted animate-pulse rounded" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
