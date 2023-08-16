/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ChooseWhite from "../ChooseWhite";

export default function Safe() {
  return (
    <div>
      <div className="container md:py-12 py-9">
        <div className="relative rounded-md">
          <img
            src="/images/installation.jpg"
            alt="Geyser Installation"
            className="w-full h-full rounded-md  object-right-top object-cover absolute sm:block hidden"
          />
          <img
            src="/images/geyser.jpeg"
            alt="geyser"
            className="w-full h-full rounded-md absolute object-right-top object-cover sm:hidden"
          />
          <div className="text-xl relative bg-gradient-to-r from-gray-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                Safe and reliable installation by accredited professionals
              </h1>
              <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                Safety comes first! We work with our network of independent
                installers. All installers are certified and registered with the
                LPGas Association of South Africa. For safety and quality
                purposes of the installation work performed every installation
                comes with a CoC (Certificate of Compliance) to guarantee your
                safety!
              </p>
            </div>

            <div>
              <img
                src="/images/lpgas.png"
                alt="logo"
                className="h-16 object-cover"
              />
            </div>

            <div className="md:mt-12 mt-20">
             <ChooseWhite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
