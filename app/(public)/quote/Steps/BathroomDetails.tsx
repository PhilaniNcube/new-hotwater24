"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { LeadStageProps } from "../NewLead";

const BathroomDetails = ({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
}: LeadStageProps) => {
  console.log("Step", page, quoteInfo);
  const [interaction, setInteraction] = useState(false);
  // Check if we can proceed to next page
  const canProceed =
    quoteInfo.bathrooms !== null && quoteInfo.electric_geysers !== null;

  // Removed automatic progression - users must manually click Continue

  const handleBathroomsChange = (value: number) => {
    setQuoteInfo({
      ...quoteInfo,
      bathrooms: value,
      // Reset cottage fields if bathrooms is 0
      ...(value === 0 && { cottage_bathrooms: null, cottageIncluded: null }),
    });
    setInteraction(true);
  };

  const handleCottageIncludedChange = (included: boolean) => {
    setQuoteInfo({
      ...quoteInfo,
      cottageIncluded: included,
      // Reset cottage_bathrooms if not included
      ...(included === false && { cottage_bathrooms: null }),
    });
    setInteraction(true);
  };

  const handleCottageBathroomsChange = (value: number) => {
    setQuoteInfo({ ...quoteInfo, cottage_bathrooms: value });
    setInteraction(true);
  };

  const handleElectricGeysersChange = (value: number) => {
    setQuoteInfo({ ...quoteInfo, electric_geysers: value });
    setInteraction(true);
  };

  const handleProceed = () => {
    if (canProceed) {
      nextPage();
    }
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-2xl mx-auto">
          {" "}
          {/* Progress indicator */}
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              Bathroom & Geyser Details
            </h1>
            <p className="text-lg text-gray-600">
              Help us understand your property's bathroom setup and current
              geyser situation
            </p>
          </motion.div>
          {/* Question 1: Number of bathrooms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 mb-6 bg-white shadow-lg rounded-2xl"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              How many bathrooms do you have at your property?
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
                <button
                  key={num}
                  onClick={() => handleBathroomsChange(num)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 font-semibold ${
                    quoteInfo.bathrooms === num
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-blue-300 text-gray-700"
                  }`}
                >
                  {num === 7 ? "7+" : num}
                </button>
              ))}
            </div>
          </motion.div>
          {/* Question 2: Cottage/Flatlet bathrooms (only show if bathrooms > 0) */}
          {quoteInfo.bathrooms !== null && quoteInfo.bathrooms > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 mb-6 bg-white shadow-lg rounded-2xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Does the number of bathrooms indicated include a
                cottage/flatlet?
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  onClick={() => handleCottageIncludedChange(true)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 font-semibold ${
                    quoteInfo.cottageIncluded === true
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-blue-300 text-gray-700"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleCottageIncludedChange(false)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 font-semibold ${
                    quoteInfo.cottageIncluded === false
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-blue-300 text-gray-700"
                  }`}
                >
                  No
                </button>
              </div>

              {/* Follow-up question if yes */}
              {quoteInfo.cottageIncluded === true && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pt-4 border-t"
                >
                  <h4 className="mb-3 text-lg font-medium text-gray-700">
                    How many bathrooms are in the cottage/flatlet?
                  </h4>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[0, 1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleCottageBathroomsChange(num)}
                        className={`p-3 rounded-xl border-2 transition-all duration-200 font-semibold ${
                          quoteInfo.cottage_bathrooms === num
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-blue-300 text-gray-700"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
          {/* Question 3: Electric geysers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 mb-6 bg-white shadow-lg rounded-2xl"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              How many electric geysers do you have?
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((num) => (
                <button
                  key={num}
                  onClick={() => handleElectricGeysersChange(num)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 font-semibold ${
                    quoteInfo.electric_geysers === num
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-blue-300 text-gray-700"
                  }`}
                >
                  {num === 7 ? "7+" : num}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <svg
            onClick={prevPage}
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-white bg-red-500 rounded-full shadow-lg shadow-red-500 hover:shadow-md hover:bg-red-600"
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
            onClick={handleProceed}
            disabled={!canProceed}
            className={`flex items-center px-8 py-3 rounded-full font-medium transition-all duration-200 ${
              canProceed
                ? "bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
                : "bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
            }`}
          >
            Continue
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BathroomDetails;
