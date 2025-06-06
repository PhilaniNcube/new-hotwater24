import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { antonio } from "@/fonts";
import { Loader } from "lucide-react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cmnFHzkpkmd
 */
export default function WhoWeAre() {
  return (
    <section className="w-full py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2
            className={cn(
              "text-2xl font-bold text-slate-800 tracking-tighter md:text-4xl",
              antonio.className
            )}
          >
            Who We Are?
          </h2>
          <ul className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <li className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <p className="text-slate-700 text-sm md:text-md lg:text-base dark:text-zinc-400">
                Gas specialists to assist and advise you on the most
                cost-effective and efficient gas water heating solution for your
                household
              </p>
            </li>
            <li className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <p className="text-slate-700 text-sm md:text-md lg:text-base dark:text-zinc-400">
                Offering the best gas geysers, certified installations, and
                maintenance services
              </p>
            </li>
            <li className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <p className="text-slate-700 text-sm md:text-md lg:text-base dark:text-zinc-400">
                Safety comes first, so after every installation a CoC
                (Certificate of Compliance) is issued
              </p>
            </li>
            <li className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <p className="text-slate-700 text-sm md:text-md lg:text-base dark:text-zinc-400">
                Your one-stop-shop for all your water heating solutions
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-8 w-full">
          <Link href="/#packages">
            <Button className="flex items-center justify-center h-12 text-sm text-white bg-red-600 rounded-full shadow-lg  sm:w-44">
              View Our Packages
            </Button>
          </Link>
          <Link href="/quote/start">
            <Button className="flex items-center justify-center h-12 text-sm text-white bg-red-600 rounded-full shadow-lg  sm:w-44">

              Get A Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
