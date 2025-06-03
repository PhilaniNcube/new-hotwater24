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

  useEffect(() => {
    if (interaction && canProceed) {
      const timer = setTimeout(() => {
        nextPage();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [interaction, canProceed, nextPage]);

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
    <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-2xl mx-auto">
          {" "}
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {page} of 13
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((page / 13) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(page / 13) * 100}%` }}
              />
            </div>
          </div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Bathroom & Geyser Details
            </h1>
            <p className="text-gray-600 text-lg">
              Help us understand your property's bathroom setup and current
              geyser situation
            </p>
          </motion.div>
          {/* Question 1: Number of bathrooms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How many bathrooms do you have at your property?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
              className="bg-white rounded-2xl shadow-lg p-6 mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
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
                  className="border-t pt-4"
                >
                  <h4 className="text-lg font-medium text-gray-700 mb-3">
                    How many bathrooms are in the cottage/flatlet?
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
            className="bg-white rounded-2xl shadow-lg p-6 mb-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How many electric geysers do you have?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
      <div className="bg-white border-t p-6">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <button
            onClick={prevPage}
            className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          <button
            onClick={handleProceed}
            disabled={!canProceed}
            className={`flex items-center px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
              canProceed
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
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
