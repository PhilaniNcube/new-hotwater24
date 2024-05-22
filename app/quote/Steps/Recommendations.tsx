"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useMeasure from "react-use-measure";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import formatter from "@/lib/format";
import roundUp, { roundUpThousand } from "@/lib/roundUp";
import { motion } from "framer-motion";
import { ShieldQuestionIcon } from "lucide-react";
import type { LeadStageProps } from "../NewLead";
import type { Geyser } from "@/sanity/types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { antonio } from "@/fonts";
import { formatCurrency } from "@/utils/format";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface RecommendationsProps extends LeadStageProps {
  geysers: Geyser[]
}



const Recommendations = ({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
  geysers
}: RecommendationsProps) => {
  const [ref, { height, width }] = useMeasure();
  console.log("Step 8", quoteInfo);

  const [geyserPrice, setGeyserPrice] = useState(0);
  const [geyserSize, setGeyserSize] = useState(0);
  const [installation, setInstallation] = useState(0);
  const [plumbing, setPlumbing] = useState(0);

  console.log({flowrate: quoteInfo.flowRate})

  const labels = ["Total Cost"];



  // write a function that filters that returns the geysers with the closest maxFlowRate to the calculate quoteInfo.flowRate property

  const filteredGeysers = geysers.filter((geyser) =>
    Number(geyser.maxFlowRate.split("l")[0]) >= quoteInfo.flowRate
  );


  //@ts-nocheck
  const sortedFilter = filteredGeysers.sort((a, b ) => Number(a.maxFlowRate.split("l")[0]) - Number(b.maxFlowRate.split("l")[0]));



  const  getDisplayedGeyser = () => {

    if(quoteInfo.flowRate <= 6) {
      return geysers.find((geyser) => Number(geyser.maxFlowRate.split("l")[0]) === 12)
    // biome-ignore lint/style/noUselessElse: <explanation>
}   else if(quoteInfo.flowRate <= 19) {
      return geysers.find((geyser) => Number(geyser.maxFlowRate.split("l")[0]) === 16)
    // biome-ignore lint/style/noUselessElse: <explanation>
}  else if(quoteInfo.flowRate <= 23) {
      return geysers.find((geyser) => Number(geyser.maxFlowRate.split("l")[0]) === 20)
    // biome-ignore lint/style/noUselessElse: <explanation>
}  else if(quoteInfo.flowRate <= 45) {
      return geysers.find((geyser) => Number(geyser.maxFlowRate.split("l")[0]) === 26)
    // biome-ignore lint/style/noUselessElse: <explanation>
}  else {
      return null
    }

  }

  const displayedGeyser = getDisplayedGeyser()
  console.log("Display Geyser" , displayedGeyser?.brand)


  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
			if (quoteInfo.flowRate <= 6) {
				setGeyserPrice(displayedGeyser?.price || 4500);
				setInstallation(5500);
				setPlumbing(3750);
				setGeyserSize(12);
			}  else if (quoteInfo.flowRate <= 19) {
				setGeyserPrice(displayedGeyser?.price || 8700);
				setInstallation(5850);
				setPlumbing(3750);
				setGeyserSize(16);
			} else if (quoteInfo.flowRate <= 23) {
				setGeyserPrice(displayedGeyser?.price || 12950);
				setInstallation(8050);
				setPlumbing(3950);
				setGeyserSize(20);
			} else if (quoteInfo.flowRate <= 45) {
				setGeyserPrice(displayedGeyser?.price || 14950);
				setInstallation(8050);
				setPlumbing(3950);
				setGeyserSize(26);
			}
		}, [quoteInfo.flowRate]);

  const data = {
    labels,

    datasets: [
      {
        label: "Gas geyser",
        data: [geyserPrice],
        backgroundColor: "#0ea5e9",
        barThickness: 100,
      },
      {
        label: "Gas installation",
        data: [installation],
        backgroundColor: "#ea580c",
        barThickness: 100,
      },
      {
        label: "Plumbing work",
        data: [plumbing],
        backgroundColor: "#c03d32",
        barThickness: 100,
      },
    ],
  };

  return (
			<motion.div
				transition={{ duration: 0.3 }}
				key="property"
				initial={{ x: "100%" }}
				animate={{ x: 0 }}
				exit={{ x: "-100%" }}
				className="mt-8 min-h-[90vh]"
			>
				{quoteInfo.flowRate <= 45 && displayedGeyser ? (
					<Fragment>
						{" "}
						<p className="text-center text-lg text-gray-700 mb-3 font-medium max-w-[60ch] mx-auto">
							Based on the information provided we have calculated the following
							size gas geyser for your property: <br />{" "}
							<span className="text-2xl font-bold">{geyserSize}L/Min</span>{" "}
							<br />
							We recommend the following gas geyser package for your property:
						</p>
						<div className="relative flex flex-col gap-4 overflow-hidden rounded-lg group md:flex-row">
							<div className="flex flex-col items-center justify-center w-full">
								<Image
									alt={displayedGeyser.title}
									className="object-cover w-[200px]"
									height="1000"
									src={displayedGeyser.image}
									width="600"
								/>
								<h3
									className={cn(
										"font-semibold text-4xl text-center",
										antonio.className,
									)}
								>
									{displayedGeyser.title}
								</h3>
								<p className="py-2 text-2xl font-semibold text-center text-red-600">
									From: {formatCurrency(displayedGeyser.price)}*
								</p>
								<p className="py-2 text-sm font-semibold text-center text-slate-800">
									{displayedGeyser.composition}
								</p>
							</div>
							{/* <div className="w-full p-4 ">
							 <Table>
									<TableBody>
										<TableRow>
											<TableCell>
												{displayedGeyser.geyser.description}
											</TableCell>
											<TableCell>
												{formatCurrency(displayedGeyser.geyser.price)}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												{displayedGeyser.installation.description}
											</TableCell>
											<TableCell>
												{formatCurrency(displayedGeyser.installation.price)}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												{displayedGeyser.certificateOfCompliance.description}
											</TableCell>
											<TableCell>
												{formatCurrency(
													displayedGeyser.certificateOfCompliance.price,
												)}
											</TableCell>
										</TableRow>

										<TableRow>
											<TableCell>
												{displayedGeyser.plumbing.description}
											</TableCell>
											<TableCell>
												{formatCurrency(displayedGeyser.plumbing.price)}
											</TableCell>
										</TableRow>
										<TableRow className="text-xl font-bold">
											<TableCell>Total</TableCell>
											<TableCell>
												{formatCurrency(
													displayedGeyser.geyser.price +
														displayedGeyser.plumbing.price +
														displayedGeyser.installation.price +
														displayedGeyser.certificateOfCompliance.price,
												)}
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</div> */}
						</div>
						{/* <p className="text-center text-lg mb-6 text-gray-700  font-medium max-w-[60ch] mx-auto">
            The initial estimated total cost of the gas geyser installation is
            mentioned in the below picture:
            <br />{" "}
            <span className="text-2xl font-bold">
              {` ${formatter.format(geyserPrice + installation + plumbing)}`} *
            </span>{" "}
            <span className="text-xs underline">Incl VAT</span>
          </p> */}
						{/* <div
            className="flex max-w-[700px] min-w-[200px] px-6 min-h-[600px] mx-auto items-center flex-col bg-gray-600 py-3 mb-8 relative"
            ref={ref}
          >
            <Bar
              style={{
                maxWidth: "500px",
                minHeight: "300px",
                maxHeight: "380px",
              }}
              options={{
                plugins: {
                  legend: {
                    position: "top",
                    align: "start",
                    labels: {
                      borderRadius: 10,
                      boxPadding: 3,
                    },
                  },
                },
                locale: "ZA",
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
                    max: roundUpThousand(geyserPrice + installation + plumbing),
                  },
                },
              }}
              data={data}
            />
          </div> */}
						<div className="flex flex-col items-start max-w-2xl mx-auto">
							{/* <p className="text-sm mb-2 text-gray-600 max-w-[700px] mx-auto font-medium">
              *This cost does not include the cost for a gas cage, gas
              cylinder(s) and gas refill. The initial estimated total cost is
              based on the information provided and includes the cost of the:
            </p> */}
							{/* <ol className="text-sm list-decimal  text-gray-600 max-w-[700px] mx-auto">
              <li>
                Gas geyser (size of the gas geyser is calculated by the number
                of hot water outlets indicated)
              </li>
              <li>Gas installation</li>
              <li>Plumbing work</li>
            </ol> */}
						</div>
						<p className="mx-auto mt-4 text-lg font-bold text-center text-gray-600">
							If you would like to consider a payment plan/installment, please
							do select the option below and we will take you further through
							the process.
						</p>
						{/*
              <p className="mx-auto mt-4 text-lg font-bold text-center text-gray-600 md:text-3xl">
            Would you consider financing?
          </p>
              */}
						<div className="px-4 mx-auto mt-3 max-w-7xl text-auto" />
						<div className="flex items-center justify-center mt-6 mb-8 space-x-6">
							{
								<Fragment>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										onKeyPress={(event) => {
											if (event.key === "Enter") {
												prevPage();
											}
										}}
										onClick={prevPage}
										xmlns="http://www.w3.org/2000/svg"
										className="w-16 h-16 text-white bg-red-500 rounded-full shadow-lg cursor-pointer shadow-red-500 hover:shadow-md hover:bg-red-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1}
											d="M15 19l-7-7 7-7"
										/>
									</svg>
									<div className="flex flex-col space-x-4 space-y-3 md:flex-row md:space-y-0">
										<span
											onClick={() => {
												setQuoteInfo({
													...quoteInfo,
													installation: "geyser only",
													installationCost: installation,
													plumbingCost: plumbing,
													geyserPrice: geyserPrice,
													geyserSize: geyserSize,
													financing: "No Payment Plan",
												});
												nextPage();
											}}
											onKeyDown={(event) => {
												if (event.key === "Enter") {
													setQuoteInfo({
														...quoteInfo,
														installation: "geyser only",
														installationCost: installation,
														plumbingCost: plumbing,
														geyserPrice: geyserPrice,
														geyserSize: geyserSize,
														financing: "No Payment Plan",
													});
													nextPage();
												}
											}}
											className="flex items-center justify-center px-8 py-4 mr-2 text-sm font-medium text-center text-white rounded-full shadow-md cursor-pointer bg-sky-500 hover:bg-sky-600 shadow-sky-400 hover:shadow"
										>
											No Payment Plan
										</span>
										<span
											onClick={() => {
												setQuoteInfo({
													...quoteInfo,
													installation: "geyser only",
													installationCost: installation,
													plumbingCost: plumbing,
													geyserPrice: geyserPrice,
													geyserSize: geyserSize,
													financing: "Yes Payment Plan",
												});
												nextPage();
											}}
											onKeyDown={(event) => {
												if (event.key === "Enter") {
													setQuoteInfo({
														...quoteInfo,
														installation: "geyser only",
														installationCost: installation,
														plumbingCost: plumbing,
														geyserPrice: geyserPrice,
														geyserSize: geyserSize,
														financing: "Yes Payment Plan",
													});
													nextPage();
												}
											}}
											className="flex items-center justify-center px-8 py-4 text-sm font-medium text-center text-white rounded-full shadow-md cursor-pointer bg-sky-500 hover:bg-sky-600 shadow-sky-400 hover:shadow"
										>
											Yes Payment Plan
										</span>
									</div>
								</Fragment>
							}
						</div>
					</Fragment>
				) : (
					<Fragment>
						<div className="max-w-6xl px-4 mx-auto">
							<p className="text-lg font-bold text-center text-gray-700">
								Thank you for answering our questions! As the number of hot
								water outlets as indicated exceed the maximum capacity for a
								single gas geyser, we need to look at possibly subdividing the
								hot water supply for your property.
							</p>
							<div className="grid grid-cols-1 mt-4">
								{/**
           <div className="flex-col justify-center hidden w-full px-4">
                <p className="my-3 text-sm font-medium text-gray-600 md:text-xl">
                  But no worries as we can find a solution for you.
                </p>
                <p className="text-sm font-medium text-gray-600 md:text-xl">
                  What we simply need to do is looking at subdividing the hot
                  water supply for your property into 2 or more sections.
                </p>
              </div>
          **/}

								<div className="w-full ">
									<img
										className="w-[300px] object-cover aspect-video mx-auto"
										alt="bathroom"
										src="/images/new_shower.jpg"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-4">
							<p className="text-lg font-bold text-center text-gray-700">
								However you might have to look at installing 2 gas geysers that
								will supply your property to gas for your warm water solution.
								By clicking "Yes please" below we will take you further through
								the process and we will send you our proposal based on 2 gas
								geysers. If you don't want to continue the process, please click
								"No thanks".
							</p>
							<div className="flex flex-col mt-4 space-y-3 md:flex-row md:space-x-4 md:space-y-0">
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								<svg
									onClick={prevPage}
									onKeyDown={(event) => {
										if (event.key === "Enter") {
											prevPage();
										}
									}}
									xmlns="http://www.w3.org/2000/svg"
									className="w-16 h-16 text-white bg-red-500 rounded-full shadow-lg shadow-red-500 hover:shadow-md hover:bg-red-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1}
										d="M15 19l-7-7 7-7"
									/>
								</svg>

								<span
									onClick={() => {
										setQuoteInfo({
											...quoteInfo,
											installation: "Inform me about water heating solution",
											installationCost: installation,
											plumbingCost: plumbing,
											geyserPrice: geyserPrice,
											geyserSize: geyserSize,
										});
										nextPage();
									}}
									onKeyDown={(event) => {
										if (event.key === "Enter") {
											setQuoteInfo({
												...quoteInfo,
												installation: "Inform me about water heating solution",
												installationCost: installation,
												plumbingCost: plumbing,
												geyserPrice: geyserPrice,
												geyserSize: geyserSize,
											});
											nextPage();
										}
									}}
									className="flex items-center px-6 py-2 space-x-2 text-base font-medium text-white rounded-full cursor-pointer bg-sky-500 "
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-8 h-8 text-white top-2 right-2"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<p>Yes please</p>
								</span>

								<span
									onClick={() => {
										setQuoteInfo({
											...quoteInfo,
											installation: "No thanks",
											installationCost: installation,
											plumbingCost: plumbing,
											geyserPrice: geyserPrice,
											geyserSize: geyserSize,
										});
										nextPage();
									}}
									onKeyDown={(event) => {
										if (event.key === "Enter") {
											setQuoteInfo({
												...quoteInfo,
												installation: "No thanks",
												installationCost: installation,
												plumbingCost: plumbing,
												geyserPrice: geyserPrice,
												geyserSize: geyserSize,
											});
											nextPage();
										}
									}}
									className="flex items-center px-6 py-2 space-x-2 text-base font-medium text-white bg-red-500 rounded-full cursor-pointer "
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-10 h-10"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<p>No thanks</p>
								</span>
							</div>
						</div>
					</Fragment>
				)}
			</motion.div>
		);
};

export default Recommendations;
