"use client"

/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { LeadStageProps } from '../NewLead';

const OwnerStatus = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }:LeadStageProps) => {
  console.log('Step', page, quoteInfo);

  const [interaction, setInteraction] = useState(false);

  const homeOwnership = (type:boolean) => {
    setQuoteInfo({ ...quoteInfo, ownership: type });
    setInteraction(true);
  };

  return (
    <motion.div
      key="owner"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className="max-w-6xl mx-auto my-16"
    >
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Owner or renting?
      </h1>

      <p className="py-3 px-4 text-center">
        Please tell us if you are the owner of the property or are renting it.
      </p>

      <div className="py-8 max-w-6xl space-x-0 sm:space-x-6 mx-auto flex flex-col md:flex-row items-center space-y-16 md:space-y-0 justify-center lg:space-y-0 lg:space-x-6">
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeOwnership(false)}
        >
          {quoteInfo.ownership === false && (
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
          <img className="h-16 w-16" alt="" src="/images/icons/renting.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            I am renting
          </p>

          {quoteInfo.ownership === false && (
            <p className="text-xs absolute bottom-2 left-2 px-2 text-red-500 leading-3">
              Please be aware that you need permission from the property owner
              before you decide to install a gas geyser.
            </p>
          )}
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeOwnership(true)}
        >
          {quoteInfo.ownership && (
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
          <img className="h-16 w-16" alt="" src="/images/icons/key.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            I am the homeowner
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 my-3">
        {quoteInfo.ownership !== null ||
        quoteInfo.ownership !== false ||
        quoteInfo.ownership !== true ? (
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

export default OwnerStatus;
