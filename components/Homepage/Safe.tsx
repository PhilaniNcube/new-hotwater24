/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ChooseWhite from "../ChooseWhite";
import { cn } from "@/lib/utils";
import { antonio } from "@/fonts";

export default function Safe() {
  return (
			<div>
				<div className="container md:py-12 py-9">
					<div className="relative rounded-md">
						<img
							loading="lazy"
							src="/images/installation.jpg"
							alt="Geyser Installation"
							className="absolute hidden object-cover object-right-top w-full h-full rounded-md sm:block"
						/>
						<img
							loading="lazy"
							src="/images/geyser.jpeg"
							alt="geyser"
							className="absolute object-cover object-right-top w-full h-full rounded-md sm:hidden"
						/>
						<div className="relative top-0 z-40 flex flex-col justify-between w-full h-full p-6 text-xl rounded-md bg-gradient-to-r from-gray-700 to-transparent md:p-16 ">
							<div>
								<h1
									className={cn(
										"md:text-4xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64",
										antonio.className,
									)}
								>
									Safe and reliable installation by certified professionals
								</h1>
								<p className="mt-4 text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12">
									Safety comes first! We work with our network of independent
									installers. All installers are certified and registered with
									the LPGas Association of South Africa. For safety and quality
									purposes of the installation work performed every installation
									comes with a CoC (Certificate of Compliance) to guarantee your
									safety!
								</p>
							</div>

							<div>
								<img
									loading="lazy"
									src="/images/lpgas.png"
									alt="logo"
									className="object-cover h-16"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
