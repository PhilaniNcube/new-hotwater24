/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uFR3NMUdsrp
 */
import { antonio } from "@/fonts";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { format, formatDistance,  intlFormatDistance,  parseISO } from "date-fns";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: Date;
  text: string;
  link: string;
}

const reviews: Review[] = [
  {
    id: 1,
    link: "https://g.co/kgs/grRt5nF",
    name: "Aubrey Swigelaar",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: new Date(2024, 9, 29),
    text: "Thinking of having a gas geyser installed, look no further.Hotwater24 is the company I can recommend. I used their services and they executed the work proficiently and I an happy with the workmanship, and their affordability.I can just wish them prosperity  for their future business.",
  },
  {
    id: 2,
    link: "https://g.co/kgs/eJzFw8q",
    name: "May Alli",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: new Date(2024, 9, 29),
    text: "Ronald and Shane provided me with outstanding service. Communication is clear, advice was to my benefit, they dissuaded me from procuring a bigger and more expensive unit as it was going to be an overkill for my needs. Installation of my geyser and gas bottles were executed very thoroughly and neatly. I will definitely be using Hotwater24 to attend to gas refilling going forward. I highly recommend this company for your gas needs. Thank you Ronald for your professionalism.",
  },
  {
    id: 3,
    link: "https://g.co/kgs/885MGn7",
    name: "Garth Hendrickse",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: new Date(2024, 11, 12),
    text: "Hi Guys. It is not often you get a professional company that is weel priced, superb in getting things done, keeping you informed. These guys are just brilliant. If you need gas stuff done, they are the best !!! Installed 3 gas heaters in a two story home.",
  },
];


export default function Testimonials() {




  return (
    <section className="mt-4">
      <div className="container px-4 py-8 mx-auto">
        <h2 className="mb-6 text-2xl font-bold text-center">Google Reviews</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">
                      {intlFormatDistance(new Date(), review.date)}
                    </p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-4 text-gray-700">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < fullStars ? (
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ) : i === fullStars && hasHalfStar ? (
            <StarHalf className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ) : (
            <Star className="w-5 h-5 text-gray-300" />
          )}
        </span>
      ))}
    </div>
  );
}
