import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	CheckCircle,
	Droplet,
	Flame,
	Gauge,
	ShieldCheck,
	ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
	return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 bg-red-600 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Experience the Power of Bosch Gas Geysers
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Efficient, reliable, and cutting-edge water heating solutions
                  for your home
                </p>

                <Button className="font-bold tracking-tighter text-white rounded-full bg-brand">
                  From R4,250.00!
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 bg-gray-100 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Flame className="w-10 h-10 text-red-500" />}
                title="Instant Hot Water"
                description="Get hot water on demand, without waiting for a tank to heat up."
              />
              <FeatureCard
                icon={<Gauge className="w-10 h-10 text-blue-500" />}
                title="Energy Efficient"
                description="Save on energy bills with our highly efficient gas heating technology."
              />
              <FeatureCard
                icon={<ShieldCheck className="w-10 h-10 text-green-500" />}
                title="Safe Operation"
                description="Multiple safety features ensure worry-free use for your family."
              />
              <FeatureCard
                icon={<Droplet className="w-10 h-10 text-cyan-500" />}
                title="Consistent Temperature"
                description="Enjoy stable water temperature, even with multiple taps running."
              />
              <FeatureCard
                icon={<CheckCircle className="w-10 h-10 text-purple-500" />}
                title="Long Lifespan"
                description="Built to last with high-quality materials and expert engineering."
              />
              <FeatureCard
                icon={<ThumbsUp className="w-10 h-10 text-yellow-500" />}
                title="Easy Installation"
                description="Designed for straightforward installation and minimal maintenance."
              />
            </div>
          </div>
        </section>
        <section id="quality" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <Image
                alt="Bosch Quality"
                className="object-cover object-center mx-auto overflow-hidden rounded-xl sm:w-full lg:order-last"
                height="610"
                src="/images/specs.png"
                width="844"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Bosch Quality Assurance
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 100 years of experience, Bosch is synonymous with
                  quality and innovation. Our gas geysers are built to the
                  highest standards, ensuring:
                </p>
                <ul className="grid gap-6">
                  <li>
                    <CheckCircle className="inline w-4 h-4 mr-2 text-green-500" />
                    Rigorous quality control and testing
                  </li>
                  <li>
                    <CheckCircle className="inline w-4 h-4 mr-2 text-green-500" />
                    Use of premium, durable materials
                  </li>
                  <li>
                    <CheckCircle className="inline w-4 h-4 mr-2 text-green-500" />
                    Compliance with international safety standards
                  </li>
                  <li>
                    <CheckCircle className="inline w-4 h-4 mr-2 text-green-500" />
                    Continuous innovation and improvement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          id="comparison"
          className="w-full max-w-4xl mx-auto py-12 bg-gray-100 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl">
              Why Choose Bosch Gas Geysers?
            </h2>
            <Table>
              <TableHeader className="">
                <TableRow>
                  <TableHead className="w-[200px]">Feature</TableHead>
                  <TableHead >Bosch Gas Geyser</TableHead>
                  <TableHead>Electric Geyser</TableHead>
                  <TableHead>Solar Water Heater</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Heating Speed</TableCell>
                  <TableCell className="bg-brand text-white font-medium">
                    Instant
                  </TableCell>
                  <TableCell className="bg-red-600 text-white font-medium">
                    Slow
                  </TableCell>
                  <TableCell className="bg-yellow-600 text-white font-medium">
                    Dependent on sunlight
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Energy Efficiency
                  </TableCell>
                  <TableCell className="bg-brand text-white font-medium">
                    High
                  </TableCell>
                  <TableCell className="bg-red-600 text-white font-medium">
                    Moderate
                  </TableCell>
                  <TableCell className="bg-yellow-600 text-white font-medium">
                    High
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Installation Cost
                  </TableCell>
                  <TableCell className="bg-brand text-white font-medium">
                    Moderate
                  </TableCell>
                  <TableCell className="bg-red-600 text-white font-medium">
                    Low
                  </TableCell>
                  <TableCell className="bg-yellow-600 text-white font-medium">
                    High
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Operational Cost
                  </TableCell>
                  <TableCell className="bg-brand text-white font-medium">
                    Low
                  </TableCell>
                  <TableCell className="bg-red-600 text-white font-medium">
                    High
                  </TableCell>
                  <TableCell className="bg-yellow-600 text-white font-medium">
                    Low
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Dependence on Electricity
                  </TableCell>
                  <TableCell className="bg-brand text-white font-medium">
                    None
                  </TableCell>
                  <TableCell className="bg-red-600 text-white font-medium">
                    High
                  </TableCell>
                  <TableCell className="bg-yellow-600 text-white font-medium">
                    Moderate
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="w-full py-12 text-white md:py-24 lg:py-32 bg-brand">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Upgrade Your Water Heating?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the Bosch difference today. Contact us directly or
                  click on the link below to find out what size Bosch gas geyser
                  would be suitable for your household.
                </p>
              </div>
              <div className="flex flex-row space-x-4">
                <Link
                  className="flex items-center justify-center h-12 px-4 text-sm text-white bg-red-600 rounded-full shadow-lg sm:w-fit min-w-[190px]"
                  href="/quote/start"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
// @ts-ignore
function FeatureCard({ icon, title, description }) {
	return (
		<div className="flex flex-col items-center p-4 text-center border rounded-lg shadow-xs">
			<div className="mb-4">{icon}</div>
			<h3 className="mb-2 text-lg font-semibold">{title}</h3>
			<p className="text-gray-500">{description}</p>
		</div>
	);
}

