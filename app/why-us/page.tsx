
import ChooseUsHero from "@/components/ChooseUs/choose-us-hero";
import SafeInstallations from "@/components/ChooseUs/safe-installations";
import ChooseLpg from "@/components/ChooseUs/why-choose-lpg";
import WhyUsHero from "./_components/WhyUsHero";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotwater24 | Why Choose Us",
  description:
    "Choose our professional and experienced gas geyser installation services for a safe, rapid, and efficient installation process. Available 24/7, our certified technicians ensure high quality, affordable, and reliable geyser services with a 100% satisfaction guarantee. Get a free estimate today.",
  keywords:
    "Professional Gas Geyser Installation, Certified Technicians, Affordable Gas Geyser Services, Rapid Installation Process, Excellent Customer Service, 24/7 Service Availability, Gas Geyser Repair and Maintenance, Safe Geyser Installations, Experienced Installation Team, High-Quality Installation Service, Warranty on Installation, Reliable Geyser Service Provider, Free Installation Estimates, Trustworthy Gas Geyser Installer, Fast and Efficient Service, Guaranteed Satisfactory Results, Cost-Effective Geyser Services, Emergency Gas Geyser Assistance, Advanced Installation Techniques, Premium Geyser Installation Services, Years of Installation Experience, Customer-Focused Services, Comprehensive Gas Geyser Solutions, 100% Satisfaction Guarantee, Licensed and Insured Geyser Services",
};

const page = () => {
  return (
    <main className="relative">
      <WhyUsHero />
      <ChooseUsHero />
      <ChooseLpg />
      <SafeInstallations />
    </main>
  );
};
export default page;
