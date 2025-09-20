import { antonio } from "@/fonts";
import { cn } from "@/lib/utils";
import { FlameIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewHero() {
  return (
    <section className="w-full">
      <div className="">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <Image
              alt="Geyser"
              className="object-cover object-bottom w-full mx-auto overflow-hidden"
              height={654}
              src="/images/banner.webp"
              width={960}
              priority
            />
            <div className="flex flex-col gap-2 justify-center items-center mt-4 min-[400px]:flex-row">
              <Link
                className="flex items-center justify-center h-12 px-4 text-sm text-white bg-red-600 rounded-full shadow-lg sm:w-fit min-w-[190px]"
                href="/quote/start"
              >
                Get a Quote
              </Link>
              <Link
                className="flex items-center justify-center h-12 px-4 text-sm text-white rounded-full shadow-lg bg-brand sm:w-fit min-w-[190px]"
                href="/#packages"
              >
                Choose your gas geyser
              </Link>
            </div>
          </div>

          <div className="container flex flex-col justify-center px-4 mx-auto space-y-4 max-w-7xl">
            <div className="space-y-2">
              <h1
                className={cn(
                  "text-3xl flex flex-col gap-2 font-bold text-slate-800 md:text-5xl leading-loose",
                  antonio.className
                )}
              >
                <span>Expert gas guys bringing</span>{" "}
                <span>hot water to homes 24/7</span>
              </h1>
            </div>
            <div className="">
              <div className="flex items-center p-1 font-medium">
                <span className="flex items-center justify-center p-2 mr-2 text-white bg-red-500 rounded-full">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Quality gas geysers
                </p>
              </div>
              <div className="flex items-center p-1 font-medium">
                <span className="flex items-center justify-center p-2 mr-2 text-white bg-red-500 rounded-full">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Certified installers
                </p>
              </div>
              <div className="flex items-center p-1 font-medium">
                <span className="flex items-center justify-center p-2 mr-2 text-white bg-red-500 rounded-full">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Full warranty
                </p>
              </div>
              <div className="flex items-center p-1 font-medium">
                <span className="flex items-center justify-center p-2 mr-2 text-white bg-red-500 rounded-full">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Certificate of Compliance
                </p>
              </div>
              <div className="flex items-center p-1 font-medium">
                <span className="flex items-center justify-center p-2 mr-2 text-white bg-red-500 rounded-full">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Easy payment plan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
