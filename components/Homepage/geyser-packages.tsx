import { getGeysers } from "@/sanity/sanity-utils";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CyTRvnK5pbJ
 */
export default async function GeyserPackages() {

  const packages = await getGeysers();

  return (
    <section className="container py-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-slate-800">
        Which package best suits your household?
      </h2>
      <div className="grid gap-4 p-4 md:grid-cols-3 lg:grid-cols-4">
        {packages.map((item, index) => {
          if (index > 0 && index < 5) {
            return (
              <div
                key={item._id}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <h3 className="text-lg font-bold text-center uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 font-medium text-center text-md">
                  {item.subTitle}
                </p>
                <h4 className="text-lg font-semibold text-center">
                  {item.maxFlowRate}
                </h4>
                <p className="text-2xl font-bold text-center">
                  {formatCurrency(
                    item.geyser.price +
                      item.plumbing.price +
                      item.installation.price +
                      item.certificateOfCompliance.price
                  )}
                </p>
                <div className="flex justify-center">
                  <Link href={`/packages/${item.slug}`}>
                    <Button className="mt-4 bg-red-600 rounded-full">
                      In need more info
                    </Button>
                  </Link>
                </div>
                <Image
                  alt="Geyser 100L Image"
                  className="object-cover w-full my-4 overflow-hidden rounded-lg "
                  height={500}
                  src={item.image}
                  width={500}
                />{" "}
                <p className="text-sm text-center text-gray-800 font-medium">
                  {item.description}
                </p>
                <p className="mt-2 text-xs text-justify">*{item.warranty}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>{" "}
      <h2 className="text-md my-3 font-medium text-center text-red-800">
        Please note, Hotwater24 use a wide range of different brands and sizes
        of gas geysers that will suit your specification!
      </h2>
    </section>
  );
}
