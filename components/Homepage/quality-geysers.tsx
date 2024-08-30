import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { antonio } from "@/fonts";

const QualityGeysers = () => {
  return (
			<section className="container py-6">
				<h2
					className={cn(
						"text-3xl lg:text-4xl font-bold text-center text-slate-800",
						antonio.className,
					)}
				>
					Quality gas geysers
				</h2>
				<div className="grid grid-cols-1 gap-8 py-5 md:grid-cols-3 lg:grid-cols-5">
					<article className="w-full">
						<Card>
							<CardHeader>
								<Image
									src="/images/dewhot_logo.webp"
									width={1366}
									height={768}
									alt="Dewhot Logo"
									className="object-cover w-1/3 mx-auto"
									loading="lazy"
									quality={70}
								/>
								<CardTitle className="sr-only">Dewhot</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-sm font-medium text-center">
									With a commitment to quality and reliability, Dewhot&apos;s
									double testing policy ensures a satisfying customer
									experience.
								</CardDescription>
							</CardContent>
						</Card>
					</article>
					<article>
						<Card>
							<CardHeader>
								<Image
									src="/images/rinnai_logo.webp"
									width={1366}
									height={768}
									alt="Rinnai Logo"
									className="object-cover w-1/3 mx-auto"
									loading="lazy"
									quality={70}
								/>
								<CardTitle className="sr-only">Rinnai</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-sm font-medium text-center">
									Rinnai is proud to be the No.1 choice for Continuous Flow Hot
									Water, so you will never run out of hot water.
								</CardDescription>
							</CardContent>
						</Card>
					</article>
					<article>
						<Card>
							<CardHeader>
								<Image
									src="/images/paloma_logo.webp"
									width={1366}
									height={768}
									alt="Rinnai Logo"
									className="object-cover w-1/3 mx-auto"
									loading="lazy"
									quality={70}
								/>
								<CardTitle className="sr-only">Paloma</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-sm font-medium text-center">
									Paloma Gas Geysers is a trusted and well-established brand
									offering top-quality gas geysers for residential and
									commercial use.
								</CardDescription>
							</CardContent>
						</Card>
					</article>
					<article>
						<Card>
							<CardHeader>
								<Image
									src="/images/bosch.webp"
									width={1366}
									height={768}
									alt="Bosch"
									className="object-cover w-1/3 mx-auto"
									loading="lazy"
									quality={70}
								/>
								<CardTitle className="sr-only">Bosch</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-sm font-medium text-center">
									The Bosch gas geyser with battery or hydro ignition have all
									the qualities expected of a Bosch appliance while at the same
									time offering you the added benefit of being small and
									efficient.
								</CardDescription>
							</CardContent>
						</Card>
					</article>
					<article>
						<Card>
							<CardHeader>
								<Image
									src="/images/typhoon.webp"
									width={762}
									height={527}
									alt="Typhoon Logo"
									className="object-cover w-1/3 mx-auto"
									loading="lazy"
									quality={70}
								/>
								<CardTitle className="sr-only">Typhoon</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-sm font-medium text-center">
									With a broad range in different size gas geysers Typhoon
									offers the solution for every client’s requirement.
								</CardDescription>
							</CardContent>
						</Card>
					</article>
				</div>
				<div className="flex justify-center">
					<Link href="/#packages" prefetch={false}>
						<Button type="button" className="bg-red-600 rounded-full">
							Choose your gas geyser
						</Button>
					</Link>
				</div>
			</section>
		);
};
export default QualityGeysers;
