export function LeadsSkeleton() {
  return (
    <div className="container py-10 mx-auto max-w-7xl">
      <div className="h-8 w-64 bg-muted animate-pulse rounded mb-4" />
      <div className="h-10 w-full max-w-sm bg-muted animate-pulse rounded mb-4" />
      <div className="border rounded-md">
        <div className="h-12 bg-muted animate-pulse rounded-t" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 bg-muted/50 animate-pulse border-t" />
        ))}
      </div>
    </div>
  );
}
