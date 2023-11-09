import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { antonio } from "@/app/fonts";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OZMoLpdsAFn
 */
export default function SafeInstallations() {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-4">
          <h2
            className={cn(
              "text-2xl font-bold text-center md:text-3xl lg:text-4xl text-slate-800"
            , antonio.className)}
          >
            Safe & reliable installations
          </h2>
          <p className="text-lg text-center md:text-xl text-gray-600 dark:text-gray-400">
            Ensuring Safety and Quality with Certified LP Gas Installation
            Services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-slate-500">
          <div className="flex items-start space-x-2">
            <svg
              className=" w-6 h-6 text-green-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-md ">
              All our installers are certified and registered with the LPGas
              Association of South Africa for guaranteed safety.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <svg
              className=" w-6 h-6 text-green-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-md ">
              The installation work undergoes thorough checking for compliance
              with current rules and regulations.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <svg
              className=" w-6 h-6 text-green-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-md ">
              A Certificate of Compliance (CoC) is provided after every install,
              signed off between the installer and the client.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <svg
              className=" w-6 h-6 text-green-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-md ">
              Quick and straightforward process: simply click the button, answer
              some questions, and we'll provide you with a quote for a reliable
              installation service.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <svg
              className=" w-6 h-6 text-green-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-md ">
              The installation process will be organized and an installer will
              be assigned to your area for convenient service.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <svg
              className=" w-6 h-6 text-green-500"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-md ">
              For your long-term needs, consider a service & maintenance
              contract with us, ensuring high-quality maintenance and best
              service at a fixed monthly price.
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center flex-col gap-4">
          <Image
            src="/images/lpg.jpeg"
            width={295}
            height={171}
            alt="LPG"
            className="min-w-[180px]"
          />
          <Link href="/packages">
            <Button
              type="button"
              className="min-w-[180px] rounded-full bg-blue-600"
            >
              Choose your gas geyser
            </Button>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
