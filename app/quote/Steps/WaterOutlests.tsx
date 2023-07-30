"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LeadStageProps } from '../NewLead';

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
    let showerFlow = quoteInfo.standardShower * 6.5;
    let rainShowerFlow = quoteInfo.rainShower * 12.5;
    let kitchenSinkFlow = quoteInfo.kitchenSink * 5;
    let bathtubFlow = quoteInfo.bathtub * 5;
    let bathroomSinkFlow = quoteInfo.bathroomSink * 2.5;
    // let dishwasherFlow = quoteInfo.dishwasher * 10.02;
    //  let washingmachineFlow = quoteInfo.washingmachine * 10.02;

    let rate =
      showerFlow +
      rainShowerFlow +
      bathtubFlow +
      bathroomSinkFlow +
      kitchenSinkFlow;

    let totalFowRate = rate * 0.8;

    setQuoteInfo({ ...quoteInfo, flowRate: +totalFowRate.toFixed(2) });
  };

  return (
    <motion.div
       transition={{duration: 0.3}}
        key="outlets"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
    className="max-w-6xl mx-auto my-16">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Warm water outlets
      </h1>

      <p className="py-3 text-center">
        How many of these warm water outlets do you have in your house?
      </p>

      <div className="py-8 max-w-3xl mx-auto flex flex-col items-center md:flex-row md:justify-between justify-center md:flex-wrap gap-y-8">
        <div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img className="h-16 w-16" alt="" src="/images/icons/shower.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            Standard shower
          </p>
          <div className="flex flex-row justify-between items-center h-10 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.standardShower === 0}
              onClick={decrementStandardShower}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, standardShower: e.target.value })
              }
              value={quoteInfo.standardShower}
              className="focus:outline-none text-center w-full hidden  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default items-center text-gray-700  outline-none"
              name="custom-input-number"
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.standardShower}
            </p>
            <button
              data-action="increment"
              onClick={incrementStandardShower}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img
            className="h-16 w-16"
            alt=""
            src="/images/icons/rainshower.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Rain shower
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.rainShower === 0}
              onClick={decrementRainShower}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, rainShower: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default items-center text-gray-700 hidden  outline-none"
              name="custom-input-number"
              value={quoteInfo.rainShower}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.rainShower}
            </p>
            <button
              data-action="increment"
              onClick={incrementRainShower}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img className="h-16 w-16" alt="" src="/images/icons/bath.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Bathtubs</p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.bathtub === 0}
              onClick={decrementBathtub}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, bathtub: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default hidden items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.bathtub}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.bathtub}
            </p>
            <button
              data-action="increment"
              onClick={incrementBathtub}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img className="h-16 w-16" alt="" src="/images/icons/sink.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            Kitchen sinks
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.kitchenSink === 0}
              onClick={decrementKitchenSink}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, kitchenSink: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default hidden items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.kitchenSink}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.kitchenSink}
            </p>
            <button
              data-action="increment"
              onClick={incrementKitchenSink}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="relative h-[200px] w-[230px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img className="h-16 w-16" alt="" src="/images/icons/sink.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            Bathroom sinks
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.bathroomSink === 0}
              onClick={decrementBathroomSink}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, bathroomSink: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default hidden items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.bathroomSink}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.bathroomSink}
            </p>
            <button
              data-action="increment"
              onClick={incrementBathroomSink}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
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
            className="h-16 w-16"
            alt=""
            src="/images/icons/washingmachine.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Washing Machine (hotfill*)
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.washingmachine === 0}
              onClick={decrementWashingMachine}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, washingmachine: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default hidden items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.washingmachine}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.washingmachine}
            </p>
            <button
              data-action="increment"
              onClick={incrementWashingMachine}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
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
            className="h-16 w-16"
            alt=""
            src="/images/icons/dishwasher.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Dishwasher (hotfill*)
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.dishwasher === 0}
              onClick={decrementDishwasher}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, dishwasher: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default hidden items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.dishwasher}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.dishwasher}
            </p>
            <button
              data-action="increment"
              onClick={incrementDishwasher}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
         *
         * **/}
      </div>

      <div className="flex items-center justify-center space-x-6 my-3">
        {quoteInfo.standardShower !== 0 ||
        quoteInfo.rainShower !== 0 ||
        // quoteInfo.sink !== 0 ||
        quoteInfo.bathtub !== 0 ? (
          <Fragment>
            {' '}
            <svg
              onClick={prevPage}
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
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
              onClick={() => {
                calculateFlowRate();
                nextPage();
              }}
              className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
            >
              Continue
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <svg
              onClick={prevPage}
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
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
            <p className="text-md text-sky-600 font-bold text-center">
              Please answer the question
            </p>
          </Fragment>
        )}
      </div>
    </motion.div>
  );
};

export default WaterOutlets;
