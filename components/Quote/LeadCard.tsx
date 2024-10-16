/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import formatter from '../../lib/format';
import roundUp from '../../lib/roundUp';
import { Check } from 'lucide-react';

type LeadCardProps = {
   quote: Database['public']['Tables']['quotes']['Row']
}

function LeadCard({ quote }:LeadCardProps) {
  return (
    <Fragment>
      <div className="w-full py-4 bg-gray-200">
        <div className="container flex items-start justify-center px-6 mx-auto">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col w-full mx-auto bg-white rounded shadow lg:flex-row">
              <div className="w-full p-6 lg:w-1/3">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded shadow">
                    <img
                      className="object-cover w-full h-full overflow-hidden rounded"
                      src="/images/avatar.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-base font-medium text-gray-800">
                      {quote.firstName} {quote.lastName}
                    </h5>
                    <p className="text-xs font-normal text-gray-600">
                      {quote.email}
                    </p>
                    <p className="text-xs font-normal text-gray-600">
                      {new Date(quote.created_at).toDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div>
                    <h2 className="text-sm font-bold tracking-normal text-gray-600 xl:text-lg">
                      Flow Rate: {quote.flowRate} L/Min
                    </h2>
                    <h2 className="text-sm font-bold tracking-normal text-gray-600 xl:text-lg">
                      {quote.flowRate <= 30 &&
                        `Geyser Size: ${quote.geyserSize} L/Min`}
                    </h2>

                    <h3 className="pb-3 text-lg font-bold text-gray-600 border-b border-gray-400">
                      {quote.flowRate <= 30 &&
                        quote.geyserPrice &&
                        ` Estimated Cost:
                      ${formatter.format(roundUp(quote.geyserPrice))}`}
                    </h3>
                    <h3 className="pb-3 text-lg font-bold text-gray-600 border-b border-gray-400">
                      {quote.financing === "" || quote.financing === "false"
                        ? "No Financing"
                        : quote.financing === "true"
                          ? "Yes, Full Financing"
                          : quote.financing}
                    </h3>
                    <h3 className="pb-3 text-lg font-bold text-gray-600 border-b border-gray-400">
                      Off Grid Solution:{" "}
                      {quote.completeSolution === null ||
                      quote.completeSolution === false
                        ? "No"
                        : "Yes"}
                    </h3>
                    {/***
                    <h3 className="mt-3 text-lg font-bold text-gray-600">
                      Monthly Savings: {formatter.format(quote.monthlySavings)}
                    </h3>
                    <h3 className="text-lg font-bold text-gray-600">
                      Yearly Savings: {formatter.format(quote.yearlySavings)}
                    </h3>

                  ***/}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-normal leading-3 tracking-normal text-gray-600">
                      Bathubs
                    </p>
                    <p className="text-xs font-normal leading-3 tracking-normal text-sky-700">
                      {quote.bathtub}
                    </p>
                  </div>

                  {/***
                     * ********************************
                     *   <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-normal leading-3 tracking-normal text-gray-600">
                      Dishwashers
                    </p>
                    <p className="text-xs font-normal leading-3 tracking-normal text-sky-700">
                      {quote.dishwasher}
                    </p>
                  </div>
                     *
                     */}

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-normal leading-3 tracking-normal text-gray-600">
                      Rain Showers
                    </p>
                    <p className="text-xs font-normal leading-3 tracking-normal text-sky-700">
                      {quote.rainShower}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-normal leading-3 tracking-normal text-gray-600">
                      Kitchen Sinks
                    </p>
                    <p className="text-xs font-normal leading-3 tracking-normal text-sky-700">
                      {quote.kitchenSink}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-normal leading-3 tracking-normal text-gray-600">
                      Bathroom Sinks
                    </p>
                    <p className="text-xs font-normal leading-3 tracking-normal text-sky-700">
                      {quote.bathroomSink}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-normal leading-3 tracking-normal text-gray-600">
                      Standard Showers
                    </p>
                    <p className="text-xs font-normal leading-3 tracking-normal text-sky-700">
                      {quote.standardShower}
                    </p>
                  </div>

                  {/****
                    *    <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-normal leading-3 tracking-normal text-gray-600">
                      Washing Machine
                    </p>
                    <p className="text-xs font-normal leading-3 tracking-normal text-sky-700">
                      {quote.washingmachine}
                    </p>
                  </div>
                    *
                    *
                    */}
                </div>
              </div>
              <div className="w-full p-6 border-t border-b border-gray-300 lg:w-1/3 lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r">
                <h3 className="mt-1 mb-1 text-lg font-bold text-gray-600">
                  Address:
                </h3>
                <p className="text-sm font-normal text-gray-600">
                  {`Street Address: ${quote.streetAddress}`}
                </p>
                <p className="text-sm font-normal text-gray-600">
                  {`Suburb: ${quote.suburb}`}
                </p>
                <p className="text-sm font-normal text-gray-600">
                  {`Postal Code: ${quote.postalCode}`}
                </p>
                <p className="text-sm font-normal text-gray-600">
                  {`City: ${quote.city}`}
                </p>
                <p className="text-sm font-normal text-gray-600">
                  {`Phone Number: ${quote.telephoneNumber}`}
                </p>
                <p className="text-sm font-normal text-gray-600">
                  {`Prefered Contact Method: ${quote.contactTime ? quote.contactTime : "N/A"}`}
                </p>

                <div className="relative p-4 mt-2 mb-2 bg-gray-100 rounded shadow">
                  <ul>
                    <li className="text-xs font-normal tracking-normal text-gray-600">
                      Home Ownership -{" "}
                      <span className="font-bold uppercase">
                        {quote.ownership ? "Owner" : "Renter"}
                      </span>
                    </li>
                    <li className="text-xs font-normal tracking-normal text-gray-600">
                      Property Type -{" "}
                      <span className="font-bold uppercase">
                        {quote.houseType}
                      </span>
                    </li>

                    <li className="text-xs font-normal tracking-normal text-gray-600">
                      Current Gas Supply -{" "}
                      <span className="font-bold uppercase">
                        {quote.gasSupply}
                      </span>
                    </li>
                    {/***
                    <li className="text-xs font-normal tracking-normal text-gray-600">
                      {quote.flowRate <= 30 ? (
                        <Fragment>
                          Quote Required -{" "}
                          <span className="font-bold uppercase">
                            {quote.installation}
                          </span>
                        </Fragment>
                      ) : (
                        <Fragment>
                          {" "}
                          Request Information -{` `}
                          <span className="font-bold uppercase">
                            {quote.installation}
                          </span>
                        </Fragment>
                      )}
                    </li>
                  */}
                  </ul>
                </div>

                <span className="flex px-4 py-1 mt-3 mb-2 space-x-8 text-sm font-medium text-gray-50 bg-sky-800">
                  {/***
                  <p>{`Contact Day: ${quote.contactDay}`}</p>
                  <p>{`Contact Time: ${quote.contactTime}`}</p>
              ****/}
                </span>
              </div>
              <div className="w-full px-6 py-8 lg:w-1/3">
                <h3 className="text-lg font-bold text-gray-600">
                  Household Size:
                </h3>

                <div className="flex items-center justify-between py-2 border-t-2">
                  <div>
                    <h2 className="leading-5 text-center text-gray-600">
                      Children
                    </h2>
                    <h2 className="mb-1 text-lg font-bold leading-6 text-center text-gray-600">
                      {quote.children}
                    </h2>
                  </div>
                  <div>
                    <h2 className="leading-5 text-center text-gray-600">
                      Teenagers
                    </h2>
                    <h2 className="mb-1 text-lg font-bold leading-6 text-center text-gray-600">
                      {quote.teenagers}
                    </h2>
                  </div>
                  <div>
                    <h2 className="leading-5 text-center text-gray-600">
                      Adults
                    </h2>
                    <h2 className="mb-1 text-lg font-bold leading-6 text-center text-gray-600">
                      {quote.adults}
                    </h2>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-600">
                  Intended Gas Use:
                </h3>
                <div className="flex items-center justify-between py-4 border-t-2 border-gray-200">
                  <div>
                    <h2 className="mb-1 font-medium leading-6 text-center text-gray-600">
                      Cooking
                    </h2>
                    <p className="text-sm leading-5 text-center text-gray-800">
                      {quote.gasStove ? (
                        <span className="text-lg text-white bg-green-700">
                          <Check className="text-lg text-white bg-green-700" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 font-medium leading-6 text-center text-gray-600">
                      Water
                    </h2>
                    <p className="text-sm leading-5 text-center text-gray-800">
                      {quote.gasWaterHeating ? (
                        <span className="text-lg text-white bg-green-700">
                          <Check className="text-lg text-white bg-green-700" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 font-medium leading-6 text-center text-gray-600">
                      Heating
                    </h2>
                    <div className="text-sm leading-5 text-center text-gray-800">
                      {quote.gasHeating ? (
                        <span className="text-lg text-white bg-green-700">
                          <Check className="text-lg text-white bg-green-700" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-600">
                  Current Geyser:
                </h3>
                <div className="flex items-center justify-between py-4 border-t-2 border-gray-200">
                  <div>
                    <h2 className="mb-1 font-medium leading-6 text-center text-gray-600">
                      Electric
                    </h2>
                    <p className="text-sm leading-5 text-center text-gray-800">
                      {quote.electricGeyser ? (
                        <span className="text-lg text-white bg-green-700">
                          <Check className="text-lg text-white bg-green-700" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 font-medium leading-6 text-center text-gray-600">
                      Solar
                    </h2>
                    <p className="text-sm leading-5 text-center text-gray-800">
                      {quote.solarGeyser ? (
                        <span className="text-lg text-white bg-green-700">
                          <Check className="text-lg text-white bg-green-700" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 font-medium leading-6 text-center text-gray-600">
                      Gas
                    </h2>
                    <p className="text-sm leading-5 text-center text-gray-800">
                      {quote.gasGeyser ? (
                        <span className="text-lg text-white bg-green-700">
                          <Check className="text-lg text-white bg-green-700" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 font-medium leading-6 text-center text-gray-600">
                      Other
                    </h2>
                    <p className="text-sm leading-5 text-center text-gray-800">
                      {quote.otherGeyser ? (
                        <span className="text-lg text-white bg-green-700">
                          <Check className="text-lg text-white bg-green-700" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="my-2">
                  <h3 className="text-lg font-bold text-gray-600">
                   Borehole Water:
                  </h3>
                  <p className="text-sm leading-5 text-center text-gray-800">
                    {quote.borehole_water ? (
                      <span className="text-lg text-white bg-green-700">
                        <Check className="text-lg text-white bg-green-700" />
                      </span>
                    ) : (
                      <span className="text-lg text-white bg-red-500">
                        <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                      </span>
                    )}
                  </p>
                </div>

                <h3 className="text-lg font-bold text-gray-600">Comments:</h3>
                <p className="text-xs text-gray-700">{quote.comments}</p>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default LeadCard;
