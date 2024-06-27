"use client"
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import type { LeadStageProps } from '../NewLead';

const Family = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }:LeadStageProps) => {
  console.log('Step', page, quoteInfo);

  const [interaction, setInteraction] = useState(false);



  const decrementChildren = () => {
    setInteraction(true);
    console.log('Decrement');

    const qty = quoteInfo.children - 1;
    setQuoteInfo({ ...quoteInfo, children: qty });
  };

  const incrementChildren = () => {
    console.log('Increment');
    setInteraction(true);
    const qty = quoteInfo.children + 1;

    setQuoteInfo({ ...quoteInfo, children: qty });
  };

  const decrementTeenagers = () => {
    console.log('Decrement');
    setInteraction(true);
    const qty = quoteInfo.teenagers - 1;
    setQuoteInfo({ ...quoteInfo, teenagers: qty });
  };

  const incrementTeenagers = () => {
    console.log('Increment');
    setInteraction(true);
    const qty = quoteInfo.teenagers + 1;

    setQuoteInfo({ ...quoteInfo, teenagers: qty });
  };

  const decrementAdults = () => {
    console.log('Decrement');
    setInteraction(true);
    const qty = quoteInfo.adults - 1;
    setQuoteInfo({ ...quoteInfo, adults: qty });
  };

  const incrementAdults = () => {
    console.log('Increment');
    setInteraction(true);
    const qty = quoteInfo.adults + 1;

    setQuoteInfo({ ...quoteInfo, adults: qty });
  };

  return (
    <Fragment>
      <h1 className="mt-8 font-sans text-2xl font-bold text-center">
        Size of household
      </h1>

      <p className="py-3 text-center">
        Please tell us how many children, teenagers and adults live in your
        household
      </p>

      <div className="flex flex-wrap items-center justify-around max-w-6xl py-8 mx-auto space-y-10 md:space-y-0">
        <div className="flex flex-col items-center justify-center w-64 h-64 rounded shadow-lg bg-gray-50 hover:bg-gray-100 hover:shadow">
          <img className="w-16 h-16" alt="" src="/images/icons/child.svg" />
          <p className="py-8 text-sm">How many children?</p>
          <div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
            <button
              type="button"
              disabled={quoteInfo.children === 0}
              onClick={decrementChildren}
              data-action="decrement"
              className="w-20 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, children: e.target.value })
              }
              className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
              name="custom-input-number"
              value={quoteInfo.children}
            />
            <p className="flex items-center justify-center w-10 h-10">
              {quoteInfo.children}
            </p>
            <button
              type="button"
              data-action="increment"
              onClick={incrementChildren}
              className="w-20 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-64 h-64 rounded shadow-lg bg-gray-50 hover:bg-gray-100 hover:shadow">
          <img className="w-16 h-16" alt="" src="/images/icons/teen.svg" />
          <p className="py-8 text-sm">How many teenagers?</p>
          <div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
            <button
              type="button"
              disabled={quoteInfo.teenagers === 0}
              onClick={decrementTeenagers}
              data-action="decrement"
              className="w-20 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, teenagers: e.target.value })
              }
              className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
              name="custom-input-number"
              value={quoteInfo.teenagers}
            />
            <p className="flex items-center justify-center w-10 h-10">
              {quoteInfo.teenagers}
            </p>
            <button
            type="button"
              data-action="increment"
              onClick={incrementTeenagers}
              className="w-20 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-64 h-64 rounded shadow-lg bg-gray-50 hover:bg-gray-100 hover:shadow">
          <img className="w-16 h-16" alt="" src="/images/icons/adult.svg" />
          <p className="py-8 text-sm text-center">How many adults?</p>
          <div className="relative flex flex-row w-32 h-10 mt-1 bg-transparent rounded-lg">
            <button
              type="button"
              disabled={quoteInfo.adults === 0}
              onClick={decrementAdults}
              data-action="decrement"
              className="w-20 h-full text-gray-600 bg-transparent rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, adults: e.target.value })
              }
              className="items-center hidden w-full font-semibold text-center text-gray-700 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
              name="custom-input-number"
              value={quoteInfo.adults}
            />
            <p className="flex items-center justify-center w-10 h-10">
              {quoteInfo.adults}
            </p>
            <button
              type="button"
              data-action="increment"
              onClick={incrementAdults}
              className="w-20 h-full text-gray-600 bg-transparent rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        {quoteInfo.adults !== 0 ||
        quoteInfo.children !== 0 ||
        quoteInfo.teenagers !== 0 ? (
          <button
            type="button"
            onClick={nextPage}
            className="px-8 py-4 text-2xl font-medium text-center text-white rounded-full shadow-md bg-sky-500 hover:bg-sky-600 shadow-sky-400 hover:shadow"
          >
            Continue
          </button>
        ) : (
          <Fragment>
            <p className="font-bold text-center text-md text-sky-600">
              Please answer the question
            </p>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Family;
