
import WhoWeAreHero from "@/components/WhoWeAre/who-we-are-hero";
import WhoWeAre from "@/components/WhoWeAre/who-we-are";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Hotwater24 | Who We Are",
	description:
		"Gas specialists to assist and advise you on the most cost-effective and efficient gas water heating solution for your household",
	keywords:
		"gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
	openGraph: {
		title: "Hotwater24 | Who We Are",
		description:
			"Gas specialists to assist and advise you on the most cost-effective and efficient gas water heating solution for your household",
	},
};

const page = () => {
  return (
    <main className="">
     <WhoWeAreHero />
     <WhoWeAre />

    </main>
  );
};
export default page;
