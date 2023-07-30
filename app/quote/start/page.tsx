import { ArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="container py-10">
      <div className="pt-4 w-full">
        <h1 className="font-sans text-2xl text-center font-semibold text-gray-800">
          Let us help you choose your gas geyser!
        </h1>

        <p className="text-lg text-center px-8 lg:px-60">
          Answer a few questions and we will instantly give you our expert
          recommendation for a suitable geyser for your home
        </p>

        <div className="flex flex-col md:flex-row items-center py-8 justify-between">
          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <img
              className="h-16 w-16"
              alt=""
              src="/images/icons/clipboard.svg"
            />
            <p className="text-sm py-8 text-center px-3">
              Answer a few questions
            </p>
          </div>
          <span className="rounded-full p-2 my-4 text-white bg-red-500 flex items-center justify-center">
            <ArrowRight className="rotate-90 lg:rotate-0" />
          </span>

          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <img
              className="h-16 w-16"
              alt=""
              src="/images/icons/document.svg"
            />
            <p className="text-sm py-8 text-center px-3">
              We analyze your answers
            </p>
          </div>

          <span className="rounded-full p-2 my-4 text-white bg-red-500 flex items-center justify-center">
            <ArrowRight className="rotate-90 lg:rotate-0" />
          </span>
          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <img
              className="h-16 w-16"
              alt=""
              src="/images/icons/recommendation.svg"
            />
            <p className="text-sm py-8 text-center px-3">Our Recommendation</p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <Link href="/quote" passHref>
            <button
              // onClick={start}
              className="bg-sky-500 hover:bg-sky-700 text-center text-white text-2xl font-medium rounded-full py-3 px-8 shadow-sky-400 shadow-md hover:shadow"
            >
              Let&#39;s get started!
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default page;
