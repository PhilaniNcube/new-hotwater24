import Choose from "@/components/Choose";
import ChooseUsHero from "@/components/ChooseUs/choose-us-hero";
import ChooseLpg from "@/components/ChooseUs/why-choose-lpg";
import { ArrowRight, FlagIcon, Users2Icon } from "lucide-react";
import Link from "next/link";
import { RiFilePaperLine } from "react-icons/ri";

const page = () => {
  return (
    <main className="relative">
      <ChooseUsHero />
      <ChooseLpg />
    </main>
  );
};
export default page;
