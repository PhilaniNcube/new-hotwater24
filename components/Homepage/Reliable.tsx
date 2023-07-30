import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Reliable = () => {
  return (
    <div className="md:bg-right bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-6 md:px-4 lg:px-0 py-12">
        <h2 className="text-gray-700 font-light text-3xl lg:text-5xl">
          Safe & reliable installations
        </h2>

        <div className="flex flex-col md:flex-row w-5/6">
          <div className="w-full pr-8">
            <p className="font-medium text-sm leading-6 text-gray-800 mt-6">
              Safety comes first, which is why all our installers we work with
              are certified and registered with the LPGas Association of South
              Africa. For safety and quality purposes of the installation work
              performed, the installation must be checked to be compliant with
              current rules and regulation. Therefore, after every installation
              a CoC (Certificate of Compliance) will be signed off between
              installer as well as you as our client.
            </p>
            <p className="font-medium text-sm leading-6 text-gray-800 mt-6">
              Are you looking for a reliable installation? Then simply click on
              the button below to answer some questions for us to give you, our
              recommendation. If you agree with our quote, we will start
              organizing the installation process and assign an installer to
              your area, so you will always be helped safely and quickly without
              too much hassle!
            </p>
            <p className="font-medium text-sm leading-6 text-gray-800 mt-6">
              Do you want to be sure that your installation remains in top
              condition and always operates in the most efficient way? Then
              think of taking a service & maintenance contract with us. Our
              network of certified installers provides high-quality maintenance
              and the best service for a monthly fixed price.
            </p>

            <div className="flex mt-4">
              <div className="h-24 bg-gray-300 rounded-lg object-cover">
                <img
                  className="h-24 object-cover"
                  src="/images/lpgas.png"
                  alt="LPGA"
                />
              </div>
            </div>

            <Link href="/quote/start" passHref>
              <button
                // onClick={start}
                className="bg-gray-800 text-white flex space-x-2 py-2 px-4 shadow-gray-600 shadow-lg hover:shadow-sm focus:focus-ring-sky-400 items-center mt-4 rounded-full w-fit uppercase"
              >
                Choose Your Geyser!
                <span>
                  <ArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reliable;
