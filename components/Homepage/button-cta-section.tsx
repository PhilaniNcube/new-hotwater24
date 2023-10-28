/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AeKSviuEFjv
 */
import { Button } from "@/components/ui/button";
import { DollarSignIcon, Loader } from "lucide-react";
import Link from "next/link";

export default function ButtonCtaSection() {
  return (
    <section className="flex items-center justify-center py-8">
      <div className="flex space-x-4">
        <Link href="/quote/start">
          <Button className="flex items-center justify-center h-12 text-xs text-white bg-red-600 rounded-full shadow-lg sm:text-base sm:w-44">
            <Loader className="mr-2" size={24} />
            Get A Quote
          </Button>
        </Link>
        <Link href="/payment_plan">
          <Button className="flex items-center justify-center h-12 text-xs text-white bg-green-500 rounded-full shadow-lg sm:text-base sm:w-44">
            <DollarSignIcon className="mr-2" size={24} />
            Payment Plan
          </Button>
        </Link>
      </div>
    </section>
  );
}
