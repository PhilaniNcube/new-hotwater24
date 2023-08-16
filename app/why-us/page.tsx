import Choose from "@/components/Choose";
import { ArrowRight, FlagIcon, Users2Icon } from "lucide-react";
import Link from "next/link";
import { RiFilePaperLine } from "react-icons/ri";

const page = () => {
  return (
    <main className="relative">
      <div className="container py-8">
        <h2 className="text-gray-700 font-light text-3xl lg:text-5xl">
          Why Choose <span className="font-bold">Us?</span>
        </h2>

        <div className="relative">
          <div className="z-30">
            <div className="relative mt-8">
              <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div className="z-20 text-white w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                  <FlagIcon />
                </div>
                <div className="z-20 text-white w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                  <RiFilePaperLine />
                </div>
                <div className="z-20 text-white w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                  <Users2Icon />
                </div>
              </div>
              <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
              <div>
                <p className="font-semibold text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                  40+ years experience with gas
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                  With over 40years of experience in the Dutch gas installation
                  business, we understand your need, especially in a time when
                  energy costs are rising (and almost becomes unaffordable) and
                  load shedding becomes a daily part of our lives
                </p>
              </div>
              <div>
                <p className="font-semibold text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                  Affordable Alternative
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                  We offer our clients an alternative source of energy, namely
                  gas. We do not only offer you our experience in recommending
                  the best quality and safe product for your property, we also
                  recommend you the best off-the-grid solutions, minimizing your
                  monthly household expense on electricity
                </p>
              </div>
              <div className="">
                <p className="font-semibold text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                  Seamless Service
                </p>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                  Free yourself from the difficulties of periodic load shedding.
                  Get the comfort of knowing that you will have hot water even
                  during a black out. We offer a one-stop-service for your
                  entire gas water heating solution
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm max-w-[55ch] text-gray-700 mt-6 pb-2">
          By clicking on the button below we instantly recommend you with the
          best gas water heating solution for your home
        </p>
       <Choose />
      </div>

      <section className="relative isolate">
        <div className=" container min-h-[100vh] lg:min-h-[80vh] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-start justify-center h-full py-8 lg:py-16">
              <h1 className="text-white font-light text-3xl lg:text-5xl">
                Why Choose <span className="font-bold">LPG?</span>
              </h1>
              <div className="text-white ">
                <p className="text-white text-md">
                  LPG is a very safe and reliable source of energy, that can be
                  used for cooking and heating. LPG has many advantages, to name
                  a few:
                </p>

                <h4 className="text-lg md:text-xl mt-3">Efficient</h4>
                <p className="text-sm">
                  It can be up to five times more efficient than traditional
                  fuels, resulting in less energy wastage and better use of our
                  planet’s resources.
                </p>
                <h4 className="text-lg md:text-xl mt-3">
                  Portable & Accessible
                </h4>
                <p className="text-sm">
                  LPG is extremely versatile and portable. It can be transported
                  using sea, rail or road transport. LPG can be accessible to
                  everyone everywhere today without major infrastructure
                  investment.
                </p>
                <h4 className="text-lg md:text-xl mt-3">Clean</h4>
                <p className="text-sm">
                  LPG is a clean burning fuel that is low carbon, emits
                  virtually no black carbon and does not spill. Do you know that
                  South Africa is amongst the most polluted countries in the
                  world, this mainly due to the fact that electricity is still
                  being generated through the use of coal. So it is time for us
                  to act accordingly and reduce the CO2 footprint!
                </p>
                <p className="text-sm max-w-[55ch] text-white mt-6 pb-2">
                  By clicking on the button below we instantly recommend you
                  with the best gas water heating solution for your home
                </p>

               <Choose />
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 absolute -z-10 inset-0">
          <div className="w-full bg-slate-600 min-h-[100vh] lg:min-h-[80vh] " />
          <div className="w-full bg-blue-100 hidden md:flex min-h-[100vh] lg:min-h-[80vh]">
            <img
              src="/images/shower-1.jpeg"
              alt="Shower"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-12">
          <h2 className="text-gray-700 font-light text-3xl lg:text-5xl">
            Safe & reliable installations
          </h2>

          <div className="flex flex-col md:flex-row w-full md:w-5/6">
            <div className="w-full pr-8">
              <p className="font-medium text-sm leading-6 text-gray-800 mt-6">
                Safety comes first, which is why all our installers we work with
                are certified and registered with the LPGas Association of South
                Africa. For safety and quality purposes of the installation work
                performed, the installation must be checked to be compliant with
                current rules and regulation. Therefore, after every
                installation a CoC (Certificate of Compliance) will be signed
                off between installer as well as you as our client.
              </p>
              <p className="font-medium text-sm leading-6 text-gray-800 mt-6">
                Are you looking for a reliable installation? Then simply click
                on the button below to answer some questions for us to give you,
                our recommendation. If you agree with our quote, we will start
                organizing the installation process and assign an installer to
                your area, so you will always be helped safely and quickly
                without too much hassle!
              </p>
              <p className="font-medium text-sm leading-6 text-gray-800 mt-6">
                Do you want to be sure that your installation remains in top
                condition and always operates in the most efficient way? Then
                think of taking a service & maintenance contract with us. Our
                network of certified installers provides high-quality
                maintenance and the best service for a monthly fixed price.
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

              <Choose />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default page;
