/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qO8Rn3AUhrE
 */
import { Button } from "@/components/ui/button";
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
import { GEYSER_QUERYResult } from "@/sanity/types";

export default function PackageDetails({
  geyser,
}: {
  geyser: GEYSER_QUERYResult;
}) {
  return (
    <div className="grid items-start w-full gap-6 py-6 mx-auto md:grid-cols-2 lg:gap-12">
      <div className="grid items-start gap-4">
        <h1 className="text-3xl font-bold">
          <span className="uppercase">
            {geyser?.maxFlowRate?.split("/")[0]}
          </span>{" "}
          {geyser?.title}
        </h1>
        <h2
          className="w-full px-4 py-3 text-2xl font-bold text-center text-white bg-red-600 lg:w-2/5"
          suppressHydrationWarning
        >
          From: {formatCurrency(geyser?.price!)}*
        </h2>
        <h2
          className="flex flex-col w-full px-4 py-3 text-lg font-bold text-center text-white bg-blue-600 lg:w-2/5"
          suppressHydrationWarning
        >
          <small className="text-xs">Geyser Only Price</small>
          {formatCurrency(geyser?.geyser?.price!)}**
        </h2>

        <div>
          <p>{geyser?.description}</p>
          <p>{geyser?.composition}</p>
          <p>
            {geyser?.slug === "hot" && "**Price includes weather cover and VAT"}
            {geyser?.slug === "super-hot" &&
              "**Price includes weather cover and VAT"}
            {geyser?.slug === "boiling-hot" && "**Price includes VAT"}
            {geyser?.slug === "steaming-hot" && "**Price includes VAT"}
          </p>
        </div>
        <h2 className="mt-4 text-2xl font-bold">Specifications</h2>
        <PortableText value={geyser?.specifications!} />
        <p className="font-semibold">Warranty: {geyser?.warranty}</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Parameter</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Max Flow Rate</TableCell>
              <TableCell>{geyser?.maxFlowRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Min Flow Rate</TableCell>
              <TableCell>{geyser?.minFlowRate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Max Water Pressure</TableCell>
              <TableCell>{geyser?.maxWaterPressure}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Min Water Pressure</TableCell>
              <TableCell>{geyser?.minWaterPressure}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dimensions</TableCell>
              <TableCell>{geyser?.dimensions}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex flex-col items-center justify-center w-full gap-6 my-6 md:flex-row">
          <Link
            href={`https://wa.me/27793414075?text=I'm%20contacting%20you%20from%20your%20website%20hotwater24.com%20and%20I%20would%20like%20to%20request%20a%20quote%20for%20${geyser?.title}%20-%20${geyser?.maxFlowRate}%20on%20this%20page%20https://hotwater24.com/packages/${geyser?.slug}`}
            target="_blank"
          >
            <Button className="rounded-full bg-brand min-w-[190px]">
              Request a quote now
            </Button>
          </Link>
          <Link href="/#packages">
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
      <div className="flex items-center justify-center w-full">
        <Image
          alt="Gas Geyser"
          className="object-cover w-full overflow-hidden border rounded-lg aspect-auto md:w-1/2 border-zinc-200 dark:border-zinc-800"
          height="600"
          src={geyser?.image!}
          width="1000"
        />
      </div>
    </div>
  );
}
