import { getGeysers } from "@/sanity/sanity-utils";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import { cn } from "@/lib/utils";
import { antonio } from "@/fonts";

const PackagesGrid = async () => {

  const packages = await getGeysers();

  return <div className="w-full">
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {packages.map((item, index) => {
        return (
									<div
										key={item._id}
										className="relative transition-all duration-300 ease-in-out rounded-lg shadow group hover:shadow-2xl hover:-translate-y-6"
									>
										<Link
											href={`/packages/${item.slug}`}
											className="absolute inset-0 z-10"
										>
											<span className="sr-only">View</span>
										</Link>{" "}
										<h3
											className={cn(
												"font-semibold text-lg md:text-xl text-center",
												antonio.className,
											)}
										>
											{item.title} - {item.maxFlowRate}
										</h3>
										<div className="flex items-center justify-center w-full my-4">
											<Image
												alt={item.title}
												className="object-cover w-full md:w-3/4"
												height={1000}
												src={item.image}
												width={600}
											/>
										</div>
										<div className="p-4 bg-white dark:bg-zinc-950">
											<h4
												className={cn(
													"font-semibold text-base text-center md:text-xl text-red-600",
													antonio.className,
												)}
											>
												From {formatCurrency(item.price)}
											</h4>
											<h3
												className={cn(
													"font-semibold text-md text-center",
													antonio.className,
												)}
											>
												{item.outlets}
											</h3>
											<p className="text-xs text-slate-800 text-center">
												price includes gas geyser, installation and CoC
											</p>
										</div>
									</div>
								);
      })}
    </section>
  </div>;
};
export default PackagesGrid;
