export function AdminLeadsSkeleton() {
  return (
    <div className="w-full space-y-4">
      <div className="h-10 w-full max-w-sm bg-muted animate-pulse rounded" />
      <div className="border rounded-md">
        <div className="h-12 bg-muted animate-pulse rounded-t" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 bg-muted/50 animate-pulse border-t" />
        ))}
      </div>
    </div>
  );
}
