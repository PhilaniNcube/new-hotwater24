import { getArticles } from "@/sanity/sanity-utils";
import { antonio, bebas } from "../fonts";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const page = async () => {

  const news = await getArticles()

  console.log({news})

  return (
    <main className="py-10 container">
      <h1
        className={cn(
          "text-3xl text-slate-800 font-bold  sm:text-4xl md:text-5xl flex flex-col gap-2",
          antonio.className
        )}
      >
        News Articles
      </h1>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {news.map((article, index) => (
          <Link
            href={`/news/${article.slug}`}
            className="first:col-span-2 @container col-span-1 "
          >
            <div className="flex flex-col gap-2">
              <Image
                src={article.image}
                width={1280}
                height={768}
                alt={article.title}
                className={cn(
                  "w-full  object-center object-cover",
                  index === 0 ? "h-[500px]" : "aspect-video"
                )}
              />
              <div className="w-full flex flex-col gap-2 flex-1">
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
