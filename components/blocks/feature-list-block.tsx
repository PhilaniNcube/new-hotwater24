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
import SectionHeading from "@/components/ui/section-heading";

interface FeatureListBlockProps {
  data: FeatureListSection;
}

export default function FeatureListBlock({ data }: FeatureListBlockProps) {
  const { heading, headingTag, subheading, features, layout = "grid" } = data;

  if (!features || features.length === 0) return null;

  return (
    <section className="w-full py-12 mx-auto max-w-7xl">
      {" "}
      <div className="container ">
        <div className="flex flex-col space-y-4">
          <SectionHeading
            heading={heading}
            headingTag={headingTag}
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
          />
          {subheading && (
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subheading}
            </p>
          )}
        </div>{" "}
        <div className="py-12 mx-auto max-w-7xl">
          <div className="space-y-6">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature._key || index}
                  className="grid gap-1 rounded shadow-sm"
                >
                  <Card className="h-full border-0">
                    <CardHeader className="">
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
                      <CardTitle className="text-lg font-semibold text-orange-600 lg:text-xl">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm font-medium">
                        {feature.description}
                      </CardDescription>
                      {feature.link && (
                        <div className="mt-4">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
