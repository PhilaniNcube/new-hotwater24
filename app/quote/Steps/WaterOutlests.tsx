"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { LeadStageProps } from '../NewLead';

const WaterOutlets = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }:LeadStageProps) => {
  console.log('Step', page, quoteInfo);
  const [interaction, setInteraction] = useState(false);

  const incrementStandardShower = () => {
    const qty = quoteInfo.standardShower + 1;
    setQuoteInfo({ ...quoteInfo, standardShower: qty });
    setInteraction(true);
  };

  const decrementStandardShower = () => {
    const qty = quoteInfo.standardShower - 1;
    setQuoteInfo({ ...quoteInfo, standardShower: qty });
    setInteraction(true);
  };

  const incrementRainShower = () => {
    const qty = quoteInfo.rainShower + 1;
    setQuoteInfo({ ...quoteInfo, rainShower: qty });
    setInteraction(true);
  };

  const decrementRainShower = () => {
    const qty = quoteInfo.rainShower - 1;
    setQuoteInfo({ ...quoteInfo, rainShower: qty });
    setInteraction(true);
  };

  const incrementBathtub = () => {
    const qty = quoteInfo.bathtub + 1;
    setQuoteInfo({ ...quoteInfo, bathtub: qty });
    setInteraction(true);
  };

  const decrementBathtub = () => {
    const qty = quoteInfo.bathtub - 1;
    setQuoteInfo({ ...quoteInfo, bathtub: qty });
    setInteraction(true);
  };

  const incrementBathroomSink = () => {
    const qty = quoteInfo.bathroomSink + 1;
    setQuoteInfo({ ...quoteInfo, bathroomSink: qty });
    setInteraction(true);
  };

  const decrementBathroomSink = () => {
    const qty = quoteInfo.bathroomSink - 1;
    setQuoteInfo({ ...quoteInfo, bathroomSink: qty });
    setInteraction(true);
  };

  const incrementKitchenSink = () => {
    const qty = quoteInfo.kitchenSink + 1;
    setQuoteInfo({ ...quoteInfo, kitchenSink: qty });
    setInteraction(true);
  };

  const decrementKitchenSink = () => {
    const qty = quoteInfo.kitchenSink - 1;
    setQuoteInfo({ ...quoteInfo, kitchenSink: qty });
    setInteraction(true);
  };

  const incrementWashingMachine = () => {
    const qty = quoteInfo.washingmachine + 1;
    setQuoteInfo({ ...quoteInfo, washingmachine: qty });
    setInteraction(true);
  };

  const decrementWashingMachine = () => {
    const qty = quoteInfo.washingmachine - 1;
    setQuoteInfo({ ...quoteInfo, washingmachine: qty });
    setInteraction(true);
  };

  // rainShower: 0,
  // kitchenTap: 0,
  // bathtub: 0,
  // sink: 0,
  // dishwasher: 0,
  // flowRate: 0,

  const calculateFlowRate = () => {
    const showerFlow = quoteInfo.standardShower * 6.5;
    const rainShowerFlow = quoteInfo.rainShower * 12.5;
    const kitchenSinkFlow = quoteInfo.kitchenSink * 5;
    const bathtubFlow = quoteInfo.bathtub * 5;
    const bathroomSinkFlow = quoteInfo.bathroomSink * 2.5;
    // let dishwasherFlow = quoteInfo.dishwasher * 10.02;
    //  let washingmachineFlow = quoteInfo.washingmachine * 10.02;

    const rate =
      showerFlow +
      rainShowerFlow +
      bathtubFlow +
      bathroomSinkFlow +
      kitchenSinkFlow;

    const totalFowRate = rate * 0.8;

    setQuoteInfo({ ...quoteInfo, flowRate: +totalFowRate.toFixed(2) });
  };

  return (
			<motion.div
				transition={{ duration: 0.3 }}
				key="outlets"
				initial={{ x: "100%" }}
				animate={{ x: 0 }}
				exit={{ x: "-100%" }}
				className="max-w-6xl mx-auto my-16"
			>
				<h1 className="mt-8 font-sans text-2xl font-bold text-center">
					Warm water outlets
				</h1>

				<p className="py-3 text-center">
					How many of these warm water outlets do you have in your house?
				</p>

				<div className="flex flex-col items-center justify-center max-w-3xl py-8 mx-auto md:flex-row md:justify-between md:flex-wrap gap-y-8">
					<div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
						<img className="w-16 h-16" alt="" src="/images/icons/shower.svg" />
						<p className="text-lg font-bold text-center text-sky-500">
							Standard shower
						</p>
						<div className="relative flex flex-row items-center justify-between h-10 mt-1 bg-transparent rounded-lg">
							<button
                type="button"
								disabled={quoteInfo.standardShower === 0}
								onClick={decrementStandardShower}
								data-action="decrement"
								className="w-10 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">−</span>
							</button>
							<input
								type="number"
								onChange={(e) =>
									setQuoteInfo({ ...quoteInfo, standardShower: e.target.value })
								}
								value={quoteInfo.standardShower}
								className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
								name="custom-input-number"
							/>
							<p className="flex items-center justify-center w-10 h-10">
								{quoteInfo.standardShower}
							</p>
							<button
                type="button"
								data-action="increment"
								onClick={incrementStandardShower}
								className="w-10 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">+</span>
							</button>
						</div>
					</div>
					<div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
						<img
							className="w-16 h-16"
							alt=""
							src="/images/icons/rainshower.svg"
						/>
						<p className="text-lg font-bold text-center text-sky-500">
							Rain shower
						</p>
						<div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
							<button
                type="button"
								disabled={quoteInfo.rainShower === 0}
								onClick={decrementRainShower}
								data-action="decrement"
								className="w-10 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">−</span>
							</button>
							<input
								type="number"
								onChange={(e) =>
									setQuoteInfo({ ...quoteInfo, rainShower: e.target.value })
								}
								className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
								name="custom-input-number"
								value={quoteInfo.rainShower}
							/>
							<p className="flex items-center justify-center w-10 h-10">
								{quoteInfo.rainShower}
							</p>
							<button
								type="button"
								data-action="increment"
								onClick={incrementRainShower}
								className="w-10 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">+</span>
							</button>
						</div>
					</div>

					<div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
						<img className="w-16 h-16" alt="" src="/images/icons/bath.svg" />
						<p className="text-lg font-bold text-center text-sky-500">
							Bathtubs
						</p>
						<div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
							<button
								type="button"
								disabled={quoteInfo.bathtub === 0}
								onClick={decrementBathtub}
								data-action="decrement"
								className="w-10 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">−</span>
							</button>
							<input
								type="number"
								onChange={(e) =>
									setQuoteInfo({ ...quoteInfo, bathtub: e.target.value })
								}
								className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
								name="custom-input-number"
								value={quoteInfo.bathtub}
							/>
							<p className="flex items-center justify-center w-10 h-10">
								{quoteInfo.bathtub}
							</p>
							<button
								type="button"
								data-action="increment"
								onClick={incrementBathtub}
								className="w-10 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">+</span>
							</button>
						</div>
					</div>

					<div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
						<img className="w-16 h-16" alt="" src="/images/icons/sink.svg" />
						<p className="text-lg font-bold text-center text-sky-500">
							Kitchen sinks
						</p>
						<div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
							<button
								type="button"
								disabled={quoteInfo.kitchenSink === 0}
								onClick={decrementKitchenSink}
								data-action="decrement"
								className="w-10 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">−</span>
							</button>
							<input
								type="number"
								onChange={(e) =>
									setQuoteInfo({ ...quoteInfo, kitchenSink: e.target.value })
								}
								className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
								name="custom-input-number"
								value={quoteInfo.kitchenSink}
							/>
							<p className="flex items-center justify-center w-10 h-10">
								{quoteInfo.kitchenSink}
							</p>
							<button
								type="button"
								data-action="increment"
								onClick={incrementKitchenSink}
								className="w-10 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">+</span>
							</button>
						</div>
					</div>

					<div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
						<img className="w-16 h-16" alt="" src="/images/icons/sink.svg" />
						<p className="text-lg font-bold text-center text-sky-500">
							Bathroom sinks
						</p>
						<div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
							<button
								type="button"
								disabled={quoteInfo.bathroomSink === 0}
								onClick={decrementBathroomSink}
								data-action="decrement"
								className="w-10 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">−</span>
							</button>
							<input
								type="number"
								onChange={(e) =>
									setQuoteInfo({ ...quoteInfo, bathroomSink: e.target.value })
								}
								className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
								name="custom-input-number"
								value={quoteInfo.bathroomSink}
							/>
							<p className="flex items-center justify-center w-10 h-10">
								{quoteInfo.bathroomSink}
							</p>
							<button
								type="button"
								data-action="increment"
								onClick={incrementBathroomSink}
								className="w-10 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
							>
								<span className="m-auto text-2xl font-thin">+</span>
							</button>
						</div>
					</div>

					{/**
         *
         *
         *  <div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img
            className="w-16 h-16"
            alt=""
            src="/images/icons/washingmachine.svg"
          />
          <p className="text-lg font-bold text-center text-sky-500">
            Washing Machine (hotfill*)
          </p>
          <div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
            <button
              disabled={quoteInfo.washingmachine === 0}
              onClick={decrementWashingMachine}
              data-action="decrement"
              className="w-10 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, washingmachine: e.target.value })
              }
              className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
              name="custom-input-number"
              value={quoteInfo.washingmachine}
            ></input>
            <p className="flex items-center justify-center w-10 h-10">
              {quoteInfo.washingmachine}
            </p>
            <button
              data-action="increment"
              onClick={incrementWashingMachine}
              className="w-10 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
         *
         *
         *
         *  <div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img
            className="w-16 h-16"
            alt=""
            src="/images/icons/dishwasher.svg"
          />
          <p className="text-lg font-bold text-center text-sky-500">
            Dishwasher (hotfill*)
          </p>
          <div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
            <button
              disabled={quoteInfo.dishwasher === 0}
              onClick={decrementDishwasher}
              data-action="decrement"
              className="w-10 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, dishwasher: e.target.value })
              }
              className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
              name="custom-input-number"
              value={quoteInfo.dishwasher}
            ></input>
            <p className="flex items-center justify-center w-10 h-10">
              {quoteInfo.dishwasher}
            </p>
            <button
              data-action="increment"
              onClick={incrementDishwasher}
              className="w-10 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
         *
         * **/}
				</div>

				<div className="flex items-center justify-center my-3 space-x-6">
					{quoteInfo.standardShower !== 0 ||
					quoteInfo.rainShower !== 0 ||
					// quoteInfo.sink !== 0 ||
					quoteInfo.bathtub !== 0 ? (
						<Fragment>
							{" "}
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<svg
								onClick={prevPage}
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
							<button
								type="button"
								onClick={() => {
									calculateFlowRate();
									nextPage();
								}}
								className="px-8 py-4 text-2xl font-medium text-center text-white rounded-full shadow-md bg-sky-500 hover:bg-sky-600 shadow-sky-400 hover:shadow"
							>
								Continue
							</button>
						</Fragment>
					) : (
						<Fragment>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<svg
								onClick={prevPage}
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
							<p className="font-bold text-center text-md text-sky-600">
								Please answer the question
							</p>
						</Fragment>
					)}
				</div>
			</motion.div>
		);
};

export default WaterOutlets;
