import { Metadata } from "next";
import FaqHero from "./_components/FaqHero";
import FaqArticle from "./_components/faq-article";

export const metadata: Metadata = {
	title: "Hotwater24 | Frequently Asked Questions",
	description: "What do I need to know before buying a gas geyser?",
	keywords:
		"gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
	openGraph: {
		title: "Hotwater24 | Frequently Asked Questions",
		description: "What do I need to know before buying a gas geyser?",
	},
};

const page = () => {
  return <main>
    {/* <FaqHero /> */}
    <FaqArticle />
  </main>;
};
export default page;
