"use client"

import React, { FormEvent, useState } from "react";
import analytics from "../../utils/analytics";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

export default function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendGTMEvent({ event: "generate_lead", value: {
      location: "contact_page",
    } });

    const conatctMessage = await fetch("/api/mail/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const response = await conatctMessage.json();
    alert("Email sent");
    router.push("/");
  };

  return (
    <div>
      <div className="py-12 xl:container xl:mx-auto lg:py-0">
        <div className="flex flex-col items-center justify-center h-full mx-4 lg:flex-row items-strech">
          <div className="lg:w-full 2xl:w-3/5">
            <h1 className="w-11/12 text-3xl font-bold text-gray-800 lg:text-5xl">
              Get in touch
            </h1>
            <p className="mt-3 text-base leading-normal text-gray-600 lg:mt-4 md:w-8/12 2xl:w-7/12">
              Drop us a line and we will get back to you as soon as possible.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center w-full px-5 py-5 mt-2 lg:w-full 2xl:w-2/5 bg-gray-50 md:px-7 md:py-7 lg:py-12 lg:px-20 md:mt-6 lg:mt-0"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Send us a message
            </h2>
            <input
              className="p-4 mt-4 text-base text-gray-600 border border-gray-300 rounded-md md:mt-6 focus:outline-none focus:border-gray-700"
              type="text"
              aria-label="Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />
            <input
              className="p-4 mt-4 text-base text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-gray-700"
              type="email"
              aria-label="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              id="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Your message"
              placeholder="Message"
              className="w-full h-48 p-4 mt-4 text-base text-gray-600 border border-gray-300 rounded-md resize-none lg:h-36 xl:h-48 2xl:h-56 md:mt-6 focus:outline-none focus:border-gray-700"
            />
            <button
              type="submit"
              className="p-4 mt-4 text-base font-medium leading-4 text-white rounded-md bg-sky-700 hover:bg-sky-600 md:mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700"
            >
              Send
            </button>
            <p className="my-2 text-xs">
              By filling in this form you give us consent to email you – but you can unsubscribe at any
              time
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
