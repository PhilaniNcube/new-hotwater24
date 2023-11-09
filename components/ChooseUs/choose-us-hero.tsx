import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { BadgeDollarSign, CheckIcon, Clock10Icon, CogIcon, HomeIcon, LightbulbIcon, StarsIcon, ThumbsDown } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { antonio } from "@/app/fonts";

export default function ChooseUsHero() {
  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        {/* <div className="text-center mb-8">
          <h1
            className={cn(
              "text-3xl font-bold text-slate-800 tracking-tighter md:text-4xl lg:text-6xl",
              antonio.className
            )}
          >
            Why Choose Us
          </h1>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-red-600 text-white">
            <CardHeader>
              <Clock10Icon className="text-white" />
              <CardTitle className={antonio.className}>
                40+ years’ experience with gas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                With over 40 years of experience in the Dutch gas installation
                business, we understand your need, especially in a time when
                energy costs are rising (and almost becomes unaffordable), and
                load shedding becomes a daily part of our lives
              </p>
            </CardContent>
          </Card>
          <Card className="bg-red-600 text-white">
            <CardHeader>
              <LightbulbIcon className="text-white" />
              <CardTitle className={antonio.className}>
                Cleaner energy source
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We offer our clients a cleaner source of energy, namely gas. We
                do not only offer you a product that produces 45% less carbon
                dioxide than coal, but we also offer our expertise in
                recommending the best quality and safe product for your needs.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-red-600 text-white">
            <CardHeader>
              <CogIcon className="text-white" />
              <CardTitle className={antonio.className}>Full Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We offer a one-stop-service for your entire gas water heating
                solution through our platform of independent and certified
                installers to ensure reliable and safe installations every day
                including ongoing maintenance.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-red-600 text-white">
            <CardHeader>
              <HomeIcon className="text-white" />
              <CardTitle className={antonio.className}>
                Off-The-Grid Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We also offer total off-the-grid solutions! Combining solar and
                gas for your total off-the-grid solution is the least expensive
                solution that will take your property completely off the grid
                and independent from Eskom.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-red-600 text-white">
            <CardHeader>
              <StarsIcon className="text-white" />
              <CardTitle className={antonio.className}>
                Quality Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We have partnered with the leading Continuous Flow Hot Water gas
                geyser, Rinnai, offering a product warranty of 10 years for Heat
                Exchangers, 3-year warranty on gas section and gas related parts
                and 1 year warranty on electrical parts.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-red-600 text-white">
            <CardHeader>
              <BadgeDollarSign className="text-white" />
              <CardTitle className={antonio.className}>
                We Make It Affordable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We also offer a payment plan giving you the opportunity to pay
                your gas geyser installation off over a period of 3 months.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="my-6 flex flex-col md:flex-row items-center w-full  justify-center gap-6">
          <Link href="/savings">
            <Button className="rounded-full bg-blue-600 min-w-[190px]">
              Calculating savings
            </Button>
          </Link>
          <Link href="/packages">
            <Button className="rounded-full bg-red-600 min-w-[190px]">
              Choose your gas geyser
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
