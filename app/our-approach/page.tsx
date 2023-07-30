import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <div className="py-12 container">
        <div className="md:flex items-center justify-between">
          <div className="xl:w-6/12 md:w-1/2 xl:pr-8 md:pr-4">
            <h1
              role="heading"
              className="lg:text-5xl text-3xl font-bold leading-tight text-gray-800"
            >
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
                // onClick={savings}
                className="bg-gray-800 text-white flex space-x-2 py-2 px-4 shadow-gray-600 shadow-lg hover:shadow-sm focus:focus-ring-sky-400 items-center mt-4 rounded-full w-fit uppercase"
              >
                Calculate Your Saving!
                <span>
                 <ArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <div className="xl:w-2/5 md:w-1/2 w-full md:mt-0 mt-4">
            <Image
              width={1920}
              height={1280}
              src="/images/sink.jpg"
              alt="woman working"
              className="md:w-auto w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:mt-16 mt-8 gap-6 items-start justify-between">
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-800 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                1
              </div>
              <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                Off-The-Grid Solutions
              </h2>
            </div>
            <p className="sm:w-72 w-full text-sm mt-5 leading-5 text-gray-600">
              We also offer total off-the-grid solutions! Combining solar and
              gas for your total off-the-grid solution is the least expensive
              solution that will take your property completely off the grid and
              independent from Eskom.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-800 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                2
              </div>
              <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                Full Service
              </h2>
            </div>
            <p className="sm:w-72 w-full mt-5 leading-5 text-gray-600 text-sm">
              We can offer you the full service through our platform of
              independent and certified installers to ensure reliable and safe
              installations every day.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-800 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                3
              </div>
              <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                Financing
              </h2>
            </div>
            <p className="sm:w-72 w-full mt-5 leading-5 text-gray-600 text-sm">
              We have partnered with{" "}
              <span className="hover:underline text-sky-600">
                <Link href="https://mobicred.co.za" target="_blank">
                  Mobicred
                </Link>
              </span>{" "}
              in order to privide 12 months of financing for qualifiying
              clients. With Mobicred you will be able to pay for your gas geyser
              over 12 installments.
            </p>
          </div>
        </div>

        <div className="flex justify-center my-4">
          <Link href="/contact" passHref>
            <button className="bg-gray-800 text-white flex space-x-2 py-2 px-4 shadow-gray-600 shadow-lg hover:shadow-sm focus:focus-ring-sky-400 items-center mt-4 rounded-full w-fit uppercase">
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
