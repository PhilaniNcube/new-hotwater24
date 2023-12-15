/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qO8Rn3AUhrE
 */
import { Button } from "@/components/ui/button";
import { Geyser } from "@/sanity/types";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function PackageDetails({ geyser }: { geyser: Geyser }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start py-6">
      <div className="grid gap-4 items-start">
        <h1 className="font-bold text-3xl">
          <span className="uppercase">{geyser.maxFlowRate.split("/")[0]}</span>{" "}
          {geyser.title}
        </h1>
        <h2
          className="text-4xl text-white w-fit skew-x-12 px-4 py-3 bg-red-600 font-bold"
          suppressHydrationWarning
        >
          Total:{" "}
          {formatCurrency(
            geyser.geyser.price +
              geyser.plumbing.price +
              geyser.installation.price +
              geyser.certificateOfCompliance.price
          )}
        </h2>
        <div>
          <p>
            {geyser.description} - <br /> Outlets: {geyser.outlets}
          </p>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{geyser.geyser.description}</TableCell>
                <TableCell>{formatCurrency(geyser.geyser.price)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{geyser.installation.description}</TableCell>
                <TableCell>
                  {formatCurrency(geyser.installation.price)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {geyser.certificateOfCompliance.description}
                </TableCell>
                <TableCell>
                  {formatCurrency(geyser.certificateOfCompliance.price)}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>{geyser.plumbing.description}</TableCell>
                <TableCell>{formatCurrency(geyser.plumbing.price)}</TableCell>
              </TableRow>
              <TableRow className="font-bold text-xl">
                <TableCell>Total</TableCell>
                <TableCell>
                  {formatCurrency(
                    geyser.geyser.price +
                      geyser.plumbing.price +
                      geyser.installation.price +
                      geyser.certificateOfCompliance.price
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <h2 className="font-bold text-2xl mt-4">Specifications</h2>
        <PortableText value={geyser.specifications} />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Parameter</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {" "}
            <TableRow>
              <TableCell>Max Flow Rate</TableCell>
              <TableCell>{geyser.maxFlowRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Min Flow Rate</TableCell>
              <TableCell>{geyser.minFlowRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Max Water Pressure</TableCell>
              <TableCell>{geyser.maxWaterPressure}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Min Water Pressure</TableCell>
              <TableCell>{geyser.minWaterPressure}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dimensions</TableCell>
              <TableCell>{geyser.dimensions}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="my-6 flex flex-col md:flex-row items-center w-full  justify-center gap-6">
          <Link
            href={`https://wa.me/27793414075?text=I'm%20contacting%20you%20from%20your%20website%20hotwater24.com%20and%20I%20would%20like%20to%20request%20a%20quote%20for%20${geyser.title}%20-%20${geyser.maxFlowRate}%20on%20this%20page%20https://hotwater24.com/packages/${geyser.slug}`}
            target="_blank"
          >
            <Button className="rounded-full bg-brand min-w-[190px]">
              Request a quote now
            </Button>
          </Link>
          <Link href="/packages">
            <Button className="rounded-full bg-red-600 min-w-[190px]">
              View our packages
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <p className="text-sm text-red-700">
            Please note, Hotwater24 use a wide range of different brands and
            sizes of gas geysers that will suit your specification!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <Image
          alt="Gas Geyser"
          className="aspect-auto md:w-1/2 object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800"
          height="600"
          src={geyser.image}
          width="1000"
        />
      </div>
    </div>
  );
}
