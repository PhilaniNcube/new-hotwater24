import Link from "next/link";
import { Button } from "../ui/button";
import { CarIcon, Clock2Icon, HelpCircle, PenLine, Shovel } from "lucide-react";
import { cn } from "@/lib/utils";
import { antonio } from "@/app/fonts";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/A3yDZKKQ16q
 */
export default function InstallationTimeline() {
  return (
    <div className="container py-4 overflow-auto relative isolate">
      <div className="relative flex flex-col justify-between my-4 space-x-8 lg:flex-row">
        <div className="relative z-50 flex flex-col w-2/3 mb-8 space-y-4 rounded sm:w-1/2 lg:w-1/5">
          <div className="bg-red-600 p-3 rounded-full w-fit ">
            <HelpCircle className="h-20 w-20  text-white" />
          </div>
          <div className="px-3 py-2 space-y-4">
            <div className="text-sm tracking-wider text-gray-600">Step 1</div>
            <h3
              className={cn(
                "text-lg font-medium tracking-wider lg:text-xl",
                antonio.className
              )}
            >
              Request quote
            </h3>
            <div className="text-gray-500">
              Provide us with detailed information about your property and we
              can generate a quick provisional quote for you.
            </div>
          </div>
        </div>
        <div className="relative z-50 flex flex-col w-2/3 mb-8 space-y-4 rounded sm:w-1/2 lg:w-1/5">
          <div className="bg-red-600 p-3 rounded-full w-fit ">
            <CarIcon className="h-20 w-20  text-white" />
          </div>
          <div className="px-3 py-2 space-y-4">
            <div className="text-sm tracking-wider text-gray-600">Step 2</div>
            <div
              className={cn(
                "text-lg font-medium tracking-wider lg:text-xl",
                antonio.className
              )}
            >
              Site visit
            </div>
            <div className="text-gray-500">
              We will send a qualified technician to your property to assess the
              installation requirements and provide a final quote.
            </div>
          </div>
        </div>
        <div className="relative z-50 flex flex-col w-2/3 mb-8 space-y-4 rounded sm:w-1/2 lg:w-1/5">
          <div className="bg-red-600 p-3 rounded-full w-fit ">
            <PenLine className="h-20 w-20  text-white" />
          </div>
          <div className="px-3 py-2 space-y-4">
            <div className="text-sm tracking-wider text-gray-600">Step 3</div>
            <div
              className={cn(
                "text-lg font-medium tracking-wider lg:text-xl",
                antonio.className
              )}
            >
              Final quote sign off
            </div>
            <div className="text-gray-500">
              After receiving the final quote you can sign off and we can
              schedule the installation.
            </div>
          </div>
        </div>
        <div className="relative z-50 flex flex-col w-2/3 mb-8 space-y-4 rounded sm:w-1/2 lg:w-1/5">
          <div className="bg-red-600 p-3 rounded-full w-fit ">
            <Shovel className="h-20 w-20  text-white" />
          </div>
          <div className="px-3 py-2 space-y-4">
            <div className="text-sm tracking-wider text-gray-600">Step 4</div>
            <div
              className={cn(
                "text-lg font-medium tracking-wider lg:text-xl",
                antonio.className
              )}
            >
              Expert installation
            </div>
            <div className="text-gray-500">
              Our qualified technicians will install your gas geyser and provide
              a certificate of compliance.
            </div>
          </div>
        </div>
        <div className="relative z-50 flex flex-col w-2/3 mb-8 space-y-4 rounded sm:w-1/2 lg:w-1/5">
          <div className="bg-red-600 p-3 rounded-full w-fit ">
            <Clock2Icon className="h-20 w-20  text-white" />
          </div>
          <div className="px-3 py-2 space-y-4">
            <div className="text-sm tracking-wider text-gray-600">Step 5</div>
            <div
              className={cn(
                "text-lg font-medium tracking-wider lg:text-xl",
                antonio.className
              )}
            >
              Hot water 24/7
            </div>
            <div className="text-gray-500">
              Enjoy hot water on demand and never worry about cold showers due
              to load shedding again, and save money while doing it.
            </div>
          </div>
        </div>
      </div>

      <Link href="/quote/start" className="flex justify-center w-full">
        <Button
          className="mx-auto mt-3 text-center bg-red-600 rounded-full w-44"
          type="button"
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
}
