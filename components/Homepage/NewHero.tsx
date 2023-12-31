
import { antonio } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { FlameIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewHero() {
  return (
    <section className="w-full">
      <div className="px-0">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <div>
            <Image
              alt="Geyser"
              className="object-cover object-bottom mx-auto overflow-hidden w-full"
              height={654}
              src="/images/banner.jpg"
              width={960}
            />
            <div className="flex flex-col gap-2 justify-center items-center mt-4 min-[400px]:flex-row">
              <Link
                className="flex items-center justify-center h-12 text-sm text-white bg-red-600 rounded-full shadow-lg  sm:w-44"
                href="/quote/start"
              >
                Get a Quote
              </Link>
              <Link
                className="flex items-center justify-center h-12 text-sm text-white bg-brand rounded-full shadow-lg  sm:w-44"
                href="/packages"
              >
                Choose your gas geyser
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4 container">
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
              <div className="p-1 flex items-center font-medium">
                <span className="flex p-2 mr-2 items-center justify-center rounded-full text-white bg-red-500">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Quality gas geysers
                </p>
              </div>
              <div className="p-1 flex items-center font-medium">
                <span className="flex p-2 mr-2 items-center justify-center rounded-full text-white bg-red-500">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Certified installers
                </p>
              </div>
              <div className="p-1 flex items-center font-medium">
                <span className="flex p-2 mr-2 items-center justify-center rounded-full text-white bg-red-500">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Full warranty
                </p>
              </div>
              <div className="p-1 flex items-center font-medium">
                <span className="flex p-2 mr-2 items-center justify-center rounded-full text-white bg-red-500">
                  <FlameIcon className="w-6 h-6" size={24} />
                </span>
                <p className="text-md text-zinc-500 dark:text-zinc-400">
                  Certificate of Compliance
                </p>
              </div>
              <div className="p-1 flex items-center font-medium">
                <span className="flex p-2 mr-2 items-center justify-center rounded-full text-white bg-red-500">
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
