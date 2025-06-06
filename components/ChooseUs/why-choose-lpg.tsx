import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { antonio } from "@/fonts";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ez7uSlNnnV8
 */
export default function ChooseLpg() {
  return (
    <section className="w-full py-6">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-2">
          <h2
            className={cn(
              "text-2xl text-slate-800 font-bold tracking-tighter sm:text-3xl lg:text-4xl",antonio.className
            )}
          >
            Why Choose LPG?
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            LPG is a very safe and reliable source of energy, that can be used
            for cooking and heating. LPG has many advantages, to name a few:
          </p>
          <div className="flex items-center space-x-4 mt-8">
            <h2 className="text-xl font-bold tracking-tighter text-slate-700">
              Efficient Energy
            </h2>
          </div>
          <p className="max-w-[900px] text-sm text-zinc-500 dark:text-zinc-400">
            It can be up to five times more efficient than traditional fuels,
            resulting in less energy wastage and better use of our planet’s
            resources.
          </p>
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tighter text-slate-700">
              Portable &amp; Accessible
            </h2>
          </div>
          <p className="max-w-[900px] text-sm text-zinc-500 dark:text-zinc-400">
            LPG is extremely versatile and portable. It can be transported using
            sea, rail or road transport. LPG can be accessible to everyone
            everywhere today without major infrastructure investment.
          </p>
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold tracking-tighter text-slate-700">
              Clean
            </h2>
          </div>
          <p className="max-w-[900px] text-sm text-zinc-500 dark:text-zinc-400">
            LPG is a clean burning fuel that is low carbon, emits virtually no
            black carbon and does not spill. Do you know that South Africa is
            amongst the most polluted countries in the world, this mainly due to
            the fact that electricity is still being generated through the use
            of coal. So it is time for us to act accordingly and reduce the CO2
            footprint!
          </p>
          <p className="max-w-[900px] text-sm text-zinc-500 dark:text-zinc-400">
            By clicking on the button below we instantly recommend you with the
            best gas water heating solution for your home
          </p>
          <div className="mt-4">
            <Link href="/quote/start">
              <Button
                type="button"
                className="rounded-full bg-red-600 text-white min-w-[150px]"
              >
                <span>Get a Quote</span>
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="space-y-8 xl:space-y-10">
          <img
            alt="Placeholder Image"
            height="500"
            src="/images/hot-shower.jpg"
            className="w-full object-cover h-full object-right"
            width="500"
          />
        </div>
      </div>
    </section>
  );
}
