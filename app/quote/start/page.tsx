import { antonio } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="container py-10">
      <div className="w-full pt-4">
        <h1
          className={cn(
            "text-2xl lg:text-4xl text-center font-semibold text-gray-800",
            antonio.className
          )}
        >
          Let us help you choose your gas geyser that is suitable for your home!
        </h1>

        <p className="px-8 text-lg text-center lg:px-60">
          Please answer the following questions (takes less than 2 minutes of
          your time) and we will send you our expert recommendation!
        </p>

        <div className="flex flex-col items-center justify-between py-8 md:flex-row">
          <div className="flex flex-col items-center justify-center w-64 h-64 rounded shadow-lg bg-gray-50 hover:bg-gray-100 hover:shadow">
            <img
              className="w-16 h-16"
              alt=""
              src="/images/icons/clipboard.svg"
            />
            <p className="px-3 py-8 text-sm text-center">
              Answer a few questions
            </p>
          </div>
          <span className="flex items-center justify-center p-2 my-4 text-white bg-red-500 rounded-full">
            <ArrowRight className="rotate-90 lg:rotate-0" />
          </span>

          <div className="flex flex-col items-center justify-center w-64 h-64 rounded shadow-lg bg-gray-50 hover:bg-gray-100 hover:shadow">
            <img
              className="w-16 h-16"
              alt=""
              src="/images/icons/document.svg"
            />
            <p className="px-3 py-8 text-sm text-center">
              We analyze your answers
            </p>
          </div>

          <span className="flex items-center justify-center p-2 my-4 text-white bg-red-500 rounded-full">
            <ArrowRight className="rotate-90 lg:rotate-0" />
          </span>
          <div className="flex flex-col items-center justify-center w-64 h-64 rounded shadow-lg bg-gray-50 hover:bg-gray-100 hover:shadow">
            <img
              className="w-16 h-16"
              alt=""
              src="/images/icons/recommendation.svg"
            />
            <p className="px-3 py-8 text-sm text-center">Our Recommendation</p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <Link href="/quote" passHref>
            <button
              // onClick={start}
              className="px-8 py-3 text-2xl font-medium text-center text-white rounded-full shadow-md bg-sky-500 hover:bg-sky-700 shadow-sky-400 hover:shadow"
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
