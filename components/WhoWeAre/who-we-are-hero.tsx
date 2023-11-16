import { antonio } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function WhoWeAreHero() {
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
                "text-3xl text-slate-800 font-bold  sm:text-4xl md:text-5xl flex flex-col gap-2 mb-6",
                antonio.className
              )}
            >
              <span>Over 40 years of experience</span>{" "}
              <span>and knowledge</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-700 text-base md:text-lg dark:text-zinc-400 mt-6">
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
