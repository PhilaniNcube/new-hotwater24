import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hotwater24 | Our Approach",
  description: "Get in touch with us for more information on gas geysers",
  keywords:
    "gas geyser installations, gas geyser installation prices, gas geyser installation near me, how does a gas geyser work, gas geyser installation cost, gas geyser installation cape town, gas geyser installation durbanville, gas geyser installation brackenfell, gas geyser installation bellville, gas geyser installation kraaifontein, gas geyser installation kuilsriver, gas geyser installation parow, gas geyser installation goodwood, gas geyser installation monte vista, gas geyser installation edgemead, gas geyser installation plattekloof, gas geyser installation panorama, gas geyser installation welgemoed, gas geyser installation tygervalley, gas geyser installation durbanville hills, gas geyser installation sonstraal heights, gas geyser installation sonstraal, how does a gas geyser work",
  openGraph: {
    title: "Hotwater24 | Our Approach",
    description: "Get in touch with us for more information on gas geysers",
  },
};

const page = () => {
  return (
    <main>
      <div className="container px-4 py-12 mx-auto max-w-7xl lg:px-0">
        <div className="items-center justify-between md:flex">
          <div className="xl:w-6/12 md:w-1/2 xl:pr-8 md:pr-4">
            <h1 className="text-3xl font-bold leading-tight text-gray-800 lg:text-5xl">
              Over 40 years of experience and knowledge
            </h1>
            <p
              role="contentinfo"
              className="mt-4 text-base leading-6 text-gray-600"
            >
              With over 40years of experience and knowledge in the Dutch gas
              installation business, we understand your need. Either when it is
              a need for comfort{" "}
              <span className="font-bold">
                {" "}
                (on demand hot water 24/7 for your family)
              </span>{" "}
              or a need out of necessity (tired of load shedding, cold water and
              high energy bills from Eskom) and want to become “off-the-grid”
              and independent from Eskom and save money on your monthly energy
              bill at the same time! Then heating up your water with a gas
              heating solution is the answer!
            </p>

            <Link href="/savings" passHref>
              <button
                type="button"
                // onClick={savings}
                className="flex items-center px-4 py-2 mt-4 space-x-2 text-white uppercase bg-gray-800 rounded-full shadow-lg shadow-gray-600 hover:shadow-xs focus:focus-ring-sky-400 w-fit"
              >
                Calculate Your Saving!
                <span>
                  <ArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <div className="w-full mt-4 xl:w-2/5 md:w-1/2 md:mt-0">
            <Image
              width={1920}
              height={1280}
              src="/images/sink.jpg"
              alt="woman working"
              className="w-full md:w-auto"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-6 mt-8 md:mt-16">
          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 text-base font-semibold leading-4 text-white bg-gray-800 rounded-full">
                1
              </div>
              <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                Off-The-Grid Solutions
              </h2>
            </div>
            <p className="w-full mt-5 text-sm leading-5 text-gray-600 sm:w-72">
              We also offer total off-the-grid solutions! Combining solar and
              gas for your total off-the-grid solution is the least expensive
              solution that will take your property completely off the grid and
              independent from Eskom.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 text-base font-semibold leading-4 text-white bg-gray-800 rounded-full">
                2
              </div>
              <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                Full Service
              </h2>
            </div>
            <p className="w-full mt-5 text-sm leading-5 text-gray-600 sm:w-72">
              We can offer you the full service through our platform of
              independent and certified installers to ensure reliable and safe
              installations every day.
            </p>
          </div>
          <div>
            <div className="flex items-center" />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link href="/contact" passHref>
            <button
              type="button"
              className="flex items-center px-4 py-2 mt-4 space-x-2 text-white uppercase bg-gray-800 rounded-full shadow-lg shadow-gray-600 hover:shadow-xs focus:focus-ring-sky-400 w-fit"
            >
              Get in touch
              <span>
                <ArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default page;
