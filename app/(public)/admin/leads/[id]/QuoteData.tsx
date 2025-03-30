"use client"
/* eslint-disable @next/next/no-img-element */
import React, { type FormEvent, Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import LeadCard from "@/components/Quote/LeadCard";
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@/utils/supabase/client";

type LeadProps = {
  lead: Database['public']['Tables']['quotes']['Row'];
}

function QuoteData({ lead }:LeadProps) {

   const supabase = createClient()
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
    borehole_water
  } = lead;

  const [receipient, setReceipient] = useState("");
  const [secondary, setSecondary] = useState("");
  const [messages, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mail = await fetch("/api/mail/installers", {
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
            borehole_water: borehole_water,
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

      <div className="relative w-full py-10 bg-gray-200">
        <div className="flex flex-col max-w-6xl gap-8 px-6 mx-auto md:flex-row lg:px-0">
          <button
          type="button"
            onClick={() => {
              setShow(true);
            }}
            className="px-12 py-2 my-4 text-base font-medium text-white bg-red-600 rounded"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={createLink}
            className="px-12 py-2 my-4 text-base font-medium text-white rounded bg-brand"
          >
            Generate Payment Link
          </button>
        </div>

        <div className="container flex items-start justify-center px-6 mx-auto">
          {show && (
            <Alert
              confirm={confirm}
              setConfirm={setConfirm}
              show={show}
              setShow={setShow}
              deleteLead={deleteLead}
              lead={lead}
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
          className="px-6 py-4 mx-auto mt-4 bg-white rounded md:w-1/2"
          onSubmit={handleSubmit}
        >
          <p className="my-4 text-lg font-bold">
            Send message to the installer
          </p>
          <div className="flex flex-col ">
            <label
              htmlFor="receipient"
              className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
            >
              Email Address
            </label>
            <input
              id="receipient"
              required
              type="email"
              value={receipient}
              onChange={(e) => setReceipient(e.target.value)}
              className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow-smfocus:outline-none focus:border focus:border-indigo-700"
              placeholder="Primary Email Address"
            />

            <div className="flex flex-col mt-4">
              <label
                htmlFor="secondary"
                className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
              >
                CC:Email Address
              </label>
              <input
                id="secondary"
                type="email"
                value={secondary}
                onChange={(e) => setSecondary(e.target.value)}
                className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow-smfocus:outline-none focus:border focus:border-indigo-700"
                placeholder="Email Addresss"
              />
            </div>

            <div className="flex flex-col w-full mt-8 xl:w-3/5 lg:w-1/2 md:w-1/2">
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
                className="py-3 pl-3 text-sm text-gray-500 placeholder-gray-500 bg-transparent border border-gray-300 rounded shadow-xs resize-none focus:outline-none focus:border-indigo-700 "
                placeholder="Short Message"
                rows={5}
              />
            </div>
            <button
            type="submit"
              disabled={loading}
              className="py-2 mt-4 text-white rounded-md bg-sky-700"
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
    <div className="absolute py-5 top-16 left-4">
      {/* Code block starts */}
      <div className="flex items-center justify-center px-4 py-6">
        <div
          id="alert"
          className={
            show
              ? "transition duration-150 ease-in-out w-full lg:w-full mx-auto bg-white shadow-smpy-4 md:py-0 rounded flex flex-col items-center md:flex-row  justify-between "
              : "transition duration-150 ease-in-out w-full lg:w-full mx-auto bg-white py-4 md:py-0 shadow-smrounded flex flex-col items-center md:flex-row  justify-between translate-hide"
          }
        >
          <div className="flex flex-col items-center w-full md:flex-row">
            <div className="p-4 mr-3 text-white bg-red-400 rounded md:rounded-tr-none md:rounded-br-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={22}
                height={22}
                fill="currentColor"
              >
                <title>Alert</title>
                <path
                  className="heroicon-ui"
                  d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                />
              </svg>
            </div>
            <p className="mt-2 mr-2 text-base font-bold text-gray-800 dark:text-gray-100 md:my-0">
              Delete Warning
            </p>
            <div className="hidden w-1 h-1 mr-2 bg-gray-300 rounded-full dark:bg-gray-700 xl:block" />
            <p className="px-16 mb-2 text-sm text-center text-gray-600 lg:text-base dark:text-gray-400 lg:pt-1 xl:pt-0 sm:mb-0 sm:text-left">
              Are you sure you want to delete this record.
            </p>
          </div>
          <div className="flex justify-center pr-4 xl:items-center lg:items-center sm:justify-end ">
            <span
              onClick={() => deleteLead(lead.id)}
              onKeyDown={() => deleteLead(lead.id)}
              className="px-4 py-2 mr-12 text-sm font-bold text-gray-200 bg-red-500 rounded cursor-pointer "
            >
              Yes
            </span>
            <span
              className="px-4 py-2 text-sm text-gray-700 bg-gray-300 rounded shadow-smcursor-pointer "
              onClick={() => {
                setShow(false);
              }}
              onKeyDown={() => {
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
