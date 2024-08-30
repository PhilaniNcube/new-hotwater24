
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DiscountBanner() {
  return (
    <div className="container py-10">
      <section className="p-4 text-center text-white bg-red-600 rounded-full">
        <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
          5% Off On Gas Geyser Packages!
        </h2>
        <p className="text-md md:text-lg lg:text-xl">
          Valid until the 14<sup>th</sup> Dec{" "}
        </p>
        <Link href="/#packages">
          <Button
            className="mt-4 text-red-500 bg-white rounded-full"
            variant="secondary"
          >
            View Packages
          </Button>
        </Link>
      </section>
    </div>
  );
}
