import { ARTICLES_QUERY } from "@/sanity/sanity-utils";
import { antonio, bebas } from "../../../fonts";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/live";
import { ARTICLES_QUERYResult } from "@/sanity/types";

type Article = ARTICLES_QUERYResult[0];

export const metadata: Metadata = {
  title: "Hotwater24 | News",
  description:
    "Get news on the South African energy sector with a focus on LPG gas household usage",
  keywords:
    "gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
  openGraph: {
    title: "Hotwater24 | News",
    description:
      "Get news on the South African energy sector with a focus on LPG gas household usage",
  },
};

export const dynamic = "force-static";

const page = async () => {
  const { data: news } = await sanityFetch({
    query: ARTICLES_QUERY,
  });

  if (!news || news.length === 0) {
    return (
      <main className="container px-4 py-8 mx-auto sm:px-6 lg:px-8 sm:py-12 lg:py-16 max-w-7xl">
        <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl">
          No News Articles Found
        </h1>
        <Separator className="my-4 sm:my-6" />
        <p className="text-base sm:text-lg text-slate-700">
          There are currently no news articles available.
        </p>
      </main>
    );
  }

  return (
    <main className="container px-4 py-8 mx-auto sm:px-6 lg:px-8 sm:py-12 lg:py-16 max-w-7xl">
      <h1
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-800 font-bold flex flex-col gap-2 mb-4 sm:mb-6",
          antonio.className
        )}
      >
        News Articles
      </h1>
      <Separator className="my-4 sm:my-6" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 lg:gap-8">
        {news.map((article: Article, index: number) => (
          <Link
            href={`/news/${article.slug}`}
            className={cn(
              "col-span-1 @container group",
              index === 0 && news.length > 1
                ? "sm:col-span-2 lg:col-span-2"
                : ""
            )}
            key={article._id}
          >
            <div className="flex flex-col gap-3 sm:gap-4 h-full transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src={article.image!}
                width={1280}
                height={768}
                alt={article.title!}
                className={cn(
                  "w-full object-center object-cover rounded-lg shadow-sm",
                  index === 0 && news.length > 1
                    ? "aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2/1]"
                    : "aspect-video"
                )}
              />
              <div className="flex flex-col flex-1 w-full gap-2 sm:gap-3">
                <h2
                  className={cn(
                    "font-medium text-slate-700 line-clamp-2",
                    index === 0 && news.length > 1
                      ? "text-xl sm:text-2xl lg:text-3xl"
                      : "text-lg sm:text-xl"
                  )}
                >
                  {article.title}
                </h2>
                <small className="text-sm sm:text-base text-slate-600">
                  {format(new Date(article._createdAt), "PPPP")}
                </small>
                <Button className="mt-auto text-sm text-white transition-colors duration-200 rounded-none bg-slate-800 hover:bg-slate-700 sm:text-base">
                  Read Article
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default page;
