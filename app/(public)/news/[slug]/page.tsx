import { bebas } from "@/fonts";
import { ARTICLE_QUERY } from "@/sanity/sanity-utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/live";

export const dynamic = "force-static";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;

  // read route params
  const slug = params.slug;

  const { data: article } = await sanityFetch({
    query: ARTICLE_QUERY,
    params: params,
  });

  console.log(article); // This will log the article object to the console

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article?.meta_title || article?.title,
    description: article.meta_description || article.title,
    keywords:
      "Gas Geyser, Gas Geyser Installation, Gas Geyser Installation Prices, Gas Water Heater, Gas Geyser Prices, and Gas Water Heating System.",
    openGraph: {
      images: [
        {
          url: article?.image!,
          width: 1200,
          height: 630,
          alt: article.title!,
        },
      ],
    },
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const { data: article } = await sanityFetch({
    query: ARTICLE_QUERY,
    params: params,
  });

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
};
export default page;
