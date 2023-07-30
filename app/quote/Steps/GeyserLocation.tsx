"use client";

/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { LeadStageProps } from "../NewLead";

const GeyserLocation = ({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
}:LeadStageProps) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  const [interaction, setInteraction] = useState(false);
  console.log("Step", page, quoteInfo);

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      key="location"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="max-w-6xl mx-auto my-16"
    >
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Geyser Location
      </h1>
      <div className="flex justify-center items-center">
        <p className="py-3 text-center pr-2">
          Can the geyser be installed on an outside wall of the building?
        </p>
        <div
          className="relative mt-20 md:mt-0"
          onMouseEnter={() => setTooltipStatus(1)}
          onMouseLeave={() => setTooltipStatus(0)}
        >
          <div className="mr-2 cursor-pointer">
            <svg
              aria-haspopup="true"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-info-circle text-sky-600"
              width={25}
              height={25}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentcolor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>
          {tooltipStatus == 1 && (
            <div
              role="tooltip"
              className="z-20 mt-4 -translate-x-[200px] md:-translate-x-[400px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded"
            >
              <p className="text-sm font-bold text-gray-800 pb-1 text-center">
                Geyser Dimensions
              </p>
              <p className="text-xs leading-4 text-gray-600 pb-3 text-center">
                Please take note of the overall dimensions of an average size
                geyser:
              </p>
              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="h-[200px] w-[200px] md:w-[300px] md:h-[300px]"
                    alt=""
                    src="/images/icons/geyser.svg"
                  />
                </div>
              </div>
            </div>
          )}{" "}
        </div>
      </div>

      <div className="py-8 max-w-6xl mx-auto flex flex-col items-center md:flex-row justify-center space-y-8 md:space-y-0 lg:space-x-6">
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => {
            setQuoteInfo({
              ...quoteInfo,
              locateOutside: true,
            });
            setInteraction(true);
          }}
        >
          {quoteInfo.locateOutside && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img className="h-16 w-16" alt="" src="/images/icons/check.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Yes</p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => {
            setQuoteInfo({
              ...quoteInfo,
              locateOutside: false,
            });
            setInteraction(true);
          }}
        >
          {quoteInfo.locateOutside === false && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img className="h-16 w-16" alt="" src="/images/icons/close.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">No</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 my-3">
        {quoteInfo.locateOutside !== null ? (
          <Fragment>
            {" "}
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
              onClick={nextPage}
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

export default GeyserLocation;
