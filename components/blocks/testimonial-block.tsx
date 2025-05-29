import { TestimonialSection } from "@/sanity/types";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import SectionHeading from "@/components/ui/section-heading";

interface TestimonialBlockProps {
  data: TestimonialSection;
}

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialBlock({ data }: TestimonialBlockProps) {
  const { heading, headingTag, testimonials } = data;

  if (!testimonials || testimonials.length === 0) return null;
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <SectionHeading
          heading={heading}
          headingTag={headingTag}
          className="mb-6 text-2xl font-bold text-center text-slate-800"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    {testimonial.authorImage && (
                      <AvatarImage
                        src={urlFor(testimonial.authorImage).url()}
                        alt={testimonial.authorName || "Testimonial author"}
                      />
                    )}
                    <AvatarFallback>
                      {testimonial.authorName?.charAt(0) || "T"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.authorName}</h3>
                    {testimonial.authorTitleOrCompany && (
                      <p className="text-sm text-gray-500">
                        {testimonial.authorTitleOrCompany}
                      </p>
                    )}
                  </div>
                </div>
                {testimonial.rating && (
                  <StarRating rating={testimonial.rating} />
                )}
                {testimonial.quote && (
                  <p className="mt-4 text-gray-700">{testimonial.quote}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
