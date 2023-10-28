
import Image from "next/image";
import Link from "next/link";

export default function NewHero() {
  return (
    <section className="w-full">
      <div className="px-0">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Image
            alt="Geyser"
            className="object-cover object-bottom mx-auto overflow-hidden w-full"
            height={654}
            src="/images/banner.jpg"
            width={960}
          />
          <div className="flex flex-col justify-center space-y-4 container">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-slate-800 sm:text-5xl xl:text-6xl/none">
                Expert gas guys bringing hot water to homes 24/7
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="p-4 bg-gray-100 rounded-md shadow-sm dark:bg-zinc-800">
                <p className="text-xs text-zinc-500 md:text-sm dark:text-zinc-400">
                  Quality gas geysers
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow-sm dark:bg-zinc-800">
                <p className="text-xs text-zinc-500 md:text-sm dark:text-zinc-400">
                  Certified installers
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow-sm dark:bg-zinc-800">
                <p className="text-xs text-zinc-500 md:text-sm dark:text-zinc-400">
                  Full warranty
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow-sm dark:bg-zinc-800">
                <p className="text-xs text-zinc-500 md:text-sm dark:text-zinc-400">
                  Certificate of Compliance
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow-sm dark:bg-zinc-800">
                <p className="text-xs text-zinc-500 md:text-sm dark:text-zinc-400">
                  Easy payment plan
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-full shadow bg-slate-800 text-zinc-50 hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                href="/quote/start"
              >
                Get a Quote
              </Link>
              <Link
                className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium text-white transition-colors bg-blue-600 border rounded-full shadow-sm border-slate-300 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                href="/packages"
              >
                Choose your geyser geyser
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
