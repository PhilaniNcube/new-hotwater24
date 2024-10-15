"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import analytics from '../../utils/analytics';
import { supabase } from '../../utils/supabase';
import QuoteCard from '../Quote/QuoteCard';
import { motion } from 'framer-motion';

const Summary = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  const [loading, setLoading] = useState(false);

  console.log('Step', page, quoteInfo);

  const router = useRouter();

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
    source,
    borehole_water,
  } = quoteInfo;

  const queryClient = useQueryClient();

  const mutation = useMutation(() =>
    supabase.from("quotes").insert([
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
        comments:comments,
        source: source,
        borehole_water: borehole_water,
      },
    ])
  );

  const handleSubmit = async () => {
    setLoading(true);

    sendGTMEvent({ event: "generate_lead" });

    try {
      const quote = await mutation.mutateAsync();
      queryClient.setQueryData('quote', quote.data[0]);
      console.log('quote', quote);

      if (quote?.data[0]) {
        const mail = await fetch("/api/mail/leads", {
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
            borehole_water: borehole_water,
          }),
        });

        console.log(mail);

        if (quoteInfo.product_id) {
          setLoading(false);
          router.push(`/catalogue/${quoteInfo.product_id}`);
        } else {
          nextPage();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
       transition={{duration: 0.3}}
        key="summary"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
    className="max-w-6xl px-6 mx-auto my-16 lg:my-4 lg:px-0">
      <QuoteCard quote={quoteInfo} />

      <p className="my-4 text-sm font-bold text-center text-gray-600 md:text-lg lg:px-36">
        Please click on the button below to complete the process. You will
        instantly receive an e-mail with the information you provided and we
        will get in touch with you.
      </p>

      <div
        id="save"
        className="flex items-center justify-center mb-12 space-x-6"
      >
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
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
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="px-8 py-4 my-4 text-lg font-medium text-center text-white rounded-full shadow-md bg-sky-500 hover:bg-sky-600 md:text-xl shadow-sky-400 hover:shadow"
        >
          {loading ? 'Loading...' : 'Complete the process'}
        </button>
      </div>
    </motion.div>
  );
};

export default Summary;
