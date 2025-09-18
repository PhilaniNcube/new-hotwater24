import CityHero from "./_components/CityHero";
import CitySection from "./_components/CitySection";
import { areas } from "@/utils/areas";

export const dynamic = "force-static";

const page = async ({ params }: { params: Promise<{ city: string }> }) => {
  const { city } = await params;

  const area = areas.find((area) => area.slug === city);

  if (!area) {
    return <div className="container p-4 mx-auto">City not found</div>;
  }

  return (
    <main>
      <CityHero city={area?.name} />
      <CitySection city={area?.name} />
    </main>
  );
};
export default page;
