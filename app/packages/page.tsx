import PackagesGrid from "@/components/Packages/packages-grid";
import { getGeysers } from "@/sanity/sanity-utils";
import { Metadata, MetadataRoute } from "next";

const BASE_URL = "https://htowater24.com";

export const metadata: Metadata = {
	title: "Hotwater24 | Gas Geyser Packages",
	description:
		"Take a look at the affordable gas geyser packages for instant hot water",
	keywords:
		"gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
	openGraph: {
		title: "Hotwater24 | Gas Geyser Packages",
		description:
			"Take a look at the affordable gas geyser packages for instant hot water",
	},
};





const page = async () => {
  return (
      <main className="container py-10">
       <PackagesGrid />
      </main>
    );
};
export default page;
