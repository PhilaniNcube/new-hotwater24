import { Suspense } from "react";
import type { Metadata } from "next";
import { getArticleBySlug } from "@/features/articles/articles-queries";
import { ArticleContent } from "./_components/article-content";
import { ArticleSkeleton } from "./_components/article-skeleton";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

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

export default function ArticlePage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<ArticleSkeleton />}>
      {params.then(({ slug }) => (
        <ArticleContent slug={slug} />
      ))}
    </Suspense>
  );
}
