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

export default async function PackageDetails({ geyser }: { geyser: Geyser }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start py-6">
      <div className="grid gap-4 items-start">
        <h1 className="font-bold text-3xl">{geyser.title}</h1>
        <h2 className="text-4xl text-white w-fit skew-x-12 px-4 py-3 bg-red-600 font-bold">
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
        <div className="flex flex-col gap-2 mt-6">

        </div>
      </div>
      <div className="grid gap-3 items-start">
        <Image
          alt="Gas Geyser"
          className="aspect-square object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800"
          height="600"
          src={geyser.image}
          width="600"
        />
      </div>
    </div>
  );
}
