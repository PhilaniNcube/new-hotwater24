import { bebas } from "@/app/fonts";
import { getArticle } from "@/sanity/sanity-utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {PortableText} from "@portabletext/react"
import { Button } from "@/components/ui/button";

const page = async ({params: {slug}}: {params:{slug:string}}) => {

  const article = await getArticle(slug)

  return (
    <div className="container py-10">
      <h1 className={`${bebas.className} text-2xl md:texxt-3xl text-slate-800`}>
        {article.title}
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Image
          src={article.image}
          width={1280}
          height={768}
          alt={article.title}
          className="object-cover w-full aspect-video"
        />
        <div className="flex flex-col gap-2">
          <p className="font-medium text-slate-700">
            Submitted: {format(new Date(article._createdAt), "PPPP")}
          </p>
          <p className="text-xs text-slate-500">
            Original Article: <Link href={article.link} className="text-blue-500 underline">Link</Link>
          </p>
          <div className="font-normal text-slate-600 content">
            <PortableText value={article.content} />
          </div>
          <Link href="/news">
            <Button type="button" className="rounded-none bg-slate-800 hover:bg-slate-700">
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default page;
