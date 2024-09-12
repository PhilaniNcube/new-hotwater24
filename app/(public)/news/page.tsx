import { getArticles } from "@/sanity/sanity-utils";
import { antonio, bebas } from "../../../fonts";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

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

  const news = await getArticles()

  console.log({news})

  return (
    <main className="container py-10">
      <h1
        className={cn(
          "text-3xl text-slate-800 font-bold  sm:text-4xl md:text-5xl flex flex-col gap-2",
          antonio.className
        )}
      >
        News Articles
      </h1>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {news.map((article, index) => (
          <Link
            href={`/news/${article.slug}`}
            className="first:col-span-2 @container col-span-1"
            key={article._id}
          >
            <div className="flex flex-col gap-2">
              <Image
                src={article.image}
                width={1280}
                height={768}
                alt={article.title}
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
                <Link className="block" href={`/news/${article.slug}`}>
                  <Button className="rounded-none bg-slate-800 hover:bg-slate-700">
                    Read Article
                  </Button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default page;
