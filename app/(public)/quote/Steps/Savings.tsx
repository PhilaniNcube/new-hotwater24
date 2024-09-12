"use client"
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { LeadStageProps } from '../NewLead';
import Slider from '@/components/Slider/Slider';

const Savings = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }:LeadStageProps) => {
  console.log('Step', page, quoteInfo);


  return (
    <motion.div
       transition={{duration: 0.3}}
        key="savings"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
    className="max-w-6xl mx-auto my-16">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
      Savings on your electricity bill when switching to a gas geyser!
      </h1>

      <p className="py-3 px-4 text-center">
      Please indicate below your current monthly electricity bill (excluding fees and levies) to calculate your potential savings!
      </p>

        <div>
        <Slider setQuoteInfo={setQuoteInfo} quoteInfo={quoteInfo} />
        </div>
      <div className="flex items-center justify-center space-x-6 my-3">
        {quoteInfo.ownership !== null ? (
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

export default Savings;
