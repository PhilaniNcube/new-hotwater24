import PackageDetails from "@/components/Packages/package-details";
import { getGeyser } from "@/sanity/sanity-utils";

const page = async ({params: {slug}}: {params: {slug: string}}) => {

  const geyser = await getGeyser(slug)

  return (
    <main className="container py-10">
      <PackageDetails geyser={geyser} />
    </main>
  );
};
export default page;
