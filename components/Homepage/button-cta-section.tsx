/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AeKSviuEFjv
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ButtonCtaSection() {
  return (
    <section className="flex items-center justify-center py-8">
      <div className="flex space-x-4">
        <Link href="/quote/start">
          <Button className="flex items-center justify-center h-12 text-sm text-white bg-red-600 rounded-full shadow-lg sm:w-44">

            Get A Quote
          </Button>
        </Link>
        <Link href="/payment-plan">
          <Button className="flex items-center justify-center h-12 text-sm text-white rounded-full shadow-lg bg-brand sm:w-44">

            Payment Plan
          </Button>
        </Link>
      </div>
    </section>
  );
}
