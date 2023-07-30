"use client"
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import { LeadStageProps } from '../NewLead';

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
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Size of household
      </h1>

      <p className="py-3 text-center">
        Please tell us how many children, teenagers and adults live in your
        household
      </p>

      <div className="flex items-center py-8  justify-around max-w-6xl mx-auto flex-wrap space-y-10 md:space-y-0">
        <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
          <img className="h-16 w-16" alt="" src="/images/icons/child.svg" />
          <p className="text-sm py-8">How many children?</p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.children === 0}
              onClick={decrementChildren}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, children: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default hidden items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.children}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.children}
            </p>
            <button
              data-action="increment"
              onClick={incrementChildren}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
          <img className="h-16 w-16" alt="" src="/images/icons/teen.svg" />
          <p className="text-sm py-8">How many teenagers?</p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.teenagers === 0}
              onClick={decrementTeenagers}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, teenagers: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default hidden items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.teenagers}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.teenagers}
            </p>
            <button
              data-action="increment"
              onClick={incrementTeenagers}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
          <img className="h-16 w-16" alt="" src="/images/icons/adult.svg" />
          <p className="text-sm py-8 text-center">How many adults?</p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.adults === 0}
              onClick={decrementAdults}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, adults: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default hidden items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.adults}
            ></input>
            <p className="h-10 w-10 flex justify-center items-center">
              {quoteInfo.adults}
            </p>
            <button
              data-action="increment"
              onClick={incrementAdults}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        {quoteInfo.adults !== 0 ||
        quoteInfo.children !== 0 ||
        quoteInfo.teenagers !== 0 ? (
          <button
            onClick={nextPage}
            className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
          >
            Continue
          </button>
        ) : (
          <Fragment>
            <p className="text-md text-sky-600 font-bold text-center">
              Please answer the question
            </p>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Family;
