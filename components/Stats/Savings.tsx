"use client"

import Link from "next/link";
import React, { useState } from "react";
import { start } from "../../utils/gtm";
import { cn } from "@/lib/utils";
import { antonio } from "@/app/fonts";

function Savings() {
  const [bill, setBill] = useState(100);

  let savings = bill * 0.25;

  let year = savings * 12;

  return (
    <div className="container py-4 mx-auto">
      <div className="pt-2 pb-8 bg-gray-100 xl:px-20 lg:px-20 md:px-12 sm:pb-0">
        <h1
          className={cn(
            "w-5/6 mx-auto text-2xl font-extrabold text-center text-gray-800 xl:text-3xl"
          ,antonio.className)}
        >
          Calculate Your Potential Savings From Switching To Gas
        </h1>
        <div className="max-w-6xl px-4 py-2 mx-auto my-4 rounded-md shadow-md bg-slate-50">
          <div className="relative px-4 pt-1">
            <label htmlFor="bill" className="text-xl text-gray-700">
              Monthly Electricity Bill :{" "}
              <span className="text-2xl font-bold text-red-600">R{bill}</span>
            </label>
            <input
              type="range"
              value={bill}
              onChange={(e) => setBill(parseInt(e.target.value))}
              className="w-full h-8 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
              min={100}
              step={50}
              max={20000}
              id="bill"
            />
          </div>
        </div>
        <p className="w-5/6 pt-5 pb-20 mx-auto text-xl text-center text-gray-600">
          You can save up to 25% on your monthly electricity bill by switching
          to a gas geyser system.
        </p>
      </div>

      <div className="flex-wrap justify-around w-full mx-auto -mt-16 bg-white rounded shadow-lg xl:flex xl:w-9/12 lg:flex md:flex">
        <div className="w-full py-4 bg-white xl:w-3/12 lg:w-3/12 md:w-3/12 ">
          <p className="text-lg text-center text-gray-500 lg:text-2xl">
            Monthly Saving*
          </p>
          <p className="pt-1 text-5xl font-bold text-center text-sky-700">
            R{savings.toFixed(2)}*
          </p>
        </div>
        <div className="w-full py-4 bg-white xl:w-3/12 lg:w-3/12 md:w-3/12 ">
          <p className="text-lg text-center text-gray-500 lg:text-2xl">
            Savings/Year*
          </p>
          <p className="pt-1 text-5xl font-bold text-center text-green-500">
            R{year.toFixed(2)}*
          </p>
        </div>
      </div>

      <div className="max-w-[500px] mt-6">
        <p className="text-[9px] text text-slate-700">
          *The calculator on this website produces mere estimates which are
          based on information provided and flactuating factors and may
          therefore not reflect the probable savings. The results and savings
          shown of the calculations are not a promise or guarantee of a
          customer’s savings. 
        </p>
      </div>

      <div className="flex items-center justify-center mt-4 mb-12">
        <Link href="/quote/start" passHref>
          <button
            onClick={start}
            className="flex items-center px-4 py-2 mt-4 mb-8 space-x-2 text-white bg-gray-800 rounded-full shadow-lg shadow-gray-600 hover:shadow-sm focus:focus-ring-sky-400 w-fit"
          >
            Choose your geyser
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 pl-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Savings;
