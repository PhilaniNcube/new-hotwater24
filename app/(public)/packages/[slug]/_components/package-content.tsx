import PackageDetails from "@/components/Packages/package-details";
import { getGeyserBySlug } from "@/features/geysers/geysers-queries";

export async function PackageContent({ slug }: { slug: string }) {
  const geyser = await getGeyserBySlug(slug);

  return (
    <main className="container py-10 mx-auto max-w-7xl">
      <PackageDetails geyser={geyser} />
    </main>
  );
}
