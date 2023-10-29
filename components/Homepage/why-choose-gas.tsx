/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zur8QVheWLO
 */
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Clock10, CogIcon, Globe2, HandIcon, HandMetal } from "lucide-react";

export default function WhyGoGas() {
  return (
    <section className="container">
      <div className="px-6 py-12 bg-white lg:px-0 dark:bg-gray-800">
        <div className="pb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Why go gas?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Save up to 25% on your monthly electricity bill!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center p-6 space-y-4">
              <Clock10 className="w-8 h-8 text-yellow-500" />
              <CardTitle>Instant Hot Water</CardTitle>
              <CardDescription>
                A gas geyser provides hot water on-demand without your family
                ever having to experience a cold shower.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 space-y-4">
              <HandIcon className="w-8 h-8 text-yellow-500" />
              <CardTitle>Safe To Operate</CardTitle>
              <CardDescription>
                Gas geysers are safe and easy to operate, even during
                loadshedding.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 space-y-4">
              <CogIcon className="w-8 h-8 text-yellow-500" />
              <CardTitle>Easy Maintenance</CardTitle>
              <CardDescription>
                The lifespan of a gas geyser is about 12 years and if properly
                maintained, there is little to no risk of your geyser bursting
                like with an electric geyser.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 space-y-4">
              <Globe2 className="w-8 h-8 text-yellow-500" />
              <CardTitle>Eco-Friendly</CardTitle>
              <CardDescription>
                Gas geysers are also more eco-friendly and will reduce your
                carbon footprint since water will only be heated when needed.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}