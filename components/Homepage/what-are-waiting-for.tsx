
import { antonio } from "@/fonts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WhatAreYouWaitingFor() {
  return (
			<section className="w-full px-8 scroll-mt-10" id="tankless">
				<div className="pb-16">
					<Image
						width={1322}
						height={1250}
						src="/images/geyser_2.jpeg"
						className="w-1/2 mx-auto my-6 lg:w-1/3"
						alt="How Geysers Work"
					/>
					<p className="text-center max-w-[650px] mx-auto">
						Please click on the link below to find out more on how a gas water
						heater works and find out all the advantages that a gas water heater
						offers! <br />
						<Link
							className="mx-auto text-lg font-medium text-center text-blue-600 underline"
							href="/news/how-does-a-tankless-gas-water-heater-works"
							target="_blank"
						>
							How Does A Tankless Gas Water Heater Work
						</Link>
					</p>
				</div>
				<div className="container flex flex-col items-center justify-center gap-4 p-6 bg-red-600 rounded-full shadow md:flex-row md:p-8 lg:p-12 ">
					<div className="space-y-3 text-center">
						<h2
							className={cn(
								"text-3xl text-white font-bold tracking-tighter md:text-4xl",
								antonio.className,
							)}
						>
							What Are You Waiting For?
						</h2>
					</div>
					<div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
						<Link href="/savings" prefetch={false}>
							<Button
								className="px-8 py-2 text-lg font-medium transition-colors rounded-full shadow bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
								variant="default"
							>
								Calculate Your Saving
								<ArrowRightIcon className="ml-2" />
							</Button>
						</Link>
					</div>
				</div>
			</section>
		);
}
