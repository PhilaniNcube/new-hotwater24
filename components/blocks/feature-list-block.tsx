import { FeatureListSection } from "@/sanity/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface FeatureListBlockProps {
  data: FeatureListSection;
}

export default function FeatureListBlock({ data }: FeatureListBlockProps) {
  const { heading, subheading, features, layout = "grid" } = data;

  if (!features || features.length === 0) return null;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {heading && (
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subheading}
            </p>
          )}
        </div>
        <div
          className={`mx-auto grid max-w-5xl items-center gap-6 py-12 ${
            layout === "grid"
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-1 lg:grid-cols-1"
          }`}
        >
          {features.map((feature, index) => (
            <div key={feature._key || index} className="grid gap-1">
              {layout === "grid" ? (
                <>
                  <Card className="h-full">
                    <CardHeader className="text-center">
                      {feature.icon && (
                        <div className="mx-auto mb-4">
                          <Image
                            src={urlFor(feature.icon)
                              .width(64)
                              .height(64)
                              .url()}
                            width={64}
                            height={64}
                            alt={feature.title || "Feature icon"}
                            className="object-cover w-16 h-16 mx-auto"
                          />
                        </div>
                      )}

                      <CardTitle className="text-lg font-semibold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm font-medium text-center">
                        {feature.description}
                      </CardDescription>
                      {feature.link && (
                        <div className="mt-4 text-center">
                          <Link
                            href={feature.link}
                            className="text-sm text-blue-600 underline hover:text-blue-800"
                          >
                            Learn more
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </>
              ) : (
                <div className="flex items-start gap-4">
                  {feature.icon && (
                    <div className="flex-shrink-0">
                      <Image
                        src={urlFor(feature.icon).width(48).height(48).url()}
                        width={48}
                        height={48}
                        alt={feature.title || "Feature icon"}
                        className="object-cover w-12 h-12"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                    {feature.link && (
                      <Link
                        href={feature.link}
                        className="inline-block mt-2 text-sm text-blue-600 underline hover:text-blue-800"
                      >
                        Learn more
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
