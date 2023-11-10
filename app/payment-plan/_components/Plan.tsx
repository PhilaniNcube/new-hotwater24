import { Card, CardContent } from "@/components/ui/card";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dhu2at2ITVI
 */
export default function Plan() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            We believe every household deserves hot water 24/7 so we make it
            more affordable for you with our payment plan. Let’s look at how our
            payment plan works:
          </p>
          <div className="flex justify-center items-center">
            <Card className="p-4">
              <CardContent className="">
                {/***List the steps in a payment plan */}
                <ol className="text-md gap-2 flex flex-col items-start list-decimal text-slate-700 font-medium ">
                  <li>
                    We only require a 50% deposit upon approval of the quotation{" "}
                  </li>
                  <li>
                    After the installation is complete, the second payment of
                    20% is due
                  </li>
                  <li>
                    After 1 month of the installation date, the third payment of
                    15% is due
                  </li>
                  <li>
                    After 2 months of the installation date, the final 15%
                    payment is due
                  </li>
                  <li>
                    After receiving the full payment, we will the process and
                    issue the CoC.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
