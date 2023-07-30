"use client";

/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import React, { FormEvent, Fragment, useState } from "react";
import { motion } from "framer-motion";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { LeadStageProps } from "../NewLead";


const PersonalDetails = ({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
}: LeadStageProps) => {
  console.log("Step", page, quoteInfo);

  const supabase = createClientComponentClient<Database>();

  const [loading, setLoading] = useState(false);

  const {
    children,
    adults,
    teenagers,
    houseType,
    ownership,
    gasSupply,
    gasStove,
    gasWaterHeating,
    gasHeating,
    otherGasUse,
    locateOutside,
    gasGeyser,
    electricGeyser,
    solarGeyser,
    otherGeyser,
    standardShower,
    rainShower,
    bathtub,
    kitchenSink,
    bathroomSink,
    dishwasher,
    washingmachine,
    flowRate,
    offGrid,
    firstName,
    lastName,
    email,
    streetAddress,
    suburb,
    city,
    telephoneNumber,
    postalCode,
    completeSolution,
    product_id,
    installation,
    contactDay,
    contactTime,
    geyserPrice,
    monthlySavings,
    yearlySavings,
    geyserSize,
    installationCost,
    plumbingCost,
    comments,
    financing,
  } = quoteInfo;



  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // analytics.track("generate_lead");

    try {
      const quote = await supabase
        .from("quotes")
        .insert([
          {
            children,
            adults,
            teenagers,
            houseType: houseType,
            ownership: ownership,
            gasSupply: gasSupply,
            gasStove: gasStove,
            gasWaterHeating: gasWaterHeating,
            gasHeating: gasHeating,
            otherGasUse: otherGasUse,
            locateOutside: locateOutside,
            gasGeyser: gasGeyser,
            electricGeyser: electricGeyser,
            solarGeyser: solarGeyser,
            otherGeyser: otherGeyser,
            standardShower: standardShower,
            rainShower: rainShower,
            bathtub: bathtub,
            kitchenSink: kitchenSink,
            bathroomSink: bathroomSink,
            dishwasher: dishwasher,
            washingmachine: washingmachine,
            flowRate: flowRate,
            offGrid: offGrid,
            firstName: firstName,
            lastName: lastName,
            email: email,
            streetAddress: streetAddress,
            city: city,
            suburb: suburb,
            telephoneNumber: telephoneNumber,
            postalCode: postalCode,
            completeSolution: completeSolution,
            product_id: product_id || undefined,
            installation: installation,
            contactDay: contactDay,
            contactTime: contactTime,
            geyserPrice: geyserPrice,
            monthlySavings: monthlySavings,
            yearlySavings: yearlySavings,
            geyserSize: geyserSize ? geyserSize : 26,
            installationCost: installationCost,
            plumbingCost: plumbingCost ? plumbingCost : 5000,
            comments: comments,
            financing: financing,
          },
        ])
        .select("*")
        .single();

      console.log("quote", quote);

      if (quote) {
        const mail = await fetch(`/api/mail/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            houseType: houseType,
            ownership: ownership,
            gasSupply: gasSupply,
            gasStove: gasStove,
            gasWaterHeating: gasWaterHeating,
            gasHeating: gasHeating,
            otherGasUse: otherGasUse,
            locateOutside: locateOutside,
            gasGeyser: gasGeyser,
            electricGeyser: electricGeyser,
            solarGeyser: solarGeyser,
            otherGeyser: otherGeyser,
            standardShower: standardShower,
            rainShower: rainShower,
            bathtub: bathtub,
            kitchenSink: kitchenSink,
            bathroomSink: bathroomSink,
            dishwasher: dishwasher,
            washingmachine: washingmachine,
            flowRate: flowRate,
            offGrid: offGrid,
            firstName: firstName,
            lastName: lastName,
            email: email,
            streetAddress: streetAddress,
            suburb: suburb,
            city: city,
            telephoneNumber: telephoneNumber,
            postalCode: postalCode,
            completeSolution: completeSolution,
            product_id: product_id || null,
            installation: installation,
            contactDay: contactDay,
            contactTime: contactTime,
            geyserPrice: geyserPrice,
            monthlySavings: monthlySavings,
            yearlySavings: yearlySavings,
            geyserSize: geyserSize,
            installationCost: installationCost,
            plumbingCost: plumbingCost,
            comments: comments,
            financing: financing,
          }),
        });
      }

      setLoading(false);
      nextPage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.form
      transition={{ duration: 0.3 }}
      key="details"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto my-16 lg:my-8 px-6 lg:px-12"
    >
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Personal contact information
      </h1>

      <p className="py-1 text-center">
        Please fill in this form to complete the process so we can get in touch
        with you with the recommended solution for your home.
      </p>

      <div className="py-8 px-6 lg:px-16 max-w-5xl mx-auto shadow-lg rounded bg-gray-200 h-1/2 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="firstName">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.firstName}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col mt-3 md:mt-0 w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="lastName">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700"
              value={quoteInfo.lastName}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  lastName: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700"
              value={quoteInfo.email}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col mt-3 md:mt-0 w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="telephone">
              Telephone/Cellphone
            </label>
            <input
              type="tel"
              name="telephone"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.telephoneNumber}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  telephoneNumber: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="streetAddress">
              Street address
            </label>
            <input
              type="text"
              name="streetAddress"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.streetAddress}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  streetAddress: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="suburb">
              Suburb
            </label>
            <input
              type="text"
              name="suburb"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.suburb}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  suburb: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full">
            <label className="text-md font-bold" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.city}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  city: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-md font-bold" htmlFor="postalCode">
              Postal code
            </label>
            <input
              type="text"
              name="postalCode"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.postalCode}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  postalCode: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/****
         <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full">
            <label className="text-xs font-bold" htmlFor="contactDay">
              What day can we contact you?
            </label>
            <select
              type="text"
              name="contactDay"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.contactDay}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  contactDay: e.target.value,
                })
              }
            >
              <option value="" disabled>
                Select Day
              </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>

              <option value="Thursday">Thursday</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xs font-bold" htmlFor="contactTime">
              What time can we contact you?
            </label>
            <select
              type="text"
              name="contactTime"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.contactTime}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  contactTime: e.target.value,
                })
              }
            >
              <option value="">Select Time</option>
              <option value="9AM - 11AM">9AM - 11AM</option>
              <option value="11AM - 1PM">11AM - 1PM</option>
              <option value="2PM - 5PM">2PM - 5PM</option>
            </select>
          </div>
        </div>

        *** */}

        <div className="flex flex-col w-full">
          <label className="text-md font-bold" htmlFor="comments">
            Comments
          </label>
          <textarea
            rows={4}
            name="comments"
            className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
            value={quoteInfo.comments}
            onChange={(e) =>
              setQuoteInfo({
                ...quoteInfo,
                comments: e.target.value,
              })
            }
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-4 mb-12">
        <div className="flex items-center justify-center space-x-6 my-3">
          {quoteInfo.firstName !== "" ||
          quoteInfo.lastName !== "" ||
          quoteInfo.email !== "" ||
          quoteInfo.telephoneNumber !== "" ||
          quoteInfo.city !== "" ? (
            <Fragment>
              {" "}
              <svg
                onClick={prevPage}
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 bg-red-500 cursor-pointer text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
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
                disabled={loading}
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
              >
                {loading ? "Saving..." : "Continue"}
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <svg
                onClick={prevPage}
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 bg-red-500 text-white rounded-full cursor-pointer shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
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
    </motion.form>
  );
};

export default PersonalDetails;
