import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative isolate min-h-[70vh]">
      <Image
        src="https://res.cloudinary.com/athenamedia-co-za/image/upload/c_scale,w_1925/v1690626251/shower-2_veafuz.webp"
        alt="background"
        // layout="fill"
        // objectFit="cover"
        width={1920}
        height={1280}
        quality={100}
        priority={true}
        className="z-[-1] w-full object-cover object-left md:object-center min-h-[50vh] md:min-h-[60vh]"
      />
      <div className="absolute inset-0">
        <div className="container flex flex-col space-y-3 justify-center aspect-video mx-auto bg-cover z-20 bg-center bg-no-repeat px-4 lg:px-16 py-12">
          <div className="max-w-xl ">
            <h1 className="text-2xl lg:text-4xl max-w-[60ch] font-sans font-bold mb-3 text-white">
              Get off-the-grid and switch to gas and save up to 20% on your
              electricity bill
            </h1>
          </div>
          <p className="text-md lg:text-xl mb-4 md:w-1/2 font-normal md:font-medium text-white">
            Act now and beat further discomfort from load shedding. Click on the
            link below answer a few questions and we will advise you on how to
            switch to gas
          </p>

          <Link href="/quote/start" passHref>
            <Button className="bg-gray-50 text-slate-800 flex justify-center items-center max-w-[280px] text-center font-bold py-2 text-xs md:text-md lg:text-base mt-6 rounded-full uppercase hover:bg-blue-600 hover:text-white">
              <span>Choose Your Gas Geyser</span>
              <span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
