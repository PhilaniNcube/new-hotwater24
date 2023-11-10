import { antonio } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b6wdkCMNqBB
 */
export default function WhyUsHero() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 relative isolate pb-8">
      <Image
        src="/images/banner-2.jpg"
        width={960}
        height={654}
        alt="Banner"
        className="w-full object-cover"
      />
      <div className="w-full container">
        <div className="flex flex-col justify-center h-full items-center space-y-4 text-center">
          <div className="space-y-2 py-10 md:py-4">
            <h1
              className={cn(
                "text-3xl text-slate-800 font-bold  sm:text-4xl md:text-5xl flex flex-col gap-2",
                antonio.className
              )}
            >
              Why Choose Us
            </h1>
            {/* <p className="mx-auto max-w-[700px] text-slate-700 text-base md:text-lg dark:text-zinc-400">
              Common Questions about Our Gas Geysers Installation and Usage
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
