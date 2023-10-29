/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zuxGuoPlVGF
 */
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function WhatAreYouWaitingFor() {
  return (
    <section className="w-full py-12">
      <div className="container flex flex-col items-center gap-4">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            What Are You Waiting For?
          </h2>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Link href="/savings">
            <Button
              className="px-8 py-2 text-lg font-medium transition-colors rounded-full shadow bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
              variant="default"
            >
              Calculate Your Saving
              <ArrowRightIcon className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}