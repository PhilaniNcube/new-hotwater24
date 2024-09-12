import  type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
	title: "Hotwater24 | Contact Us",
	description: "Get in touch with us for more information on gas geysers",
	keywords:
		"gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
	openGraph: {
		title: "Hotwater24 | Contact Us",
		description: "Get in touch with us for more information on gas geysers",
	},
};

export const dynamic = 'force-static'

const page = () => {
  return <ContactPage />;
};
export default page;
