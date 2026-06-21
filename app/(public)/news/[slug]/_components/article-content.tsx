import { bebas } from "@/fonts";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import { getArticleBySlug } from "@/features/articles/articles-queries";

export async function ArticleContent({ slug }: { slug: string }) {
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="container py-10 mx-auto max-w-7xl">Article not found</div>
    );
  }

  return (
    <div className="container py-10 mx-auto max-w-7xl" id="article">
      <h1 className={`${bebas.className} text-2xl md:texxt-3xl text-slate-800`}>
        {article.title}
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Image
          src={article.image!}
          width={1280}
          height={768}
          alt={article.title!}
          className="object-cover w-full aspect-video"
        />
        <div className="flex flex-col gap-2">
          <p className="font-medium text-slate-700">
            Submitted: {format(new Date(article._createdAt), "PPPP")}
          </p>
          {article.link && (
            <p className="text-xs text-slate-500">
              Original Article:{" "}
              <Link href={article.link} className="text-blue-500 underline">
                Link
              </Link>
            </p>
          )}

          <div className="font-normal text-slate-600 content" id="content">
            {article.content && article.content.length > 0 ? (
              <PortableText value={article.content} />
            ) : (
              "No content available for this article."
            )}
          </div>
          <Link href="/news">
            <Button
              type="button"
              className="text-white rounded-none bg-brand hover:bg-slate-700"
            >
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
