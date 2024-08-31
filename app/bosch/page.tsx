import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	CheckCircle,
	Droplet,
	Flame,
	Gauge,
	ShieldCheck,
	ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 bg-red-600">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
									Experience the Power of Bosch Gas Geysers
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
									Efficient, reliable, and cutting-edge water heating solutions
									for your home
								</p>
							</div>
							<div className="space-x-4">
								<Link
									className="flex items-center justify-center h-12 px-4 text-sm text-black rounded-full shadow-lg bg-white sm:w-fit min-w-[190px]"
									href="/#packages"
								>
									Choose your gas geyser
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section
					id="features"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
				>
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Key Features
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<FeatureCard
								icon={<Flame className="h-10 w-10 text-red-500" />}
								title="Instant Hot Water"
								description="Get hot water on demand, without waiting for a tank to heat up."
							/>
							<FeatureCard
								icon={<Gauge className="h-10 w-10 text-blue-500" />}
								title="Energy Efficient"
								description="Save on energy bills with our highly efficient gas heating technology."
							/>
							<FeatureCard
								icon={<ShieldCheck className="h-10 w-10 text-green-500" />}
								title="Safe Operation"
								description="Multiple safety features ensure worry-free use for your family."
							/>
							<FeatureCard
								icon={<Droplet className="h-10 w-10 text-cyan-500" />}
								title="Consistent Temperature"
								description="Enjoy stable water temperature, even with multiple taps running."
							/>
							<FeatureCard
								icon={<CheckCircle className="h-10 w-10 text-purple-500" />}
								title="Long Lifespan"
								description="Built to last with high-quality materials and expert engineering."
							/>
							<FeatureCard
								icon={<ThumbsUp className="h-10 w-10 text-yellow-500" />}
								title="Easy Installation"
								description="Designed for straightforward installation and minimal maintenance."
							/>
						</div>
					</div>
				</section>
				<section id="quality" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
							<Image
								alt="Bosch Quality"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
								height="310"
								src="/images/kitchen-sink.jpg"
								width="550"
							/>
							<div className="flex flex-col justify-center space-y-4">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Bosch Quality Assurance
								</h2>
								<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									With over 100 years of experience, Bosch is synonymous with
									quality and innovation. Our gas geysers are built to the
									highest standards, ensuring:
								</p>
								<ul className="grid gap-6">
									<li>
										<CheckCircle className="h-4 w-4 text-green-500 inline mr-2" />
										Rigorous quality control and testing
									</li>
									<li>
										<CheckCircle className="h-4 w-4 text-green-500 inline mr-2" />
										Use of premium, durable materials
									</li>
									<li>
										<CheckCircle className="h-4 w-4 text-green-500 inline mr-2" />
										Compliance with international safety standards
									</li>
									<li>
										<CheckCircle className="h-4 w-4 text-green-500 inline mr-2" />
										Continuous innovation and improvement
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section
					id="comparison"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
				>
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Why Choose Bosch Gas Geysers?
						</h2>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[200px]">Feature</TableHead>
									<TableHead>Bosch Gas Geyser</TableHead>
									<TableHead>Electric Geyser</TableHead>
									<TableHead>Solar Water Heater</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Heating Speed</TableCell>
									<TableCell>Instant</TableCell>
									<TableCell>Slow</TableCell>
									<TableCell>Dependent on sunlight</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">
										Energy Efficiency
									</TableCell>
									<TableCell>High</TableCell>
									<TableCell>Moderate</TableCell>
									<TableCell>Very High</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">
										Installation Cost
									</TableCell>
									<TableCell>Moderate</TableCell>
									<TableCell>Low</TableCell>
									<TableCell>High</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">
										Operational Cost
									</TableCell>
									<TableCell>Low</TableCell>
									<TableCell>High</TableCell>
									<TableCell>Very Low</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">
										Dependence on Electricity
									</TableCell>
									<TableCell>None</TableCell>
									<TableCell>High</TableCell>
									<TableCell>Moderate</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-brand text-white">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Ready to Upgrade Your Water Heating?
								</h2>
								<p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Experience the Bosch difference today. Contact us for a
									consultation or find a dealer near you.
								</p>
							</div>
							<div className="space-x-4 flex flex-row">
								<Link
									className="flex items-center justify-center h-12 px-4 text-sm text-white bg-red-600 rounded-full shadow-lg sm:w-fit min-w-[190px]"
									href="/quote/start"
								>
									Get a Quote
								</Link>
								<Link
									className="flex items-center justify-center h-12 px-4 text-sm text-black rounded-full shadow-lg bg-white sm:w-fit min-w-[190px]"
									href="/#packages"
								>
									Choose your gas geyser
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
// @ts-ignore
function FeatureCard({ icon, title, description }) {
	return (
		<div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
			<div className="mb-4">{icon}</div>
			<h3 className="text-lg font-semibold mb-2">{title}</h3>
			<p className="text-gray-500">{description}</p>
		</div>
	);
}

