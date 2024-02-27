import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { antonio } from "@/fonts";
import { CheckCircle2 } from "lucide-react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OZMoLpdsAFn
 */
export default function SafeInstallations() {
  return (
			<section className="w-full py-10">
				<div className="container px-4 mx-auto md:px-6 lg:px-8">
					<div className="space-y-4">
						<h2
							className={cn(
								"text-2xl font-bold text-center md:text-3xl lg:text-4xl text-slate-800",
								antonio.className,
							)}
						>
							Safe & reliable installations
						</h2>
						<p className="text-lg text-center text-gray-600 md:text-xl dark:text-gray-400">
							Ensuring Safety and Quality with Certified LP Gas Installation
							Services
						</p>
					</div>
					<div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 text-slate-500">
						<div className="flex items-start space-x-2">
							<CheckCircle2 className="w-6 h-6 text-green-500" />
							<p className="text-sm font-medium text-slate-600">
								All our installers are certified and registered with the LPGas
								Association of South Africa for guaranteed safety.
							</p>
						</div>
						<div className="flex items-start space-x-2">
							<CheckCircle2 className="w-6 h-6 text-green-500" />
							<p className="text-sm font-medium text-slate-600">
								The installation work undergoes thorough checking for compliance
								with current rules and regulations.
							</p>
						</div>
						<div className="flex items-start space-x-2">
							<CheckCircle2 className="w-6 h-6 text-green-500" />
							<p className="text-sm font-medium text-slate-600">
								A Certificate of Compliance (CoC) is provided after every
								install, signed off between the installer and the client.
							</p>
						</div>
						<div className="flex items-start space-x-2">
							<CheckCircle2 className="w-6 h-6 text-green-500" />
							<p className="text-sm font-medium text-slate-600">
								Quick and straightforward process: simply click the button,
								answer some questions, and we'll provide you with a quote for a
								reliable installation service.
							</p>
						</div>
						<div className="flex items-start space-x-2">
							<CheckCircle2 className="w-6 h-6 text-green-500" />
							<p className="text-sm font-medium text-slate-600">
								The installation process will be organized and an installer will
								be assigned to your area for convenient service.
							</p>
						</div>
						<div className="flex items-start space-x-2">
							<CheckCircle2 className="w-6 h-6 text-green-500" />
							<p className="text-sm font-medium text-slate-600">
								For your long-term needs, consider a service & maintenance
								contract with us, ensuring high-quality maintenance and best
								service at a fixed monthly price.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center gap-4 mt-4">
						<Image
							src="/images/lpgas.png"
							width={295}
							height={171}
							alt="LPG"
							className="min-w-[180px] bg-slate-700 rounded-lg"
						/>
						<Link href="/packages">
							<Button
								type="button"
								className="min-w-[180px] rounded-full bg-brand"
							>
								Choose your gas geyser
							</Button>{" "}
						</Link>
					</div>
				</div>
			</section>
		);
}
