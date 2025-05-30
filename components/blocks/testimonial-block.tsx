import { TestimonialSection } from "@/sanity/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import SectionHeading from "@/components/ui/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

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
    <section className="w-full py-12 bg-orange-600">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <SectionHeading
          heading={heading}
          headingTag={headingTag}
          className="mb-6 text-2xl font-bold text-white lg:text-4xl"
        />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-none"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <Card className="flex flex-col justify-between h-full bg-white border-none rounded-none">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div></div>
                    </div>
                    {testimonial.rating && (
                      <StarRating rating={testimonial.rating} />
                    )}
                    {testimonial.quote && (
                      <p className="mt-4 text-gray-600">{testimonial.quote}</p>
                    )}
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Quote className="w-6 h-6 mr-4 text-purple-300" />
                    <h3 className="font-semibold">{testimonial.authorName}</h3>
                    {testimonial.authorTitleOrCompany && (
                      <p className="text-sm text-gray-500">
                        {testimonial.authorTitleOrCompany}
                      </p>
                    )}
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>{" "}
          <CarouselPrevious className="text-orange-600 bg-white left-4 hover:bg-orange-50" />
          <CarouselNext className="text-orange-600 bg-white right-4 hover:bg-orange-50" />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}
