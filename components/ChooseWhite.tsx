"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { start } from "@/utils/gtm";

const Choose = () => {
  return (
    <Link href="/quote/start" passHref>
      <Button
        onClick={start}
        className="bg-white text-slate-900 flex space-x-2 py-2 px-4 shadow-gray-600 shadow-lg hover:shadow-sm hover:text-white items-center mt-4 rounded-full w-fit uppercase"
      >
        Choose Your Gas Geyser!
        <span>
          <ArrowRight />
        </span>
      </Button>
    </Link>
  );
};
export default Choose;
