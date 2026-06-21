import CityHero from "./CityHero";
import CitySection from "./CitySection";
import { areas } from "@/utils/areas";
import { notFound } from "next/navigation";

export async function CityContent({ city }: { city: string }) {
  const area = areas.find((area) => area.slug === city);

  if (!area) {
    notFound();
  }

  return (
    <main>
      <CityHero city={area.name} />
      <CitySection city={area.name} />
    </main>
  );
}
