"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useMeasure from "react-use-measure";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import formatter from "@/lib/format";
import roundUp, { roundUpThousand } from "@/lib/roundUp";
import { motion } from "framer-motion";
import { ShieldQuestionIcon } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Recommendations = ({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
}) => {
  const [ref, { height, width }] = useMeasure();
  console.log("Step 8", quoteInfo);

  const [geyserPrice, setGeyserPrice] = useState();
  const [geyserSize, setGeyserSize] = useState();
  const [installation, setInstallation] = useState();
  const [plumbing, setPlumbing] = useState();

  const labels = ["Total Cost"];

  useEffect(() => {
    if (quoteInfo.flowRate <= 9) {
      setGeyserPrice(4500);
      setInstallation(5500);
      setPlumbing(3750);
      setGeyserSize(8);
    } else if (quoteInfo.flowRate <= 12) {
      setGeyserPrice(7200);
      setInstallation(5500);
      setPlumbing(3750);
      setGeyserSize(12);
    } else if (quoteInfo.flowRate <= 18) {
      setGeyserPrice(8700);
      setInstallation(5850);
      setPlumbing(3750);
      setGeyserSize(16);
    } else if (quoteInfo.flowRate <= 23) {
      setGeyserPrice(12950);
      setInstallation(8050);
      setPlumbing(3950);
      setGeyserSize(20);
    } else if(quoteInfo.flowRate <= 45) {
      setGeyserPrice(14950);
      setInstallation(8050);
      setPlumbing(3950);
      setGeyserSize(26);
    }
  }, []);

  const data = {
    labels,

    datasets: [
      {
        label: "Gas geyser",
        data: [geyserPrice],
        backgroundColor: "#0ea5e9",
        barThickness: 100,
      },
      {
        label: "Gas installation",
        data: [installation],
        backgroundColor: "#ea580c",
        barThickness: 100,
      },
      {
        label: "Plumbing work",
        data: [plumbing],
        backgroundColor: "#c03d32",
        barThickness: 100,
      },
    ],
  };

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      key="property"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="mt-8 min-h-[90vh]"
    >
      {geyserSize <= 35 ? (
        <Fragment>
          {" "}
          <p className="text-center text-lg text-gray-700 mb-3 font-medium max-w-[60ch] mx-auto">
            Based on the information provided we have calculated the following
            size gas geyser for your property: <br />{" "}
            <span className="text-2xl font-bold">{geyserSize}L/Min</span>
          </p>
          <p className="text-center text-lg mb-6 text-gray-700  font-medium max-w-[60ch] mx-auto">
            The initial estimated total cost of the gas geyser installation is
            mentioned in the below picture:
            <br />{" "}
            <span className="text-2xl font-bold">
              {` ${formatter.format(geyserPrice + installation + plumbing)}`} *
            </span>{" "}
            <span className="text-xs underline">Incl VAT</span>
          </p>
          <div
            className="flex max-w-[700px] min-w-[200px] px-6 min-h-[600px] mx-auto items-center flex-col bg-gray-600 py-3 mb-8 relative"
            ref={ref}
          >
            <Bar
              style={{
                maxWidth: "500px",
                minHeight: "300px",
                maxHeight: "380px",
              }}
              options={{
                plugins: {
                  legend: {
                    position: "top",
                    align: "start",
                    labels: {
                      fontWeight: "bold",
                      borderRadius: 10,
                      boxPadding: 3,
                    },
                  },
                },
                locale: "ZA",
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
                    max: roundUpThousand(geyserPrice + installation + plumbing),
                  },
                },
              }}
              data={data}
            />
          </div>{" "}
          <div className="flex flex-col items-start max-w-2xl mx-auto">
            <p className="text-sm mb-2 text-gray-600 max-w-[700px] mx-auto font-medium">
              *This cost does not include the cost for a gas cage, gas
              cylinder(s) and gas refill. The initial estimated total cost is
              based on the information provided and includes the cost of the:
            </p>
            <ol className="text-sm list-decimal  text-gray-600 max-w-[700px] mx-auto">
              <li>
                Gas geyser (size of the gas geyser is calculated by the number
                of hot water outlets indicated)
              </li>
              <li>Gas installation</li>
              <li>Plumbing work</li>
            </ol>
          </div>
          <p className="text-lg font-bold mt-4 text-center text-gray-600 mx-auto">
            If you would like to consider financing, please do select the option
            below and we will take you further through the process.
          </p>
          {/*
              <p className="text-lg md:text-3xl font-bold mt-4 text-center text-gray-600 mx-auto">
            Would you consider financing?
          </p>
              */}
          <div className="max-w-7xl mx-auto mt-3 px-4 text-auto"></div>
          <div className="flex items-center justify-center space-x-6 mt-6 mb-8">
            {
              <Fragment>
                <svg
                  onClick={prevPage}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 bg-red-500 text-white cursor-pointer rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
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
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
                  <span
                    onClick={() => {
                      setQuoteInfo({
                        ...quoteInfo,
                        installation: "geyser only",
                        installationCost: installation,
                        plumbingCost: plumbing,
                        geyserPrice: geyserPrice,
                        geyserSize: geyserSize,
                        financing: "No FInancing",
                      });
                      nextPage();
                    }}
                    className="bg-sky-500 items-center flex justify-center hover:bg-sky-600 text-center text-white text-sm font-medium rounded-full py-4 px-8 shadow-sky-400 cursor-pointer shadow-md hover:shadow"
                  >
                    No Financing
                  </span>
                  <span
                    onClick={() => {
                      setQuoteInfo({
                        ...quoteInfo,
                        installation: "geyser only",
                        installationCost: installation,
                        plumbingCost: plumbing,
                        geyserPrice: geyserPrice,
                        geyserSize: geyserSize,
                        financing: "Part Financing",
                      });
                      nextPage();
                    }}
                    className="bg-sky-500 items-center flex justify-center hover:bg-sky-600 text-center text-white text-sm font-medium rounded-full py-4 px-8 shadow-sky-400 cursor-pointer shadow-md hover:shadow"
                  >
                    Yes, Partly Financed
                  </span>
                  <span
                    onClick={() => {
                      setQuoteInfo({
                        ...quoteInfo,
                        installation: "geyser only",
                        installationCost: installation,
                        plumbingCost: plumbing,
                        geyserPrice: geyserPrice,
                        geyserSize: geyserSize,
                        financing: "Full Financing",
                      });
                      nextPage();
                    }}
                    className="bg-sky-500 items-center flex justify-center hover:bg-sky-600 text-center text-white text-sm font-medium rounded-full py-4 px-8 shadow-sky-400 cursor-pointer shadow-md hover:shadow"
                  >
                    Yes, Full Financing
                  </span>
                </div>
              </Fragment>
            }
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-lg text-center text-gray-700 font-bold">
              Thank you for answering our questions! As the number of hot water
              outlets as indicated exceed the maximum capacity for a single gas
              geyser, we need to look at possibly subdividing the hot water
              supply for your property.
            </p>
            <div className="grid grid-cols-1 mt-4">
              {/**
           <div className="hidden w-full flex-col justify-center px-4">
                <p className="text-sm md:text-xl font-medium text-gray-600 my-3">
                  But no worries as we can find a solution for you.
                </p>
                <p className="text-sm md:text-xl font-medium text-gray-600">
                  What we simply need to do is looking at subdividing the hot
                  water supply for your property into 2 or more sections.
                </p>
              </div>
          **/}

              <div className="w-full ">
                <img
                  className="w-[300px] object-cover aspect-video mx-auto"
                  alt="bathroom"
                  src="/images/new_shower.jpg"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center mt-4">
            <p className="text-lg text-center text-gray-700 font-bold">
              However you might have to look at installing 2 gas geysers that
              will supply your property to gas for your warm water solution. By
              clicking "Yes please" below we will take you further through the
              process and we will send you our proposal based on 2 gas geysers.
              If you don't want to continue the process, please click "No
              thanks".
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0 mt-4">
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

              <span
                onClick={() => {
                  setQuoteInfo({
                    ...quoteInfo,
                    installation: "Inform me about water heating solution",
                    installationCost: installation,
                    plumbingCost: plumbing,
                    geyserPrice: geyserPrice,
                    geyserSize: geyserSize,
                  });
                  nextPage();
                }}
                className="flex bg-sky-500 items-center cursor-pointer rounded-full px-6 py-2 space-x-2 text-white text-base font-medium "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 top-2 right-2 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Yes please</p>
              </span>

              <span
                onClick={() => {
                  setQuoteInfo({
                    ...quoteInfo,
                    installation: "No thanks",
                    installationCost: installation,
                    plumbingCost: plumbing,
                    geyserPrice: geyserPrice,
                    geyserSize: geyserSize,
                  });
                  nextPage();
                }}
                className="flex items-center bg-red-500 cursor-pointer rounded-full px-6 py-2 space-x-2 text-white text-base font-medium "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>No thanks</p>
              </span>
            </div>
          </div>
        </Fragment>
      )}
    </motion.div>
  );
};

export default Recommendations;
