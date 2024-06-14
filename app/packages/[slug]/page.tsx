import PackageDetails from "@/components/Packages/package-details";
import { getGeyser } from "@/sanity/sanity-utils";
import type { Metadata, ResolvingMetadata } from "next";

export const dynamic = 'force-static'

type Props = {
	params: { slug: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// read route params
	const slug = params.slug;

	// fetch data
	const geyser = await getGeyser(slug);

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || [];

	return {
		metadataBase: new URL("https://www.hotwater24.com"),
		title: `${geyser.title} | Hotwater24`,
		description: geyser.description,
		keywords:
			"gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
		twitter: {
			card: "summary_large_image",
			title: geyser.title,
			description: geyser.description,
			images: [geyser.image],
		},
		robots: {
			follow: true,
			index: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: true,
			},
		},
		openGraph: {
			images: [geyser.image, ...previousImages],
			title: `${geyser.title} | Hotwater24`,
			description: geyser.description,
			type: "website",
		},
	};
}

const page = async ({params: {slug}}: {params: {slug: string}}) => {

  const geyser = await getGeyser(slug)

  return (
    <main className="container py-10">
      <PackageDetails geyser={geyser} />
    </main>
  );
};
export default page;
