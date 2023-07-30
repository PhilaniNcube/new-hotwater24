"use client"
/* eslint-disable @next/next/no-img-element */
import React, { FormEvent, Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import LeadCard from "@/components/Quote/LeadCard";

type LeadProps = {
  lead: Database['public']['Tables']['quotes']['Row'];
}

function QuoteData({ lead }:LeadProps) {



  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const {
    children,
    teenagers,
    adults,
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
    city,
    telephoneNumber,
    suburb,
    postalCode,
    completeSolution,
    product_id,
    installation,
    contactTime,
    contactDay,
  } = lead;

  const [receipient, setReceipient] = useState("");
  const [secondary, setSecondary] = useState("");
  const [messages, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mail = await fetch(`/api/mail/installers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        children: children,
        teenagers: teenagers,
        adults: adults,
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
        installation: installation,
        messages: messages,
        receipient: receipient,
        secondary: secondary,
      }),
    });

    console.log(mail);

    if (mail.status === 200) {
      alert(`Email sent to ${receipient}`);
    }
  };

  const deleteLead = async (id:number) => {
    console.log("delete");
    const { data, error } = await supabase
      .from("quotes")
      .delete()
      .eq("id", id)
      .select("*");

    console.log({ data, error });
    router.refresh();
    router.push("/admin/leads");
  };

  const createLink = async () => {
    const { data, error } = await supabase
      .from("invoice")
      .insert([
        {
          first_name: lead.firstName,
          last_name: lead.lastName,
          email: lead.email,
        },
      ])
      .select("*")
      .single();

    if (error) {
      throw new Error(error.details);
    }

    router.push(`/admin/invoices/${data.id}`);
  };

  return (
    <Fragment>

      <div className="w-full bg-gray-200 py-10  relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 lg:px-0">
          <button
            onClick={() => {
              setShow(true);
            }}
            className="bg-red-600 px-12 py-2 rounded text-white my-4 text-base font-medium"
          >
            Delete
          </button>
          <button
            onClick={createLink}
            className="bg-blue-600 px-12 py-2 rounded text-white my-4 text-base font-medium"
          >
            Generate Payment Link
          </button>
        </div>

        <div className="container mx-auto px-6 flex items-start justify-center">
          {show && (
            <Alert
              confirm={confirm}
              setConfirm={setConfirm}
              show={show}
              setShow={setShow}
              deleteLead={deleteLead}
              lead={lead!}
            />
          )}

          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <LeadCard quote={lead} />

            {/* Card code block end */}
          </div>
        </div>

        <form
          className="md:w-1/2 mx-auto px-6 bg-white py-4 rounded mt-4"
          onSubmit={handleSubmit}
        >
          <p className="text-lg font-bold my-4">
            Send message to the installer
          </p>
          <div className="flex flex-col ">
            <label
              htmlFor="receipient"
              className="text-gray-800  text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Email Address
            </label>
            <input
              id="receipient"
              required
              type="email"
              value={receipient}
              onChange={(e) => setReceipient(e.target.value)}
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
              placeholder="Primary Email Address"
            />

            <div className="flex flex-col mt-4">
              <label
                htmlFor="secondary"
                className="text-gray-800  text-sm font-bold leading-tight tracking-normal mb-2"
              >
                CC:Email Address
              </label>
              <input
                id="secondary"
                type="email"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                placeholder="Email Addresss"
              />
            </div>

            <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
              <label
                htmlFor="message"
                className="pb-2 text-sm font-bold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={messages}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-transparent border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 "
                placeholder="Short Message"
                rows={5}
              />
            </div>
            <button
              disabled={loading}
              className="mt-4 bg-sky-700 text-white py-2 rounded-md"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
export default QuoteData;

type AlertProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  confirm: boolean;
  setConfirm: (confirm: boolean) => void;
  deleteLead: (id: number) => Promise<void>;
  lead: Database['public']['Tables']['quotes']['Row'];
}

const Alert = ({
  show,
  setShow,
  confirm,
  setConfirm,
  deleteLead,
  lead,
}: AlertProps) => {
  const router = useRouter();

  return (
    <div className="absolute top-16 left-4 py-5">
      {/* Code block starts */}
      <div className="flex items-center justify-center px-4 py-6">
        <div
          id="alert"
          className={
            show
              ? "transition duration-150 ease-in-out w-full lg:w-full mx-auto bg-white shadow py-4 md:py-0 rounded flex flex-col items-center md:flex-row  justify-between "
              : "transition duration-150 ease-in-out w-full lg:w-full mx-auto bg-white py-4 md:py-0 shadow rounded flex flex-col items-center md:flex-row  justify-between translate-hide"
          }
        >
          <div className="flex flex-col items-center md:flex-row w-full">
            <div className="mr-3 p-4 bg-red-400  rounded md:rounded-tr-none md:rounded-br-none text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={22}
                height={22}
                fill="currentColor"
              >
                <path
                  className="heroicon-ui"
                  d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                />
              </svg>
            </div>
            <p className="mr-2 text-base font-bold text-gray-800 dark:text-gray-100 mt-2 md:my-0">
              Delete Warning
            </p>
            <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
            <p className="text-sm lg:text-base dark:text-gray-400 text-gray-600 lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left px-16">
              Are you sure you want to delete this record.
            </p>
          </div>
          <div className="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4 ">
            <span
              onClick={() => deleteLead(lead.id)}
              className="text-sm mr-12 font-bold cursor-pointer text-gray-200 px-4 py-2 rounded bg-red-500 "
            >
              Yes
            </span>
            <span
              className="text-sm cursor-pointer bg-gray-300 shadow rounded px-4 py-2 text-gray-700 "
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </span>
          </div>
        </div>
      </div>

      {/* Code block ends */}

      <style>
        {`
                .translate-show{
                    transform : translateY(0%);
                }
                .translate-hide{
                    transform : translateY(18vh);
                }
                `}
      </style>
    </div>
  );
};
