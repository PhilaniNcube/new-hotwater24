import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Bosch() {
	return (
		<section className="py-6">
			<Card className="w-full @container  mx-auto my-6">
				<CardHeader className="bg-red-600 text-primary-foreground p-6">
					<CardTitle className="text-3xl font-bold text-center">
						Bosch is Back!
					</CardTitle>
				</CardHeader>
				<CardContent className="p-6 max-w-3xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-6">
						<div className="w-full md:w-1/2">
							<Image
								src="/images/bosch-hydro.webp"
								width={600}
								height={874}
								alt="Bosch Gas Geyser"
								className="@lg:w-full @sm:w-1/2 h-auto rounded-lg shadow-md"
							/>
						</div>
						<div className="w-full md:w-1/2 space-y-4">
							<h2 className="text-2xl font-semibold">
								Bosch Gas Geysers Return to South Africa
							</h2>
							<p className="text-muted-foreground">
								We're excited to announce the triumphant return of Bosch Gas
								Geysers to the South African market. Known for their
								reliability, efficiency, and cutting-edge technology, Bosch is
								set to revolutionize water heating in homes across the nation
								once again.
							</p>
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex justify-center p-6">
					<Button size="lg" className="rounded-full bg-brand">
						<Link href="/bosch">Learn More About Bosch Gas Geysers</Link>
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
}
