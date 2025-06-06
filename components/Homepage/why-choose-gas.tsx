
import { antonio } from "@/fonts";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {  FlameIcon } from "lucide-react";

export default function WhyGoGas() {
  return (
			<section className="container max-w-7xl mx-auto">
				<div className="px-6 py-12 bg-white lg:px-0 dark:bg-gray-800">
					<div className="pb-10 text-center">
						<h1
							className={cn(
								"text-4xl font-bold text-gray-800 dark:text-white",
								antonio.className,
							)}
						>
							Why go gas?
						</h1>
						<p className="text-3xl font-bold text-gray-600">
							Save up to 25% on your monthly electricity bill!
						</p>
					</div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardContent className="flex flex-col items-center p-6 space-y-4">
								<FlameIcon
									className="w-8 h-8 p-1 text-white bg-red-600 rounded-full"
									size={26}
								/>
								<CardTitle>Instant Hot Water</CardTitle>
								<CardDescription>
									A gas geyser provides hot water on-demand without your family
									ever having to experience a cold shower.
								</CardDescription>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center p-6 space-y-4">
								<FlameIcon
									className="w-8 h-8 p-1 text-white bg-red-600 rounded-full"
									size={26}
								/>
								<CardTitle>Safe To Operate</CardTitle>
								<CardDescription>
									Gas geysers are safe and easy to operate, even during
									loadshedding.
								</CardDescription>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center p-6 space-y-4">
								<FlameIcon
									className="w-8 h-8 p-1 text-white bg-red-600 rounded-full"
									size={26}
								/>
								<CardTitle>Easy Maintenance</CardTitle>
								<CardDescription>
									The lifespan of a quality gas geyser can reach between 15-20
									years and if properly maintained, there is little to no risk
									of your geyser bursting like with an electric geyser.
								</CardDescription>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center p-6 space-y-4">
								<FlameIcon
									className="w-8 h-8 p-1 text-white bg-red-600 rounded-full"
									size={26}
								/>
								<CardTitle>Eco-Friendly</CardTitle>
								<CardDescription>
									Modern day quality gas geysers are very efficient making them
									more eco-friendly and reducing your carbon footprint as water
									will only be heated when needed.
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		);
}
