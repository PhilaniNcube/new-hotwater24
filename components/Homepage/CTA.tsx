import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="container py-12">
      <div className="flex justify-center item-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex w-full sm:jusitfy-start items-center md:items-start flex-col">
            <p className="md:w-60 lg:w-full text-xl lg:text-4xl  md:text-left font-semibold leading-6 md:leading-7 lg:leading-10 text-gray-800">
              Have you considered switching over to a gas geyser?
            </p>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg leading-5 md:leading-6 text-gray-600">
              Gas geysers are a great alternative to the more traditional
              electric geyser. One of the advantages of installing a gas geyser
              is that it provides hot water on-demand without your family ever
              having to experience a cold shower.
            </p>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg leading-5 md:leading-6 text-gray-600">
              Another great advantage of having a gas geyser is that it saves
              you money on your monthly electricity bill.
            </p>

            <Link href="/savings" passHref>
              <Button className="focus:bg-gray-900 rounded-full shadow-lg hover:shadow-smmt-6 py-4 px-8 text-base font-medium leading-none text-white bg-gray-800 hover:bg-gray-700 uppercase">
                Calculate Your Saving
              </Button>
            </Link>
          </div>
          <div className="aspect-video">
            <Image
              width={1920}
              height={1280}
              src="/images/white-bathroom.jpg"
              alt="white-bathroom"
              className="aspect-video rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
