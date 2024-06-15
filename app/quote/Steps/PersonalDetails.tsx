"use client";

/* eslint-disable @next/next/no-img-element */
import React, { type FormEvent, Fragment, useState } from "react";
import { motion } from "framer-motion";
import type { LeadStageProps } from "../NewLead";
import usePlacesAutocomplete from "use-places-autocomplete";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createBrowserClient } from "@supabase/ssr";
import { sendGTMEvent } from "@next/third-parties/google";

const libraries = ['places']


const PersonalDetails = ({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
}: LeadStageProps) => {
  console.log("Step", page, quoteInfo);

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  //   libraries: libraries,
  // });

  // console.log("isLoaded", isLoaded, loadError)

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "init",
    debounce: 200,
  });

  console.log({ ready, value, status, data });


    const supabase = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    );


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

  // const [open, setOpen] = useState(false);



  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);



    sendGTMEvent({ event: "generate_lead" });

    // if(quoteInfo.streetAddress === '') {

    //   setQuoteInfo({
    //     ...quoteInfo,
    //     streetAddress: data[0].description.split(",")[0],
    //     suburb: data[0].description.split(",")[1].trim(),
    //     city: data[0].description.split(",")[2].trim(),
    //   });

    // }

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
										financing: financing,
									}),
								});
      }

      const url = new URL("https://www.hotwater24.com/api/simvoly");


      const crmRes = await fetch(url, {
							method: "POST",

							headers: {
								"Content-Type": "application/json",
								"Access-Control-Allow-Origin": "*",
								"Access-Control-Allow-Headers": "*",
								"Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
								"Access-Control-Max-Age": "3600",
							},
							body: JSON.stringify({
								first_name: firstName,
								last_name: lastName,
								email: email,
								address: "",
								city: city,
								phone: telephoneNumber,
							}),
						});

      const result = await crmRes.json();
      console.log(result);

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
				className="max-w-6xl px-6 mx-auto my-16 lg:my-8 lg:px-12"
			>
				{/* <Script
        defer={true}
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=init`}
      ></Script> */}
				<h1 className="mt-8 font-sans text-2xl font-bold text-center">
					Personal contact information
				</h1>

				<p className="py-1 text-center">
					Please fill in this form to complete the process so we can get in
					touch with you with the recommended solution for your home.
				</p>

				<div className="max-w-5xl px-6 py-8 mx-auto mb-6 bg-gray-200 rounded shadow-lg lg:px-16 h-1/2">
					<div className="flex flex-col my-4 md:flex-row md:justify-between md:space-x-24">
						<div className="flex flex-col w-full md:w-1/2">
							<Label className="font-bold text-md" htmlFor="firstName">
								First name
							</Label>
							<Input
								type="text"
								name="firstName"
								required
								className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
								value={quoteInfo.firstName}
								onChange={(e) =>
									setQuoteInfo({
										...quoteInfo,
										firstName: e.target.value,
									})
								}
							/>
						</div>
						<div className="flex flex-col w-full mt-3 md:mt-0 md:w-1/2">
							<Label className="font-bold text-md" htmlFor="lastName">
								Surname
							</Label>
							<Input
								type="text"
								name="lastName"
								required
								className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700"
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
					<div className="flex flex-col my-4 md:flex-row md:justify-between md:space-x-24">
						<div className="flex flex-col w-full md:w-1/2">
							<Label className="font-bold text-md" htmlFor="email">
								Email
							</Label>
							<Input
								type="email"
								name="email"
								required
								className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700"
								value={quoteInfo.email}
								onChange={(e) =>
									setQuoteInfo({
										...quoteInfo,
										email: e.target.value,
									})
								}
							/>
						</div>
						<div className="flex flex-col w-full mt-3 md:mt-0 md:w-1/2">
							<Label className="font-bold text-md" htmlFor="phone">
								Telephone/Cellphone
							</Label>
							<div className="flex items-center space-x-2">
								<Input
									type="text"
									name="phone"
									required
									placeholder="+27811225467"
									className="py-2 pl-2 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
									value={telephoneNumber}
									onChange={(e) =>
										setQuoteInfo({
											...quoteInfo,
											telephoneNumber: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-col my-4 md:flex-row md:justify-between md:space-x-24">
						{/* <div className="flex flex-col w-full md:w-1/2">
            <Label className="font-bold text-md" htmlFor="streetAddress">
              Street address
            </Label>
            <Input
              type="text"
              name="streetAddress"
              required
              className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
              value={quoteInfo.streetAddress}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  streetAddress: e.target.value,
                })
              }
            />
          </div> */}
						{/* {ready ? (
            <div className="relative flex flex-col w-full md:w-1/2 isolate">
              <Label className="font-bold text-md">Street Address</Label>
              <Input
                value={value}
                autoComplete="off"
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
              />
              {status === "OK" &&
                data &&
                data.length > 0 &&
                data.map((prediction) => (
                  <div className="bg-white absolute bottom-0 translate-y-[25px] left-0 right-0 p-2 shadow-sm rounded border border-slate-200 overflow-clip">
                    <pre
                      onClick={() => {
                        setValue(prediction.description, false);
                        clearSuggestions();
                        setQuoteInfo({
                          ...quoteInfo,
                          streetAddress: prediction.description.split(",")[0],
                          suburb: prediction.description.split(",")[1],
                          city: prediction.description.split(",")[2],
                        });
                      }}
                      key={prediction.place_id}
                      className="text-xs cursor-pointer hover:bg-gray-100 line-clamp-2"
                    >
                      {prediction.description}
                    </pre>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex flex-col w-full md:w-1/2">
              <Label className="font-bold text-md" htmlFor="streetAddress">
                Street address
              </Label>
              <Input
                type="text"
                name="streetAddress"
                required
                className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
                value={quoteInfo.streetAddress}
                onChange={(e) =>
                  setQuoteInfo({
                    ...quoteInfo,
                    streetAddress: e.target.value,
                  })
                }
              />
            </div>
          )} */}
						{/* Places */}
						<div className="flex flex-col w-1/2">
							<Label className="font-bold text-md" htmlFor="suburb">
								Suburb
							</Label>
							<Input
								type="text"
								name="suburb"
								required
								className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
								value={quoteInfo.suburb}
								onChange={(e) =>
									setQuoteInfo({
										...quoteInfo,
										suburb: e.target.value,
									})
								}
							/>
						</div>{" "}
						<div className="flex flex-col w-1/2">
							<Label className="font-bold text-md" htmlFor="city">
								City
							</Label>
							<Input
								type="text"
								name="city"
								required
								className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
								value={quoteInfo.city}
								onChange={(e) =>
									setQuoteInfo({
										...quoteInfo,
										city: e.target.value,
									})
								}
							/>
						</div>
					</div>

					<div className="flex flex-col my-4 md:flex-row md:justify-between md:space-x-24">
						{/* <div className="flex flex-col w-full">
            <Label className="font-bold text-md" htmlFor="postalCode">
              Postal code
            </Label>
            <Input
              type="text"
              name="postalCode"
              required
              className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
              value={quoteInfo.postalCode}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  postalCode: e.target.value,
                })
              }
            />
          </div> */}
					</div>

					{/****
         <div className="flex flex-col my-4 md:flex-row md:justify-between md:space-x-24">
          <div className="flex flex-col w-full">
            <label className="text-xs font-bold" htmlFor="contactDay">
              What day can we contact you?
            </label>
            <select
              type="text"
              name="contactDay"
              required
              className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
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
              className="py-2 pl-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
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
						{/* <Label className="font-bold text-md" htmlFor="comments">
            Comments{" "}
            <span className="ml-2 text-xs">
              (please may you add any information/ questions/ remarks you would
              like to share with us in order to support your enquiry)
            </span>
          </Label> */}
						{/* <Textarea
            rows={4}
            name="comments"
            className="py-2 pl-4 text-base text-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-gray-700 "
            value={quoteInfo.comments}
            onChange={(e) =>
              setQuoteInfo({
                ...quoteInfo,
                comments: e.target.value,
              })
            }
          /> */}
						<p className="my-2 text-xs">
							By filling in this form you give us consent to email you – but you
							can unsubscribe at any time
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center mt-4 mb-12 space-x-6">
					<div className="flex items-center justify-center my-3 space-x-6">
						{quoteInfo.firstName !== "" ||
						quoteInfo.lastName !== "" ||
						quoteInfo.email !== "" ||
						quoteInfo.telephoneNumber !== "" ||
						quoteInfo.city !== "" ? (
							<Fragment>
								{" "}
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<svg
									onClick={prevPage}
									xmlns="http://www.w3.org/2000/svg"
									className="w-16 h-16 text-white bg-red-500 rounded-full shadow-lg cursor-pointer shadow-red-500 hover:shadow-md hover:bg-red-600"
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
								<Button
									disabled={loading}
									type="submit"
									className="px-8 py-4 text-2xl font-medium text-center text-white rounded-full shadow-md bg-sky-500 hover:bg-sky-600 shadow-sky-400 hover:shadow"
								>
									{loading ? "Saving..." : "Send me a proposal"}
								</Button>
							</Fragment>
						) : (
							<Fragment>
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<svg
									onClick={prevPage}
									xmlns="http://www.w3.org/2000/svg"
									className="w-16 h-16 text-white bg-red-500 rounded-full shadow-lg cursor-pointer shadow-red-500 hover:shadow-md hover:bg-red-600"
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
								<p className="font-bold text-center text-md text-sky-600">
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
