import { antonio } from "@/fonts";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Card } from "@tremor/react";

const CitySection = ({city}:{city:string}) => {
  return (
    <section>
      <div className="container max-w-7xl mx-auto py-12">
        <h2
          className={cn(
            "text-xl md:text-2xl text-slate-700",
            antonio.className
          )}
        >
          Welcome to Hotwater24 – Your Destination for Top-tier Gas Geyser
          Services in {city}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <Card className="bg-red-600 text-white border border-none rounded-md">
            <CardHeader>
              <CardTitle>
                Reliability, efficiency, and utmost safety in {city}!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Is your gas geyser misbehaving? Could be a leak, or perhaps not
                heating water as it should? Whether it's a brand-new
                installation you're looking into, a critical repair, or regular
                maintenance to keep things running smoothly, Hotwater24
                is the go-to provider for all your gas geyser problems in {city}.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-red-600 text-white border border-none rounded-md">
            <CardHeader>
              <CardTitle>
                Professional and Expert Gas Geyser Services in {city}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                With our rich experience in the industry and a crew of fully
                licensed professionals, we can confidently handle all manner of
                gas geyser issues here at {city}. We are renowned for our
                precise installations and our repairs, all carried out to the
                highest standards.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-red-600 text-white border border-none rounded-md">
            <CardHeader>
              <CardTitle>
                Prompt Gas Geyser Installations for {city}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                At Hotwater24, we specialize in offering efficient gas
                geyser installation services to homes and businesses across
                {city}. Beyond giving you first-class installations, we
                incorporate a detailed check of your gas lines, ensure the
                correct positioning of the geyser for optimal performance, and
                carry out thorough testing post-installation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default CitySection;
