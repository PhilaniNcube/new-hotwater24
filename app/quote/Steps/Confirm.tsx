"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { motion } from 'framer-motion';
import { LeadStageProps } from '../NewLead';

export default function Confirm({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
}: LeadStageProps) {
  console.log({ page });

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      key="confirm"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="max-w-6xl px-4 mx-auto"
    >
      <div className="flex flex-col items-stretch justify-between px-6 py-8 lg:flex-row lg:px-0 lg:py-20 2xl:mx-auto 2xl:container">
        <div className="relative z-30 lg:w-1/2">
          <div className="items-center justify-end hidden w-full bg-gray-100 lg:w-10/12 lg:h-full lg:flex">
            <div className="w-full lg:w-auto lg:-mr-32">
              <img
                src="/images/basin_square.jpg"
                alt="bathroom basin"
                className="relative z-30 w-full px-6 lg:pl-20 py-14"
              />
            </div>
          </div>
          <div className="absolute top-0 hidden w-full bg-gray-100 md:h-96 md:block lg:hidden"></div>
          <div className="w-full h-full lg:hidden">
            <img
              src="/images/basin_square.jpg"
              alt="bathroom basin"
              className="relative z-30 w-full py-5 lg:pl-20 md:px-6 md:py-14"
            />
          </div>
        </div>
        <div className="flex items-center p-8 bg-gray-100 lg:w-1/2 lg:ml-12 lg:p-14">
          <div>
            <h1 className="w-full text-4xl font-semibold text-gray-800 capitalize  md:w-8/12 lg:w-11/12 sm:text-5xl">
              THANK YOU {quoteInfo.firstName}!
            </h1>
            <p className="mt-5 text-base leading-normal text-gray-600  md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12">
              We have taken note of your interest for a gas geyser installation
              for your property. You have received an email with the summary of
              the information you entered. We will be contacting you within the
              next 48 hours and send you our proposal, which entails all the
              initial information you need (including an initial cost estimate).
            </p>
            <p className="mt-5 text-base leading-normal text-gray-600  md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12">
              If you did not receive the confirmation e-mail, please check your
              spam folder.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
