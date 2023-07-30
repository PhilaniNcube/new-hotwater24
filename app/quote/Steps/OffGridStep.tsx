"use client";

/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { LeadStageProps } from "../NewLead";


const OffGridStep = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }:LeadStageProps) => {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto mt-4 mb-12">
      <h1 className="font-sans text-center font-bold text-gray-700 text-2xl">
        Total off-the-grid solution
      </h1>
      <div className="md:w-1/2 mx-auto flex justify-center">
        <img
          src="/images/OTG.svg"
          alt="off the grid"
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col max-w-3xl mx-auto text-gray-600 px-8 md:px-0 mt-4">
        <div className="">
          <p className="md:py-2 text-center text-xs">
            We also offer a total off-the-grid solution. Combining solar and gas
            for going total off-the-grid is the least expensive solution that
            will take your property completely off-the-grid and independent from
            Eskom.
          </p>
        </div>

        <div>
          <p className="py-3 md:py-0 font-bold text-center">
            Do you wish to receive extra information regarding a total
            off-the-grid solution?
          </p>
        </div>
      </div>

      <div className="py-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-16 md:space-y-0 justify-center lg:space-y-0 lg:space-x-6">
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => {
            setQuoteInfo({
              ...quoteInfo,
              completeSolution: true,
            });
          }}
        >
          {quoteInfo.completeSolution && (
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
              completeSolution: false,
            });
          }}
        >
          {quoteInfo.completeSolution === false && (
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
        {quoteInfo.completeSolution !== null ? (
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
    </div>
  );
};

export default OffGridStep;
