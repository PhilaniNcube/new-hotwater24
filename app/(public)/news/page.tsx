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
      <main className="container py-10 mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl md:text-5xl">
          No News Articles Found
        </h1>
        <Separator className="my-2" />
        <p className="text-slate-700">
          There are currently no news articles available.
        </p>
      </main>
    );
  }

  return (
    <main className="container py-10 mx-auto max-w-7xl">
      <h1
        className={cn(
          "text-3xl text-slate-800 font-bold  sm:text-4xl md:text-5xl flex flex-col gap-2",
          antonio.className
        )}
      >
        News Articles
      </h1>
      <Separator className="my-2" />{" "}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {news.map((article: Article, index: number) => (
          <Link
            href={`/news/${article.slug}`}
            className="first:col-span-2 @container col-span-1"
            key={article._id}
          >
            <div className="flex flex-col gap-2">
              <Image
                src={article.image!}
                width={1280}
                height={768}
                alt={article.title!}
                className={cn(
                  "w-full object-center object-cover",
                  index === 0 ? "" : "aspect-video"
                )}
              />
              <div className="flex flex-col flex-1 w-full gap-2">
                <h2 className="text-lg font-medium text-slate-700 line-clamp-1">
                  {article.title}
                </h2>
                <small className="text-slate-700">
                  {format(new Date(article._createdAt), "PPPP")}
                </small>
                <Button className="text-white rounded-none bg-slate-800 hover:bg-slate-700">
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
