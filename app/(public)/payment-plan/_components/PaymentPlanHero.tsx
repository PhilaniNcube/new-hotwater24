import { antonio } from "@/fonts";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b6wdkCMNqBB
 */
export default function PaymentPlanHero() {
  return (
			<section className="relative grid w-full grid-cols-1 pb-8 md:grid-cols-2 isolate">
				<Image
					src="/images/banner-2.jpg"
					width={960}
					height={654}
					alt="Banner"
					className="object-cover w-full"
				/>
				<div className="container max-w-xl mx-auto w-full">
					<div className="flex flex-col items-center justify-center h-full space-y-4 text-center">
						<div className="py-10 space-y-2 md:py-4">
							<h1
								className={cn(
									"text-3xl text-slate-800 font-bold  sm:text-4xl md:text-5xl flex flex-col gap-2",
									antonio.className,
								)}
							>
								Payment Plan
							</h1>
							<p className="max-w-[900px] text-lg mt-4 text-slate-800">
								At Hotwater24 we understand that we dont always have a budget to
								pay an installation once. Therefore we offer a payment plan that
								helps you paying for your installation.
							</p>
							<div className="flex items-center justify-center">
								<Card className="">
									<CardContent className="px-3 py-4">
										{/***List the steps in a payment plan */}
										<ol className="flex flex-col items-start justify-start px-6 font-medium text-left list-decimal gap-y-2 text-md text-slate-700 ">
											<li>
												We require only 50% deposit upon approval of the
												quotation (where we normally require 70% deposit
												payment).
											</li>
											<li>
												After 1 month of installation date, we ask for the 2nd
												20% payment.
											</li>
											<li>
												After 2 months of installation date, we ask for the 3rd
												15% payment.
											</li>
											<li>
												After 3 months of installation date, we ask for the
												final 15% payment.
											</li>
											<li>
												After having received full payment, we will process the
												CoC.
											</li>
										</ol>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
}
