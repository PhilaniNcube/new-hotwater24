import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { bebas } from "../fonts";
import Choose from "@/components/Choose";
import WhoWeAreHero from "@/components/WhoWeAre/who-we-are-hero";
import WhoWeAre from "@/components/WhoWeAre/who-we-are";

const page = () => {
  return (
    <main className="">
     <WhoWeAreHero />
     <WhoWeAre />
    </main>
  );
};
export default page;
