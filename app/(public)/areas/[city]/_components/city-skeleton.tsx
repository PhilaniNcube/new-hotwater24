export function CitySkeleton() {
  return (
    <div className="space-y-8">
      <div className="h-64 w-full bg-muted animate-pulse" />
      <div className="container mx-auto space-y-4">
        <div className="h-8 w-1/2 bg-muted animate-pulse rounded" />
        <div className="h-4 w-full bg-muted animate-pulse rounded" />
        <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
      </div>
    </div>
  );
}
