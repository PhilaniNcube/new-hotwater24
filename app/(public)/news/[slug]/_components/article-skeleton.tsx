export function ArticleSkeleton() {
  return (
    <div className="container py-10 mx-auto max-w-7xl space-y-4">
      <div className="h-8 w-3/4 bg-muted animate-pulse rounded" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="aspect-video bg-muted animate-pulse rounded" />
        <div className="space-y-4">
          <div className="h-4 w-48 bg-muted animate-pulse rounded" />
          <div className="h-4 w-full bg-muted animate-pulse rounded" />
          <div className="h-4 w-full bg-muted animate-pulse rounded" />
          <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
          <div className="h-10 w-32 bg-muted animate-pulse rounded" />
        </div>
      </div>
    </div>
  );
}
