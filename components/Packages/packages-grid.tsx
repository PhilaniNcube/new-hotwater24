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
            className="relative group shadow hover:shadow-2xl hover:-translate-y-6 transition-all duration-300 ease-in-out rounded-lg"
          >
            <Link
              href={`/packages/${item.slug}`}
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View</span>
            </Link>
            <div className="w-full flex justify-center items-center">
              <Image
                alt={item.title}
                className="object-cover w-full md:w-3/4"
                height="1000"
                src={item.image}
                width="600"
              />
            </div>

            <div className="bg-white p-4 dark:bg-zinc-950">
              <h3
                className={cn(
                  "font-semibold text-lg md:text-xl text-center",
                  antonio.className
                )}
              >
                {item.title} - {item.maxFlowRate}
              </h3>
              <h4
                className={cn(
                  "font-semibold text-base text-center md:text-xl text-red-600",
                  antonio.className
                )}
              >
                {formatCurrency(
                  item.geyser.price +
                    item.plumbing.price +
                    item.installation.price +
                    item.certificateOfCompliance.price
                )}
              </h4>
              <h3
                className={cn(
                  "font-semibold text-md text-center",
                  antonio.className
                )}
              >
                {item.outlets}
              </h3>
            </div>
          </div>
        );
      })}
    </section>
  </div>;
};
export default PackagesGrid;
