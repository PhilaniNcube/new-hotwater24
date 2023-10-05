"use client"

import React, { FormEvent, useState } from "react";
import analytics from "../../utils/analytics";
import { useRouter } from "next/navigation";

export default function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    analytics.track("generate_lead", {
      location: "contact_page",
    });

    const conatctMessage = await fetch(`/api/mail/contact`, {
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
      <div className="xl:container xl:mx-auto py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row justify-center items-center items-strech h-full mx-4">
          <div className="lg:w-full 2xl:w-3/5">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 w-11/12">
              Get in touch
            </h1>
            <p className="mt-3 lg:mt-4 text-base leading-normal text-gray-600 md:w-8/12 2xl:w-7/12">
              Drop us a line and we will get back to you as soon as possible.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-full 2xl:w-2/5 w-full bg-gray-50 flex flex-col justify-center px-5 py-5 md:px-7 md:py-7 lg:py-12 lg:px-20 mt-2 md:mt-6 lg:mt-0"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              Send us a message
            </h2>
            <input
              className="rounded-md border border-gray-300 mt-4 md:mt-6 p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700"
              type="text"
              aria-label="Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />
            <input
              className="rounded-md border border-gray-300 mt-4 p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700"
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
              className="w-full h-48 lg:h-36 xl:h-48 2xl:h-56 mt-4 md:mt-6 p-4 rounded-md border border-gray-300 resize-none text-base text-gray-600 focus:outline-none focus:border-gray-700"
            ></textarea>
            <button
              type="submit"
              className="bg-sky-700 hover:bg-sky-600 rounded-md mt-4 md:mt-5 leading-4 p-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
