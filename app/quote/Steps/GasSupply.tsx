"use client";

/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import type { LeadStageProps } from "../NewLead";
import { CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const cylinders = [
  {
    name: "You have a gas cylinder that is less than 19kg in size",
    size: "Less than 19kg Cylinder",
  },
  {
    name: "You have one gas cylinder that is 19kg in size",
    size: "1 x 19kg Cylinder",
  },
  {
    name: "You have 2 19kg gas cylinders",
    size: "2 x 19kg Cylinder",
  },
  {
    name: "You have one gas cylinder that is 48kg in size",
    size: "1 x 48kg Cylinder",
  },
  {
    name: "You have 2 48kg gas cylinders",
    size: "2 x 48kg Cylinder",
  },
];

const piped = [
  {
    name: "Natural Gas",
    size: "piped: Natural Gas",
  },
  {
    name: "Liquid Petroleum Gas (LPG)",
    size: "piped: Liquid Petroleum Gas (LPG)",
  },
  {
    name: "Not sure",
    size: "piped: Not sure",
  },
]

const GasSupply = ({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
}: LeadStageProps) => {
  console.log("Step", page, quoteInfo);

  const [selected, setSelected] = useState(cylinders[0]);
  const [show, setShow] = useState(false);

  const [showPiped, setShowPiped] = useState(false);
  const [selectedPiped, setSelectedPiped] = useState(piped[0]);

  console.log({ info: quoteInfo.gasSupply });

  const gasType = (type:string) => {
    setQuoteInfo({ ...quoteInfo, gasSupply: type });
  };

  return (
			<motion.div
				key="gasSupply"
				initial={{ x: "100%" }}
				animate={{ x: 0 }}
				exit={{ x: "-100%" }}
				transition={{ duration: 0.3 }}
				className="w-full h-full flex flex-col items-center justify-center min-h-screen"
			>
				<h1 className="mt-8 font-sans text-center font-bold text-2xl">
					Current gas supply installation
				</h1>
				<AnimatePresence mode="wait" initial={false}>
					{show && (
						<motion.div
							key="cylinder"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="absolute inset-0 bg-slate-500/80 z-30 flex justify-center items-center"
						>
							<div className="w-full px-4 py-16">
								<div className="mx-auto w-full max-w-md">
									<RadioGroup value={selected} onChange={setSelected}>
										<RadioGroup.Label className="sr-only">
											Cylinder size
										</RadioGroup.Label>
										<div className="space-y-2">
											{cylinders.map((cylinder, i) => (
												<RadioGroup.Option
													key={cylinder.size}
													value={cylinder}
													className={({ active, checked }) =>
														`${
															active
																? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
																: ""
														}
                                  ${
																		checked
																			? "bg-sky-900 bg-opacity-75 text-white"
																			: "bg-white"
																	}
                                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
													}
												>
													{({ active, checked }) => (
														<Fragment>
															<div className="flex w-full items-center justify-between">
																<div className="flex items-center">
																	<div className="text-sm">
																		<RadioGroup.Label
																			as="p"
																			className={`font-medium  ${
																				checked ? "text-white" : "text-gray-900"
																			}`}
																		>
																			{cylinder.size}
																		</RadioGroup.Label>
																		<RadioGroup.Description
																			as="span"
																			className={`inline ${
																				checked
																					? "text-sky-100"
																					: "text-gray-500"
																			}`}
																		>
																			<span>{cylinder.name}</span>
																		</RadioGroup.Description>
																	</div>
																</div>
																{checked && (
																	<div className="shrink-0 text-white">
																		<CheckCircleIcon className="h-6 w-6" />
																	</div>
																)}
															</div>
														</Fragment>
													)}
												</RadioGroup.Option>
											))}
										</div>
									</RadioGroup>
								</div>
								<div className="flex justify-center space-x-3 items-center mt-4">
									<Button
										className="px-4 py-2 bg-red-600 text-white w-1/3 max-w-[200px] rounded-full text-base"
										onClick={() => {
											gasType("");
											setShow(false);
										}}
									>
										Cancel
									</Button>
									<Button
										className="px-4 py-2 bg-sky-600 text-white w-1/3 max-w-[200px] rounded-full text-base"
										onClick={() => {
											gasType(selected.size);
											setShow(false);
										}}
									>
										Save
									</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<AnimatePresence mode="wait" initial={false}>
					{showPiped && (
						<motion.div
							key="piped"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="absolute inset-0 bg-slate-500/80 z-30 flex justify-center items-center"
						>
							<div className="w-full px-4 py-16">
								<div className="mx-auto w-full max-w-md">
									<RadioGroup value={selectedPiped} onChange={setSelectedPiped}>
										<RadioGroup.Label className="sr-only">
											Type of piped gas supply
										</RadioGroup.Label>
										<div className="space-y-2">
											{piped.map((pipe, i) => (
												<RadioGroup.Option
													key={pipe.size}
													value={pipe}
													className={({ active, checked }) =>
														`${
															active
																? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
																: ""
														}
                                  ${
																		checked
																			? "bg-sky-900 bg-opacity-75 text-white"
																			: "bg-white"
																	}
                                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
													}
												>
													{({ active, checked }) => (
														<Fragment>
															<div className="flex w-full items-center justify-between">
																<div className="flex items-center">
																	<div className="text-sm">
																		<RadioGroup.Label
																			as="p"
																			className={`font-medium  ${
																				checked ? "text-white" : "text-gray-900"
																			}`}
																		>
																			{pipe.name}
																		</RadioGroup.Label>

																	</div>
																</div>
																{checked && (
																	<div className="shrink-0 text-white">
																		<CheckCircleIcon className="h-6 w-6" />
																	</div>
																)}
															</div>
														</Fragment>
													)}
												</RadioGroup.Option>
											))}
										</div>
									</RadioGroup>
								</div>
								<div className="flex justify-center space-x-3 items-center mt-4">
									<Button
										className="px-4 py-2 bg-red-600 text-white w-1/3 max-w-[200px] rounded-full text-base"
										onClick={() => {
											gasType("");
											setShowPiped(false);
										}}
									>
										Cancel
									</Button>
									<Button
										className="px-4 py-2 bg-sky-600 text-white w-1/3 max-w-[200px] rounded-full text-base"
										onClick={() => {
											gasType(selectedPiped.size);
											setShowPiped(false);
										}}
									>
										Save
									</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<p className="py-3 px-4 text-center">
					What type of gas supply do you currently have present at your
					property?
				</p>

				<div className="max-w-6xl mx-auto flex flex-col md:flex-row md:flex-wrap items-center justify-center space-y-8 md:space-y-0 lg:space-x-6">

					<div
						className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
						onClick={() => setShowPiped(true)}
						onKeyDown={() => setShowPiped(true)}
					>
						{quoteInfo.gasSupply.startsWith("piped") ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 absolute top-2 right-2 text-sky-500"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<title>Selected</title>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
						) : null}
						<img className="h-16 w-16" alt="" src="/images/icons/piped.svg" />
						<p className="text-lg text-center text-sky-500 font-bold">
							Piped gas
						</p>
					</div>
					<div
						className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
						onClick={() => setShow(true)}
						onKeyDown={() => setShow(true)}
					>
						{quoteInfo.gasSupply === "Less than 19kg Cylinder" ||
						quoteInfo.gasSupply === "1 x 19kg Cylinder" ||
						quoteInfo.gasSupply === "2 x 19kg Cylinder" ||
						quoteInfo.gasSupply === "1 x 48kg Cylinder" ||
						quoteInfo.gasSupply === "2 x 48kg Cylinder" ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 absolute top-2 right-2 text-sky-500"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<title>Selected</title>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
						) : null}
						<img
							className="h-16 w-16"
							alt=""
							src="/images/icons/cylinder.svg"
						/>
						<p className="text-lg text-center text-sky-500 font-bold">
							Gas cylinder
						</p>
					</div>
					<div
						className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
						onClick={() => gasType("none")}
						onKeyDown={() => gasType("none")}
					>
						{quoteInfo.gasSupply === "none" && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 absolute top-2 right-2 text-sky-500"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<title>Selected</title>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
						)}
						<img className="h-16 w-16" alt="" src="/images/icons/close.svg" />
						<p className="text-lg text-center text-sky-500 font-bold">
							No gas supply
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center space-x-6 my-8">
					{quoteInfo.gasSupply !== "" ? (
						<Fragment>
							<svg
								onClick={prevPage}
								onKeyDown={prevPage}
								xmlns="http://www.w3.org/2000/svg"
								className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Previous</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
							<Button
								onClick={nextPage}
								className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
							>
								Continue
							</Button>
						</Fragment>
					) : (
						<Fragment>
							<svg
								onClick={prevPage}
								onKeyDown={prevPage}
								xmlns="http://www.w3.org/2000/svg"
								className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<title>Previous</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
							<p className="text-md text-sky-600 font-bold text-center">
								Please answer the question
							</p>
						</Fragment>
					)}
				</div>
			</motion.div>
		);
};

export default GasSupply;
