"use client"

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
      className="max-w-6xl mx-auto px-4"
    >
      <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
        <div className="z-30 relative lg:w-1/2">
          <div className="hidden  bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
            <div className="w-full lg:w-auto lg:-mr-32">
              <img
                src="/images/basin_square.jpg"
                alt="bathroom basin"
                className="w-full relative z-30 lg:pl-20 px-6 py-14"
              />
            </div>
          </div>
          <div className="absolute top-0  bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
          <div className="w-full h-full lg:hidden">
            <img
              src="/images/basin_square.jpg"
              alt="bathroom basin"
              className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
            />
          </div>
        </div>
        <div className="bg-gray-100  lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
          <div>
            <h1 className=" md:w-8/12 lg:w-11/12 w-full sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
              THANK YOU {quoteInfo.firstName}!
            </h1>
            <p className=" md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
              We have taken note of your interest for a gas geyser installation
              for your property. You have received an email with the summary of
              the information you entered. We will be contacting you within the
              next 48hours and send you our proposal, which entails all the
              initial information you need (including an initial cost estimate).
            </p>
            <p className=" md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
              If you did not receive the confirmation e-mail, please check your
              spam folder.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
