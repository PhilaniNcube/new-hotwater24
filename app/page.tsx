import Hero from "@/components/Homepage/Hero";
import CTA from "@/components/Homepage/CTA";
import Safe from "@/components/Homepage/Safe";
import NewHero from "@/components/Homepage/NewHero";
import WhyGoGas from "@/components/Homepage/why-choose-gas";
import WhatAreYouWaitingFor from "@/components/Homepage/what-are-waiting-for";
import GeyserPackages from "@/components/Homepage/geyser-packages";
import ButtonCtaSection from "@/components/Homepage/button-cta-section";
import InstallationTimeline from "@/components/Homepage/installation-timeline";
import QualityGeysers from "@/components/Homepage/quality-geysers";
import Testimonials from "@/components/Homepage/testimonials";
import DiscountBanner from "@/components/Homepage/discount-banner";

import type { Metadata } from "next";
import Bosch from "@/components/Homepage/bosch";

export const metadata: Metadata = {
	title: "Hotwater24 | Gas Geyser Installations",
	description:
		"Hotwater24 is a gas geyser installation company based in Cape Town. We offer a full service solution for your gas geyser installation needs.",
	keywords:
		"gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
	openGraph: {
		title: "Hotwater24 | Gas Geyser Installations",
		description:
			"Hotwater24 is a gas geyser installation company based in Cape Town. We offer a full service solution for your gas geyser installation needs.",
	},
};

export const dynamic = "force-static";

export default async function Index() {
	return (
		<main>
			<NewHero />
			<Bosch />
			<WhyGoGas />
			<WhatAreYouWaitingFor />
			<GeyserPackages />
			<ButtonCtaSection />
			<InstallationTimeline />
			<QualityGeysers />
			<Testimonials />
			<Safe />
		</main>
	);
}
