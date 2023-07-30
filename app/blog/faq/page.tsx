import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What do I need to know before buying a gas geyser?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "<p>The most important thing to know about buying a gas geyser is your expected flow rate. You need to know your flow rate so that you can select the right geyser for your property or house.</p>",
                },
              },
              {
                "@type": "Question",
                name: "How is flow rate calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "<p>Flow rate is calculated by determing the amount of water coming out of all your hot water outlets in a minute.</p>",
                },
              },
              {
                "@type": "Question",
                name: "Do you install the gas geysers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "<p>We work with certified gas geyser installers. Should you take up the installation offer that we can give you, we will coordinate the whole installation process.</p>",
                },
              },
              {
                "@type": "Question",
                name: "Can I buy the gas geyser on credit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "<p>Through our partners at Mobicred we are able to offer you the option to pay for the gas geyser over 12 months.</p>",
                },
              },
              {
                "@type": "Question",
                name: "How much cheaper will my electricity bill be when I switch to a gas geyser?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "<p>You can expect to save up to 20% a month on your electricity bill when you switch to using a gas geyser.</p>",
                },
              },
            ],
          }),
        }}
      />
      <section className=" mt-4 px-4 container">
        <div className="grid grid-cols-8 gap-2">
          <section className="col-span-8 md:col-span-6 min-h-screen my-3">
            <Image
              src="/images/faq.jpg"
              alt="faq"
              className="w-4/6 object-cover rounded-md"
              width={1920}
              height={1080}
            />
            <div className="mt-4">
              <h1 className="text-2xl md:text-4xl text-slate-800 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What is a gas geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                A Gas Geyser, also known as a Gas Water Heater, is a water
                heating system that runs on gas. The traditional gas geyser does
                not have a reservoir to store hot water. Instead, it heats the
                water instantly/ on-demand. If someone opens the hot tap, the
                gas geyser will activate and send hot water to the tap. The gas
                geyser will deactivate when the tap is closed and stop producing
                hot water.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                How does a gas geyser work?
              </p>
              <article className="text-base text-gray-600 font-medium">
                As soon as a hot water tap is opened, water flows through the
                pipes at a sufficient flow. That flow triggers a sensor inside
                the gas geyser, igniting the gas burner. The water flows through
                the pipes absorbing the maximum heat emitting from the heat
                exchanger. Once the tap is turned off, the sensor again is
                triggered, and the burner switches off.
              </article>
              {/* <Disclosure as="div" className="mt-4">
                {({ open }) => (
                  <Fragment>
                    <Disclosure.Button>
                      <div className="flex flex-row items-center bg-slate-100 px-4 py-2 rounded-lg space-x-4 shadow">
                        <span className="text-md font-medium text-gray-700">
                          More Info
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-6 w-6 text-gray-800`}
                        />
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel
                      as="div"
                      className="text-sm text-gray-600 mt-2 pl-3 max-w-2xl"
                    >
                      <article>
                        A particular flow rate is required to activate the gas
                        ignition. Flow rate is the volume of water moving
                        through a pipe every minute. Gas geysers typically
                        operate within a certain flow rate range. For example, a
                        12L gas geyser can heat up to 12L of water every minute.
                      </article>
                      <p className="text-sm font-medium">
                        Below are steps of how a gas geyser works:
                      </p>
                      <ol className="mt-4">
                        <li>
                          <h3 className="text-lg">Step 1 - Demand</h3>
                          <p>
                            The hot water tap is open. Once the hot water tap is
                            opened, the gas geyser will detect that there is
                            water flowing through the gas geyser. The water flow
                            is detected via a dynamo (electronically) or a
                            diaphragm (mechanically).
                          </p>
                        </li>
                        <li>
                          <h3 className="text-lg">Step 2 - Ignition</h3>
                          <p>
                            Once the gas geyser detects the water flow, it will
                            try to ignite the gas. The gas geyser will allow a
                            small amount of gas to flow into the combustion
                            chamber. It will ignite a small amount of gas with a
                            continuous pulsating electric spark. Then the small
                            amount of gas is lit.
                          </p>
                        </li>
                        <li>
                          <h3 className="text-lg">Step 3 - Combustion</h3>
                          <p>
                            Now the gas geyser knows there is ignition, it will
                            allow gas to flow to the rest of the burners. At
                            this point, the fan will activate to assist
                            combustion if it is a force-driven gas geyser. The
                            gas will ignite on the rest of the burners, and the
                            heat produced will pass through the heat exchanger.
                          </p>
                        </li>
                        <li>
                          <h3 className="text-lg">Step 4 - Heating</h3>
                          <p>
                            Finally, the water passing through the heat
                            exchanger will get heated by the hot combustion
                            gases, and this heated water will ultimately reach
                            your tap to enjoy.
                          </p>
                        </li>
                        <li>
                          <h3 className="text-lg">Step 5 - Demand Ceases</h3>
                          <p>
                            You will close the tap when you finish using the hot
                            water. Once that happens, the gas geyser will detect
                            no more flow and deactivate the gas geyser.
                          </p>
                        </li>
                      </ol>
                    </Disclosure.Panel>
                  </Fragment>
                )}
              </Disclosure> */}
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What type of gas do your gas geysers use?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Gas geysers use Liquefied Petroleum Gas (LPG), a combination of
                butane, propane, or a mix. LPG is a clean burning and efficient
                hydrocarbon gas produced by-product of oil refining or natural
                gas extraction. When compressed in a tank or cylinder, it
                becomes a liquid released as a gas.
              </article>

              {/* <Disclosure as="div" className="mt-4">
                {({ open }) => (
                  <Fragment>
                    <Disclosure.Button>
                      <div className="flex flex-row items-center bg-slate-100 px-4 py-2 rounded-lg space-x-4 shadow">
                        <span className="text-md font-medium text-gray-700">
                          More Info
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-6 w-6 text-gray-800`}
                        />
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel
                      as="div"
                      className="text-sm text-gray-600 mt-2 pl-3 max-w-2xl"
                    >
                      <article>
                        A litre of LPG expands to approximately 270 times its
                        volume as a gas. This means lots of energy can be stored
                        in a relatively small container. LPG is easily
                        transported and a popular energy source for cooking,
                        heating, water heating, refrigeration, and lighting on
                        boats, in caravans, campervans and when camping.
                      </article>
                    </Disclosure.Panel>
                  </Fragment>
                )}
              </Disclosure>

              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What is LPG used for?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Hundreds of millions of people currently use LPG and depend on
                it for thousands of applications in commercial business,
                industry, transportation, farming, power generation, cooking,
                heating, and recreational purposes.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Is LPG safe to use?
              </p>
              <article className="text-base text-gray-600 font-medium">
                <strong>YES</strong>, LPG is very safe to use for your property.
                However, ensure that all the necessary guidelines are followed
                during installation, including the issue of CoC (Certificate of
                Compliance) and have regular - a least once a year - repairs and
                maintenance.
              </article>
              <Disclosure as="div" className="mt-4">
                {({ open }) => (
                  <Fragment>
                    <Disclosure.Button>
                      <div className="flex flex-row items-center bg-slate-100 px-4 py-2 rounded-lg space-x-4 shadow">
                        <span className="text-md font-medium text-gray-700">
                          More Info
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-6 w-6 text-gray-800`}
                        />
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel
                      as="div"
                      className="text-sm text-gray-600 mt-2 pl-3 max-w-2xl"
                    >
                      <article>
                        Familiarise yourself with some of the safety aspects of
                        using gas and always use a certified and registered
                        installer/company.
                      </article>
                      <p className="text-sm font-medium">
                        Here are a few safety tips when using LPG in your home.
                      </p>
                      <ul className="list-disc pl-6 text-xs">
                        <li>
                          Never leave your gas stove unattended when cooking.
                        </li>
                        <li>
                          Leave the LPG cylinder in an upright position in a
                          safe space for storage (gas cage).
                        </li>
                        <li>
                          Ensure all your gas-related equipment is serviced and
                          maintained regularly (once a year).
                        </li>
                        <li>Buy gas cylinders from authorised dealers.</li>
                      </ul>
                    </Disclosure.Panel>
                  </Fragment>
                )}
              </Disclosure> */}

              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Why use LPG?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Please click on this link so you can read all about why using
                LPG is a very sensible thing to do:
                <Link href="/why-us" className="text-sky-500 text-xs">
                   https://www.hotwater24.com/why-us
                </Link>
              </article>

              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Do I need a Certificate of Compliance/Conformity (CoC) for my
                gas installation?
              </p>
              <article className="text-base text-gray-600 font-medium">
                A CoC is proof that your gas installation is safe and complies
                with the rules and regulations laid out in the South African
                National Standards (SANS) 10087-1.
              </article>
              <article className="text-base text-gray-600 font-medium">
                The law requires that you be always in possession of a CoC for
                gas installations, as does your insurance company. If your
                property suffers damage from a gas fault, your insurance company
                will expect you to produce a valid certificate. Not being able
                to produce one may invalidate your claim.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                When must a CoC be issued?
              </p>
              <article className="text-base text-gray-600 font-medium">
                A Certificate of Conformity (CoC) must be issued for a PERMANENT
                installation:
              </article>
              <ul className="pl-6 text-sm text-gray-600 list-disc">
                <li>On completion of a new gas installation,</li>
                <li>
                  After any modification, alteration, or maintenance of an
                  existing gas installation
                </li>
                <li>
                  On change of ownership of a property housing an existing gas
                  installation. (When you sell your property).
                </li>
              </ul>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What is a permanent gas installation?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Legislation deems a permanent gas installation to be a gas
                installation that is a fixture in a building, immovable and not
                of a temporary nature. This would include all built-in gas
                equipment – Gas fires, Heaters, Gas Braais, Stoves, Ovens, and
                Hot water systems. Movable gas heaters and gas braais on wheels
                are seen as temporary and do not require a CoC.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                How long is a CoC valid for?
              </p>
              <ul className="pl-6 text-sm text-gray-600 list-disc">
                <li>
                  A CoC is valid for five years, provided the installation has
                  not been altered.
                </li>
                <li>
                  Any maintenance or alterations done to your gas installation
                  requires issuing a new CoC for the ENTIRE system.
                </li>
                <li>
                  An installation must be inspected, and a CoC issued when a
                  property is sold.
                </li>
              </ul>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                How regularly must an LPG installation be serviced?
              </p>
              <article className="text-base text-gray-600 font-medium">
                According to legislation, the manifold system (which includes
                the regulator/s) should be inspected and serviced at intervals
                not exceeding five years.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Am I allowed to have a gas cylinder inside my house?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Yes, according to the SA National Standards (SANS).
              </article>
              <ul className="pl-6 text-sm text-gray-600 list-disc">
                <li>
                  If you live in a flat, you may have a maximum of 9kg gas
                  either stored or permanently installed inside.
                </li>
                <li>
                  If you live in either a free-standing house, cluster house or
                  in-group housing (not exceeding two storeys), you are entitled
                  to a maximum of 19kg. There are, however, strict regulations
                  regarding the positioning of gas cylinders inside a flat or
                  house and necessary ventilation.
                </li>
              </ul>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What makes gas geysers different?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Gas geysers are the most energy-efficient geysers available.
                Unlike the traditional electric geyser that acts as a reservoir
                for your water, heating it constantly over time - gas geysers
                don&apos;t store copious amounts of water internally. Instead,
                gas geysers heat water on demand. Meaning they only heat water
                when your hot water tap is turned on.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Why should I choose a gas geyser over an electric geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Well, for starters, gas geysers supply endless hot water as long
                as you have gas
              </article>
              {/* <Disclosure as="div" className="mt-4">
                {({ open }) => (
                  <Fragment>
                    <Disclosure.Button>
                      <div className="flex flex-row items-center bg-slate-100 px-4 py-2 rounded-lg space-x-4 shadow">
                        <span className="text-md font-medium text-gray-700">
                          More Info
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-6 w-6 text-gray-800`}
                        />
                      </div>
                    </Disclosure.Button>

                    <Disclosure.Panel
                      as="div"
                      className="text-sm text-gray-600 mt-2 pl-3 max-w-2xl"
                    >
                      <ul className="list-disc pl-6 text-xs">
                        <li>
                          Fact, gas is A LOT cheaper than electricity. This is
                          because gas is a much cheaper resource than
                          electricity and is only used when needed. You can save
                          an average of 20% on your monthly electricity bill by
                          switching from an electric geyser to a gas geyser.
                        </li>
                        <li>
                          Gas geysers heat water INSTANTLY. With electric
                          geysers, hot water is stored in a tank, but once one
                          or two family members have taken a bath or shower, hot
                          water will be depleted. You&apos;ll have to wait
                          another hour to take your morning or post-workout
                          shower, which consumes more electricity.
                        </li>
                        <li>
                          Gas geysers are perfect for families because gas
                          geysers consume less energy and are power efficient
                          with a quicker recovery rate making them ideal for
                          family homes.
                        </li>
                        <li>
                          Gas geysers are far &apos;greener&apos; than electric
                          ones as they produce about a third of the greenhouse
                          gas emissions of electric storage hot water systems.{" "}
                        </li>
                      </ul>
                      <div className="grid grid-cols-2 mt-4 border-4 border-gray-700">
                        <span className="border-b border-r  border-gray-400 px-4 py-1">
                          <h4 className="font-bold">Gas</h4>
                        </span>
                        <span className="border-b  border-l border-gray-400 px-4 py-1">
                          <h4 className="font-bold">Electric</h4>
                        </span>
                        <span className="border-b border-r  border-gray-400 px-4 py-1">
                          <p>Heats water instantly/ on-demand</p>
                        </span>
                        <span className="border-b  border-l border-gray-400 px-4 py-1">
                          <p>Slower to heat water than gas models</p>
                        </span>
                        <span className="border-b border-r  border-gray-400 px-4 py-1">
                          <p>
                            Lower operating costs than with electric models
                            (Saving 20%!)
                          </p>
                        </span>
                        <span className="border-b  border-l border-gray-400 px-4 py-1">
                          <p>Higher operating costs</p>
                        </span>
                        <span className="border-b border-r  border-gray-400 px-4 py-1">
                          <p>Operates during power failures</p>
                        </span>
                        <span className="border-b  border-l border-gray-400 px-4 py-1">
                          <p>Will not heat up water during power failure</p>
                        </span>
                        <span className="border-b border-r  border-gray-400 px-4 py-1">
                          <p>Energy-efficient</p>
                        </span>
                        <span className="border-b  border-l border-gray-400 px-4 py-1">
                          <p>Longer recovery times</p>
                        </span>
                      </div>
                    </Disclosure.Panel>
                  </Fragment>
                )}
              </Disclosure> */}
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Are gas geysers safe for home use?
              </p>
              <article className="text-base text-gray-600 font-medium">
                YES. ABSOLUTELY! Gas geysers are 100% safe, provided you work
                with professional experts, registered suppliers, and installers
                like us.
              </article>
              <article className="text-base text-gray-600 font-medium">
                There is no shortcut around this – Precautious and adequate
                safety measures must be taken to select, install, and use any
                gas geyser. ALL our gas geysers have safety features: a flame
                failure device, an over-heat protection device, a gas and water
                stability device, a combustion safety device, and an oxygen
                depletion sensor device.
              </article>
              <ul className="list-disc text-gray-600 pl-6">
                <li>
                  <p className="text-base font-bold">
                    Install in a well-ventilated area.
                  </p>
                  <p>
                    Ventilation is the most crucial safety measure when using a
                    gas geyser at home. Our expert installers assess the most
                    strategic and ventilated location to install your gas
                    geysers, for example, mounted on a wall outside, on a
                    balcony, rooftop, terrace, or other areas where maximum
                    ventilation can be achieved.
                  </p>
                </li>
                <li>
                  <p className="text-base font-bold">
                    Be on the Lookout for gas Leaks.
                  </p>
                  <p>
                    The second measure that ensures safety is to ALWAYS be on
                    the lookout for gas leaks. Loosely fitted pipes or other
                    utility fixtures become one of the most common causes of gas
                    leaks at home. Be exceptionally vigilant when it comes to
                    gas leaks!
                  </p>
                </li>
                <li>
                  <p className="text-base font-bold">
                    Keep out of reach of children!
                  </p>
                  <p>
                    Like any potentially harmful device, KEEP OUT OF
                    CHILDREN&apos;S REACH! NEVER ask your child to turn on or
                    off the gas geyser or let them fiddle its knobs. We always
                    install your gas geyser in an area out of reach of children
                    and recommend that you keep it locked. In instances where
                    the home has limited placement, for example, in an apartment
                    building, we install a safety grill around the geyser to
                    ensure the safety of young children.
                  </p>
                </li>
                <li>
                  <p className="text-base font-bold">
                    Keep a watchful eye on your thermostat.
                  </p>
                  <p>
                    The thermostat allows you to set your temperature at your
                    desired levels. Avoid setting your temperature to &apos;very
                    hot&apos; for extended periods, as boiling water can
                    accumulate extreme steam pressures. So, please re-set your
                    thermostat to your &apos;normal&apos; temperature after
                    using boiling water. Fortunately for you, ALL our gas
                    geysers are modern and have safety features that make them
                    very safe. For example, if there is increased heat in the
                    gas geyser, it has temperature sensors for the air
                    temperature exiting the unit. If the temperature is too
                    high, it will stop supplying gas to the burners. If that
                    were to fail, there is a second water temperature sensor. If
                    the outgoing water temperature is too high, it will stop
                    supplying gas to the burner.
                  </p>
                </li>
                <li>
                  <p className="text-base font-bold">
                    Servicing and Maintenance.
                  </p>
                  <p>
                    We keep track of our purchases to remind ALL our clients of
                    the need for one of our installers to come and run a
                    thorough service/maintenance on your gas geyser every 12
                    months. Your gas geyser needs to be maintained regularly
                    like any mechanised item, including your car, washing
                    machine, and stove. If your gas geyser hasn&apos;t been used
                    for a while, please contact us, and one of our expert
                    technicians will inspect it before turning it on.
                  </p>
                </li>
              </ul>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Why are gas geysers great?
              </p>
              <article className="text-base text-gray-600 font-medium">
                <ol className="list-decimal pl-6" role="list">
                  <li>
                    Gas water geysers provide Just in Time heating! Use It Right
                    Now! Hot water. They don&apos;t store the hot water to
                    pre-heat. Instead, they instantaneously heat your water as
                    it passes through the gas appliance.{" "}
                  </li>
                  <li>
                    You aren&apos;t wasting energy by constantly heating the
                    water. From a cost perspective, it will cost you less to run
                    and operate a gas geyser than paying for electricity, based
                    on the gas you use.
                  </li>
                  <li>
                    You only need to set it to your desired temperature. For
                    some arbitrary reason, Electric geysers in South Africa are
                    typically set to 65 degrees Celsius. Anything higher than 50
                    degrees is likely to scorch you. That&apos;s why we usually
                    mix in cold water to reach a tolerable temperature. How
                    wasteful!
                  </li>
                </ol>
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What sizes are available?
              </p>
              <article className="text-base text-gray-600 font-medium">
                12, 16, 20 and 26 Litre gas geysers
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What uses do the different sizes have?
              </p>
              <article className="text-base text-gray-600 font-medium">
                The tables below provide a general indication of the usage of
                each hot water tap in a typical household and can help you
                establish what you may need to consider.
              </article>

              <p className="text-xl font-medium text-slate-700 py-2">
                Multiple-use application guide -{" "}
                <span className="font-light">
                  can run multiple outlets simultaneously
                </span>
              </p>
              <div>
                <table className="w-full shadow text-left bg-white dark:bg-gray-800">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="py-5 sm:pl-10 pl-2 w-1/4 text-base text-gray-800 dark:text-gray-100">
                        Application
                      </th>
                      <th className="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100">
                        Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        Shower & Basin
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        12 litres
                      </td>
                    </tr>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        2 Showers & Basin
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        16 litres
                      </td>
                    </tr>
                    <tr>
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        Basin & Bath
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        16 litres
                      </td>
                    </tr>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        Shower, Basin & Bath
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        20 litres
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xl font-medium text-slate-700 mt-12 py-2">
                Single-use application guide -{" "}
                <span className="font-light">
                  outlets cannot run simultaneously
                </span>
              </p>
              <div>
                <table className="w-full shadow text-left bg-white dark:bg-gray-800">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="py-5 sm:pl-10 pl-2 w-1/4 text-base text-gray-800 dark:text-gray-100">
                        Application
                      </th>
                      <th className="py-5 w-1/4 text-base text-gray-800 dark:text-gray-100">
                        Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        Basin or Camping shower
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        5 – 8 litres
                      </td>
                    </tr>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        Small Showerhead
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        8 litres
                      </td>
                    </tr>
                    <tr>
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        Medium Showerhead
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        10 litres
                      </td>
                    </tr>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        Large Showerhead
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        12 litres
                      </td>
                    </tr>
                    <tr>
                      <td className="sm:pl-10 pl-2 pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        Bath
                      </td>
                      <td className="pr-2 py-5 text-gray-800 dark:text-gray-100 text-xs sm:text-sm">
                        16 litres
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                How do I figure out the best size for my home?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Creating a comprehensive list of your primary requirements will
                help you decide on the best model and size of gas geyser you may
                need for your household. The size of the geyser you choose
                depends entirely on your needs, the layout of your house, and
                how many hot water taps you expect to have at any given time.
                Generally, a bath will require a geyser of 12 - 16L and a shower
                of about 6L, minimum.
              </article>
              <ul className="list-disc text-gray-600 pl-6">
                <li>
                  <p className="text-base font-bold">The Bucket Test</p>
                  <p>
                    Now that you have determined your household needs. It is
                    essential to calculate your highest flow rate amongst all
                    your outlets. The bucket test is fool proof for figuring out
                    what size geyser you need. This will give you an accurate
                    gauge of how many litres flow through your most demanding
                    tap in 1 minute and thus what size geyser you need to
                    consider. We advise simply using your tub as a good gauge
                    since it generally demands the highest water flow.
                  </p>
                  <ol className="list-decimal pl-6 text-xs">
                    <li>Grab a 20-litre bucket</li>
                    <li>
                      Place it under all the taps you require running hot water
                      (i.e., your shower, bath, kitchen and bathroom basin
                      etc.). Open the tap and run water into the bucket for 60
                      seconds.{" "}
                    </li>
                    <li>
                      After precisely 60 seconds, turn off the tap and measure
                      how much water is in the bucket.
                    </li>
                  </ol>
                </li>
                <li>
                  <p className="text-base font-bold">
                    Making your final decision
                  </p>
                  <p>
                    Once you have determined each outlet&apos;s water demand,
                    you can compare the demands and work out your highest usage.
                    The size of your geyser is determined by the flow rate of
                    the outlet that delivers the most water into the bucket. If
                    you slow down your flow rate (for example, a smaller
                    showerhead), you can reduce your flow rate demand.
                  </p>
                </li>
              </ul>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Is one gas geyser enough for my entire house?
              </p>
              <article className="text-base text-gray-600 font-medium">
                YES! But there are a few things you need to consider:
                <ul className="list-disc text-sm font-normal pl-6">
                  <li>
                    It depends on the distance from the gas geyser to where you
                    want to use it.
                  </li>
                  <li>
                    One (1) gas geyser can supply two bathrooms if they are
                    within 10 metres from the geyser.
                  </li>
                  <li>
                    You should install another unit if the run is more than 5
                    metres from the geyser.
                  </li>
                  <li>
                    If your bathrooms are within 5m of the gas geyser, but your
                    kitchen is further, you can use one gas geyser for your
                    bathroom and a smaller one for the kitchen.
                  </li>
                </ul>
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Does HW24 offer financing?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Yes, we do offer financing through Mobicred. Please contact us
                by e-mail (info@hotwater24.com) or visit our website
                (www.hotwater24.com) for any questions on financing options.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                How much does it cost?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Hardware prices range from approximately R 5,2K for the 12-litre
                models to 12K for the 26-litre gas geyser. Please note that it
                is complicated to provide an accurate estimate for installation,
                as this depends on the size of your property, the mileage, and
                how your property is set up.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Gas supply: Cages & Cylinders
              </p>
              <article className="text-base text-gray-600 font-medium">
                Please be aware that the price mentioned above excludes the
                supply of gas, gas cylinders or gas cylinder cages. Depending on
                the current setup, you might also need a gas cylinder, gas cage
                and gas supply.
                <ul className="list-disc text-sm font-normal pl-6">
                  <li>
                    <span className="font-bold">Prices on gas cages </span>
                    (single or double 19kg and 48kg) range from R1.8K (single
                    19kg cage) to R3.5K (double 48kg).
                  </li>
                  <li>
                    Most gas suppliers want to exchange only, and without a
                    cylinder, they can charge up to a R1k deposit per cylinder
                    regardless of the size.
                  </li>
                  <li>
                    For LPG prices (June 2022), the market is offering between
                    R35 to R40 per kg.
                  </li>
                </ul>
                <p className="text-lg font-medium text-slate-700 py-2">
                  Plumbing
                </p>
                Our plumbing jobs range between R2,5 – R4kk depending on
                requirements and mileage. <br /> Please do drop us an e-mail
                (info@hotwater24.com) or visit our website (www.hotwater24.com)
                for any questions or pricing issues.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Can I use a gas geyser off-the-grid?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Gas geysers DO require electricity as it needs a spark to ignite
                the burner. However, the answer is Yes! Absolutely!. During
                power outages/load-shedding, consider a battery-operated or
                Uninterrupted Power Supply (UPS) operated gas heating system.{" "}
                <ul className="list-disc text-sm font-normal pl-6">
                  <li>
                    Our 12L and 16L gas geyser models are battery operated,
                    meaning that the battery (Duracell D) ignites a small amount
                    of gas with a continuous pulsating electric spark.
                  </li>
                  <li>
                    Our 20L and 26L gas geyser models operate through a small
                    backup power system like a UPS. A UPS compatible with the
                    20L and 26L gas geyser costs around R2,5k (excl. VAT).
                  </li>
                </ul>
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Where is the best location for my gas cylinder and gas geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Ensure that your gas geyser is installed by a qualified person
                following the installation instructions, and in compliance with
                Standards SANS837 (for NG) and SANS10087 (for LPG), as
                applicable under local regulations and all local codes, bylaws
                and regulatory authority requirements. If in doubt, check with
                the relevant authority before undertaking the installation.{" "}
                <ul className="list-disc font-normal text-gray-600 pl-6">
                  <li>
                    <p className="text-base font-bold">Gas geyser location</p>
                    <p>
                      Mount the gas geyser on a wall. In addition to being
                      installed according to SANS, install the gas geyser close
                      to where hot water will be used. Clearance must be allowed
                      for servicing of the gas geyser. The gas geyser must be
                      accessible without a ladder or scaffold. Make sure the
                      entire front panel can be removed for service. You must be
                      able to read the information on the rating plate.{" "}
                    </p>
                  </li>
                </ul>
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                How much do I save switching from an electric geyser to a gas
                geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Save up to 40-50% on your monthly electricity bills!! With the
                current electricity prices as well as the gas prices, the saving
                for an average household family (4 people) with average use
                (20kg of LPG a month) of hot water (5-10mins per day shower,
                twice a day) saving is 20%. <br /> Please{" "}
                <Link className="text-sky-500" href="/savings">
                  click here
                </Link>{" "}
                to calculate your savings and{" "}
                <Link
                  className="text-sky-500"
                  href="/blog/gas-geyser-slashes-electricity-consumption-by-20-percent"
                >
                  read our blog
                </Link>
                read our blog to learn more.{" "}
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Does a gas geyser make noise?
              </p>
              <article className="text-base text-gray-600 font-medium">
                A gas geyser makes extraordinarily little noise when in use.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What is the average use of gas when using a gas geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                The average use for an average household family (4 people)
                showering 5-10mins per day shower, twice a day, is estimated to
                be 20kg of LPG a month
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Who can I ask to install, service or maintain a gas geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                US, Hotwater24! We only work with certified installers
                registered with the LPG Association of South Africa. For safety
                and quality purposes of the installation work performed, every
                installation comes with a CoC (Certificate of Compliance) to
                guarantee your safety.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                What size cylinder is best for your gas geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                We recommend that you use a 19kg+ cylinder
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Why choose a gas geyser over a solar geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                Although solar geysers work well and are very efficient at
                heating water, there are times when either the demand for hot
                water is greater than the capacity of your solar geyser,
                typically when multiple people are relying on a single geyser
                for hot baths and showers (a solar geyser can only heat the tank
                once a day), or for periods of bad or overcast conditions when
                your solar geyser has not been able to produce enough hot water.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                When switching to a gas geyser, do I need to get rid of my old
                electrical geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                NO! However, your electric geyser will need to be decommissioned
                by a professional, registered and certified plumber.
              </article>
              <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                Can I convert my electrical geyser to a gas geyser?
              </p>
              <article className="text-base text-gray-600 font-medium">
                NO!
              </article>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};
export default page;
