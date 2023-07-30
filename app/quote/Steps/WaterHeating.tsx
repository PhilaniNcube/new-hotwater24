"use client"
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Step7Modal from './Modals/Step7Modal';
import { motion } from 'framer-motion';
import { LeadStageProps } from '../NewLead';

const WaterHeating = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }:LeadStageProps) => {
  console.log('Step', page, quoteInfo);
  const [show, setShow] = useState(false);

  const setOtherGasGeyser = (type:string) => {
    setQuoteInfo({ ...quoteInfo, otherGeyser: type });
  };

  return (
    <motion.div
        key="heating"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
          transition={{ duration: 0.3}}
         className="max-w-6xl mx-auto my-16 relative">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Water heating
      </h1>

      {show && (
        <Step7Modal
          show={show}
          setShow={setShow}
          setOtherGasGeyser={setOtherGasGeyser}
          page={page}
          setQuoteInfo={setQuoteInfo}
          quoteInfo={quoteInfo}
        />
      )}

      <p className="py-3 text-center">
        How do you currently heat up your water? Multiple answers are possible.
      </p>

      <div className="py-8 max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => {
            setQuoteInfo({
              ...quoteInfo,
              electricGeyser: !quoteInfo.electricGeyser,
            });
          }}
        >
          {quoteInfo.electricGeyser === true && (
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
          <img
            className="h-16 w-16"
            alt=""
            src="/images/icons/electricity.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Electricity
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => {
            setQuoteInfo({
              ...quoteInfo,
              gasGeyser: !quoteInfo.gasGeyser,
            });
          }}
        >
          {quoteInfo.gasGeyser === true && (
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
          <img className="h-16 w-16" alt="" src="/images/icons/gas.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Gas</p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => {
            setQuoteInfo({
              ...quoteInfo,
              solarGeyser: !quoteInfo.solarGeyser,
            });
          }}
        >
          {quoteInfo.solarGeyser === true && (
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
          <img className="h-16 w-16" alt="" src="/images/icons/solar.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Solar</p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => setShow(true)}
        >
          {quoteInfo.otherGeyser !== null && (
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
          <img className="h-16 w-16" alt="" src="/images/icons/dots.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Other</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 my-3">
        {quoteInfo.electricGeyser !== null ||
        quoteInfo.gasGeyser !== null ||
        quoteInfo.solarGeyser !== null ||
        quoteInfo.otherGeyser !== null ? (
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

export default WaterHeating;
