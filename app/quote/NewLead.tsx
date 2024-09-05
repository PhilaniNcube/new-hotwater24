"use client";
import React, { Fragment, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Confirm from "./Steps/Confirm";
import Recommendations from "./Steps/Recommendations";
import PersonalDetails from "./Steps/PersonalDetails";
import Family from "./Steps/Step1";
import PropertyType from "./Steps/PropertyType";
import OwnerStatus from "./Steps/OwnerStatus";
import GasSupply from "./Steps/GasSupply";
import GasUse from "./Steps/GasUse";
import WaterHeating from "./Steps/WaterHeating";
import WaterOutlets from "./Steps/WaterOutlests";
import OffGridStep from "./Steps/OffGridStep";
import analytics from "@/utils/analytics";
import type { Geyser } from "@/sanity/types";
import { sendGTMEvent } from "@next/third-parties/google";

export type LeadStageProps = {
  quoteInfo: {
    children: number;
    teenagers: number;
    adults: number;
    houseType: string;
    ownership: boolean;
    gasSupply: string;
    gasStove: boolean;
    gasWaterHeating: boolean;
    gasHeating: boolean;
    otherGasUse: string;
    locateOutside: boolean;
    electricGeyser: boolean;
    gasGeyser: boolean;
    solarGeyser: boolean;
    otherGeyser: string;
    standardShower: number;
    rainShower: number;
    bathtub: number;
    bathroomSink: number;
    kitchenSink: number;
    dishwasher: number;
    washingmachine: number;
    flowRate: number;
    offGrid: boolean;
    firstName: string;
    lastName: string;
    email: string;
    streetAddress: string;
    suburb: string;
    city: string;
    telephoneNumber: string;
    postalCode: string;
    completeSolution: boolean | null;
    product_id: string | undefined;
    installation: string;
    contactDay: string;
    contactTime: string;
    financing: string;
    geyserPrice: number;
    monthlySavings: number;
    yearlySavings: number;
    geyserSize: number | null;
    installationCost: number;
    plumbingCost: number | null;
    comments: string;
    source: string | null;
  };
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  setQuoteInfo: (quoteInfo: any) => void;
  setPage?: (page: number) => void;
};

const NewLead = ({ geysers }: { geysers: Geyser[] }) => {
  const searchParams = useSearchParams();
  const [source, setSource] = useState<null | string>(null);
  const [page, setPage] = useState(1);

  //write a useEffect function to set the document.refferer value to the source value in the quoteInfo object


  const [quoteInfo, setQuoteInfo] = useState({
    children: 0,
    teenagers: 0,
    adults: 0,
    houseType: "",
    ownership: true,
    gasSupply: "",
    gasStove: false,
    gasWaterHeating: true,
    gasHeating: false,
    otherGasUse: "",
    locateOutside: false,
    electricGeyser: false,
    gasGeyser: false,
    solarGeyser: false,
    otherGeyser: "",
    standardShower: 0,
    rainShower: 0,
    bathtub: 0,
    bathroomSink: 0,
    kitchenSink: 0,
    dishwasher: 0,
    washingmachine: 0,
    flowRate: 0,
    offGrid: false,
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    suburb: "",
    city: "",
    telephoneNumber: "",
    postalCode: "",
    completeSolution: null,
    product_id: undefined,
    installation: "",
    contactDay: "",
    contactTime: "",
    financing: "",
    geyserPrice: 0,
    monthlySavings: 200,
    yearlySavings: 2400,
    geyserSize: null,
    installationCost: 0,
    plumbingCost: null,
    comments: "",
    source: source,
  });

    useEffect(() => {
      console.log("source", document.referrer);
      if(quoteInfo.source === null) {
        setQuoteInfo({...quoteInfo, source: document.referrer});
      }
    }, []);


  const nextPage = () => {
    if (page === 13) return;

    sendGTMEvent({ event: `step_${page}` });
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  return (
    <div className="h-full">
      {" "}
      <div className="relative h-full">
        {page === 1 && (
          <Family
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            source={source}
          />
        )}
        {page === 2 && (
          <PropertyType
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}
        {page === 3 && (
          <OwnerStatus
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}
        {page === 4 && (
          <GasSupply
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}
        {page === 5 && (
          <GasUse
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}
        {page === 6 && (
          <WaterHeating
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}

        {page === 7 && (
          <WaterOutlets
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}

        {page === 8 && (
          <OffGridStep
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}
        {page === 9 && (
          <Recommendations
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            geysers={geysers}
          />
        )}

        {page === 10 && (
          <PersonalDetails
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            setPage={setPage}
            page={page}
          />
        )}

        {/*page === 10 && (
        <Summary
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )*/}
        {page === 11 && (
          <Confirm
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}
      </div>
    </div>
  );
};
export default NewLead;
