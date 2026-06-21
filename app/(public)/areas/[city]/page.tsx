import { Suspense } from "react";
import { CityContent } from "./_components/city-content";
import { CitySkeleton } from "./_components/city-skeleton";

export default function CityPage({ params }: { params: Promise<{ city: string }> }) {
  return (
    <Suspense fallback={<CitySkeleton />}>
      {params.then(({ city }) => (
        <CityContent city={city} />
      ))}
    </Suspense>
  );
}
