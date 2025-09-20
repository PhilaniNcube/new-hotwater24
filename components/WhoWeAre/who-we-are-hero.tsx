import { antonio } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b6wdkCMNqBB
 */
export default function WhoWeAreHero() {
  return (
    <section className="relative grid w-full grid-cols-1 pb-8 md:grid-cols-2 isolate">
      <Image
        src="/images/banner-2.jpg"
        width={960}
        height={654}
        alt="Banner"
        className="object-cover w-full"
      />
      <div className="container w-full">
        <div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
          <div className="py-10 space-y-2 md:py-4">
            <h1
              className={cn(
                "text-3xl text-slate-800 font-bold  sm:text-4xl md:text-5xl flex flex-col gap-2 mb-6",
                antonio.className
              )}
            >
              <span>Over 40 years of experience</span>{" "}
              <span>and knowledge</span>
            </h1>
            <p className="mx-auto max-w-[700px] px-4 lg:px-0 text-slate-700 text-base md:text-lg dark:text-zinc-400 mt-6">
              With over 40 years of experience and knowledge in the Dutch gas
              installation business, we understand your needs. Either when it is
              a need for comfort (on demand hot water 24/7 for your family) or a
              need out of necessity (tired of load shedding, cold water and high
              energy bills from Eskom) and want to get “off-the-grid” and
              independent from Eskom and save money on your monthly energy bill
              at the same time!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
