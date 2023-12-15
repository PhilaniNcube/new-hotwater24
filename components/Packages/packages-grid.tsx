import { getGeysers } from "@/sanity/sanity-utils";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import { cn } from "@/lib/utils";
import { antonio } from "@/app/fonts";

const PackagesGrid = async () => {

  const packages = await getGeysers();

  return <div className="w-full">
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {packages.map((item, index) => {
        return (
          <div
            key={item._id}
            className="relative group overflow-hidden rounded-lg"
          >
            <Link
              href={`/packages/${item.slug}`}
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt={item.title}
              className="object-cover w-full"
              height="500"
              src="/images/dewhot.webp"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="500"
            />
            <div className="bg-white p-4 dark:bg-zinc-950">
              <h3
                className={cn(
                  "font-semibold text-lg md:text-xl text-center",
                  antonio.className
                )}
              >
                {item.title}
              </h3>
              <h4 className={cn("font-semibold text-base text-center md:text-xl text-red-600", antonio.className)}>
                {formatCurrency(
                  item.geyser.price +
                    item.plumbing.price +
                    item.installation.price +
                    item.certificateOfCompliance.price
                )}
              </h4>
              {/* <Button variant="default">Add to Cart</Button> */}
            </div>
          </div>
        );
      })}
    </section>
  </div>;
};
export default PackagesGrid;
