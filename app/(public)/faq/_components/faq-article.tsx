import { Button } from "@/components/ui/button";
import { antonio } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/W0GVTA04IvJ
 */
export default function FaqArticle() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="max-w-6xl mx-auto prose prose-zinc dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1
            className={cn(
              "text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]",
              antonio.className
            )}
          >
            Frequently Asked Questions
          </h1>
          {/* <p className="text-zinc-500 dark:text-zinc-400">
            Posted on November 10, 2023
          </p> */}
        </div>
        <Image
          alt="Cover image"
          className="aspect-video w-[500px] overflow-hidden rounded-lg object-cover my-3"
          height="340"
          src="/images/faq.jpg"
          width="1250"
        />
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What is a gas geyser?
        </h2>
        <p className="text-base">
          A Gas Geyser, also known as a Gas geyser, is a water heating system
          that runs on gas. The traditional gas geyser does not have a reservoir
          to store hot water. Instead, it heats the water instantly/ on-demand.
          If someone opens the hot tap, the gas geyser will activate and send
          hot water to the tap. The gas geyser will deactivate when the tap is
          closed and stop producing hot water.
        </p>
        <p className="text-base">
          Click on the link below to get more information of how a gas geyser
          works
        </p>
        <Link
          className="text-lg font-medium text-center text-blue-600 underline"
          href="/#tankless"
        >
          How Does A Tankless Gas Water Heater Work
        </Link>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Does the size of the gas geyser matter?
        </h2>
        <p className="text-base">
          The size of the geyser does matter as it depends on the number of hot
          water taps and amount of bathrooms [showers/baths/basins] that you may
          want to run water simultaneously.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do you need electricity for gas geysers?
        </h2>
        <p className="text-lg font-semibold">Yes and no</p>
        <p className="text-base">
          Yes: the larger size gas geysers (20L/min & 26L/min) are often
          referred as fan-forced gas geysers. These gas geysers require small
          amounts of electricity for the ignition and the fan.{" "}
        </p>
        <p className="text-base">
          No; the smaller size gas geysers (8L/min – 18l/min) The non-fan forced
          gas geysers come are the smaller units (12L/min to 18L/min), operate
          either with a battery or use hydro-generated power (Bosch models).
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do fan forced gas geyser need a lot of electricity?
        </h2>
        <p className="text-base">
          Fan-forced gas geysers use between 50W-65W of power (equal to a light
          bulb) and therefore can easily be installed to your Solar PV/ Inverter
          system/ a UPS or a generator. The plug point is generally installed
          close to the gas geyser.
        </p>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What size gas geyser do I need for my home?
        </h2>
        <p className="text-base">
          This depends on your household's hot water usage. A professional
          installer can assess your needs based on the number of people and
          usage patterns in your home.
        </p>
        <p className="text-base">
          Below the size gas geyser we at Hotwater24 use as an indication:
        </p>
        <ol className="pl-10 mt-2 text-sm list-decimal inset-4">
          <li>1 kitchen tap: 8L/min</li>
          <li>1 shower: 12L/min</li>
          <li>1 cottage/ 1 bathroom: 16L/min</li>
          <li>2 bathrooms and kitchen tap: 20L/min</li>
          <li>3 bathrooms and kitchen tap: 26L/min</li>
          <li>
            {`>`}3 bathrooms: you are looking at a combination of the above
            mentioned gas geysers
          </li>
        </ol>
        <Link
          className="text-lg font-medium text-center text-blue-600 underline"
          href="/#packages"
        >
          Here is a link for the packages we offer:
        </Link>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What is the life span of a gas geyser?
        </h2>
        <p className="text-base">
          If the gas geyser is well maintained, and serviced/maintained yearly,
          you are looking at a life span of approximately 15-20 years
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do I need to service my gas geyser regularly?
        </h2>
        <p className="text-base">
          Yes, regular servicing ensures efficient and safe operation. Follow
          the manufacturer's recommendations or consult your installer for
          service intervals.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Which gas geysers are the best?
        </h2>
        <p className="text-base">
          For the best quality gas geysers, we highly recommend Rinnai, Paloma,
          Bosch, Typhoon or Dewhot. They do come at a higher price, however with
          these models offer durability, higher efficiency, better aftersales
          support and better warranty.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          In which cities do we provide installation services?
        </h2>
        <p className="text-base">
          Currently we have installers based in various areas of Pretoria,
          Johannesburg and Cape Town.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Can one convert an electric geyser to a gas geyser?
        </h2>
        <p className="text-base">No, you can’t</p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Can you use a gas geyser as a back-up for your electric geyser or
          solar geyser?
        </h2>
        <p className="text-base">
          YES! A gas geyser can be used as a backup for an electric or solar
          geyser. This setup ensures a continuous supply of hot water during
          times when the primary system is giving you insufficient hot water
          (during winter/ overcast weather) or unavailable.
        </p>
        <p className="text-base">
          By installing a solar-to-gas valve the hot water is either being
          directed straight into the house (when water has the desired
          temperature), or in case the water is too cold, the water will first
          be directed from the electric or solar geyser to the gas geyser to
          heat up the water to the desired temperature.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do I need to permanently decommission or switch of your electric
          geyser when I install a gas geyser?
        </h2>
        <p className="text-base">
          NO! The electric geyser can still be part of the hot water supply
          system. When installing the gas geyser, we switch off the electric
          geyser from the DB board (preventing you from getting these high
          electricity bills).
        </p>
        <p className="text-base">
          In case you forget to fill up your gas cylinder, you can then simply
          switch on the electric geyser from the DB board, wait for 1-1.5hours
          and still enjoy hot water.
        </p>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do we offer weather covers for gas geysers?
        </h2>
        <p className="text-base">
          Yes, we do install weather covers depending on the type and brand of
          gas geyser required
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What type of gas do your gas geysers use?
        </h2>
        <p className="text-base">
          Gas geysers typically use either propane (LPG) or natural gas
          (methane) as their fuel source.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Is LPG safe to use?
        </h2>
        <p className="text-base">
          YES! LPG is very safe to use for your property. However, ensure that
          all the necessary guidelines are followed during installation,
          including the issue of CoC (Certificate of Compliance) and have
          regular - a least once a year - repairs and maintenance.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Why use LPG?
        </h2>
        <p className="text-base">
          Please click on this link so you can read all about why using LPG is a
          very sensible thing to do:{" "}
          <Link href="/why-us">https://www.hotwater24.com/why-us</Link>
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do I need a Certificate of Compliance/Conformity (CoC) for my gas
          installation?
        </h2>
        <p className="text-base">
          A CoC is proof that your gas installation is safe and complies with
          the rules and regulations laid out in the South African National
          Standards (SANS) 10087-1.
        </p>
        <p className="text-base">
          The law requires that you be in possession of a CoC for gas
          installations at all times, as does your insurance company. If your
          property suffers damage from a gas fault, your insurance company will
          expect you to produce a valid certificate. Not being able to produce
          one may invalidate your claim.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          When must a CoC be issued?
        </h2>
        <p className="text-base">
          A Certificate of Conformity (CoC) must be issued for a PERMANENT
          installation:
        </p>
        <ol className="pl-10 mt-2 text-sm list-disc inset-4">
          <li>On completion of a new gas installation</li>
          <li>
            After any modification, alteration or maintenance of an existing gas
            installation,
          </li>
          <li>
            On change of ownership of a property housing an existing gas
            installation. (When you sell your property).
          </li>
        </ol>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do I need a professional to install my gas geyser?
        </h2>
        <p className="text-base">
          Yes, it's crucial to hire a qualified gas installer who is registered
          with the LPGSA (Liquefied Petroleum Gas Safety Association) to ensure
          safety and compliance with local regulations.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What permits or approvals are required for installing a gas geyser?
        </h2>
        <p className="text-base">
          You typically need a Certificate of Compliance (COC) from the
          installer, stating that the installation meets safety standards and
          complies with local regulations.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What is a permanent gas installation?
        </h2>
        <p className="text-base">
          Legislation deems a permanent gas installation to be a gas
          installation that is a fixture in a building, immovable and not of a
          temporary nature. This would include all build-in gas equipment – Gas
          fires, Heaters, Gas Braais, Stoves, Ovens and Hot water systems (gas
          geyser). Movable gas heaters and gas braais on wheels are seen as
          temporary and do not require a CoC.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          How long is a CoC valid for?
        </h2>
        <ol className="pl-10 mt-2 text-sm list-disc inset-4">
          <li>
            A CoC is valid for five years, provided the installation has not
            been altered.
          </li>
          <li>
            Any alterations done to your gas installation requires issuing a new
            CoC for the ENTIRE system.
          </li>
          <li>
            An installation must be inspected, and a CoC issued when a property
            is sold.
          </li>
        </ol>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What are the cylinder size limits?
        </h2>
        <ol className="pl-10 mt-2 text-sm list-disc inset-4">
          <li>In flats, the maximum cylinder size allowed is 9kg.</li>
          <li>Inside a house, the maximum cylinder size is 19kg.</li>
          <li>
            For free-standing properties, the maximum cylinder size permitted is
            100kg.
          </li>
        </ol>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          How much does a gas geyser installation roughly cost?
        </h2>{" "}
        <p className="text-base">
          Please click on the link below to get an idea of the costing of
          installing different size gas geysers for your property:
        </p>{" "}
        <Link
          className="text-lg font-medium text-center text-blue-600 underline"
          href="/#packages"
        >
          Here is a link for the packages we offer:
        </Link>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          How much doe s gas cylinder and/ or gas cages cost?
        </h2>{" "}
        <p className="text-base">
          <strong>Prices on gas cages:</strong> For safety and security reasons
          it is advisable (but not required by SANS Safety Standards) to lock up
          your cylinders in a gas cage. Prices depend on the quality and size,
          but in general do range between R1.8K (for a single 19kg cage) to
          R3.5K (for a double 48kg).
        </p>{" "}
        <p className="text-base">
          <strong>Prices on gas cylinders: </strong> This often differs between
          regions/ provinces, but in general range between R1,6k for a single
          19kg (including deposit and gas supply) and R3k for a single 48kg
          (including deposit and gas supply).
        </p>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Where is the gas geyser installed?
        </h2>{" "}
        <p className="text-base">
          Most gas geysers. are installed on the outside wall of your house/
          property. In addition to being installed according to SANS, gas
          geysers are often installed close to where hot water will be used.
        </p>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Where does the gas cylinder need to be positioned?
        </h2>{" "}
        <p className="text-base">
          Please find below picture of where the gas cylinders are, according to
          the SANS are allowed:
        </p>
        <Image
          alt="Gas Cylinder Position"
          className="object-cover w-full my-4 overflow-hidden rounded-lg lg:w-3/5"
          height="625"
          src="/images/diagram.png"
          width="936"
          loading="lazy"
          quality="70"
        />{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do I save money when switching from an electrical geyser to a gas
          geyser?
        </h2>{" "}
        <p className="text-base">
          Yes! You can save up to 25% and in future even up to 30% (due to
          increasing cost of electricity) when switching from an electric geyser
          to a gas geyser
        </p>
        <p className="text-base">
          Please <Link href="/savings">click here</Link> to calculate your
          saving
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Does a gas geyser make noise?
        </h2>{" "}
        <p className="text-base">
          A gas geyser makes very little noise when in use.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What is the average use of gas when using a gas geyser?
        </h2>{" "}
        <p className="text-base">
          The average use for a household family (4 people) is estimated to be
          20kg of LPG a month.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What size cylinder is best for your gas geyser?
        </h2>{" "}
        <p className="text-base">
          We recommend that you use a 19kg with a 12L/min tot a 18L/min gas
          geyser and a 48kg gas cylinder with a Fan-forced gas geyser {`>`}
          20L/min.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Why choose a gas geyser over a solar geyser?
        </h2>{" "}
        <p className="text-base">
          Although solar geysers work well and are very efficient at heating
          water, there are times when either the demand for hot water is greater
          than the capacity of your solar geyser, typically when multiple people
          are relying on a single geyser for hot baths and showers (a solar
          geyser can only heat the tank once a day), or for periods of bad or
          overcast conditions when your solar geyser is not able to produce
          enough hot water.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          How long will last me a 48kg gas cylinder?
        </h2>{" "}
        <p className="text-base">
          This depends strongly on the number of family members, temperature
          setting on the gas geyser, if you like to take long or short showers,
          if you like your baths, etc….
        </p>
        <p className="text-base">
          However when all being taken in moderation, we see that a 48kg gas
          cylinder lasts between 2-3months.
        </p>
        <p className="text-base">
          When used in conjunction with a solar geyser, this can even go up to
          5-6 months and even longer….
        </p>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Can I install a gas geyser indoors?
        </h2>{" "}
        <p className="text-base">
          Yes, you can install it indoors, but proper ventilation is essential
          to prevent the buildup of carbon monoxide. Follow manufacturer and
          local safety guidelines.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What are the advantages of a gas geyser over an electric one?
        </h2>{" "}
        <p className="text-base">
          Gas geysers often provide faster heating and are more
          energy-efficient, potentially reducing utility costs over time.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Are there any disadvantages to installing a gas geyser?
        </h2>{" "}
        <p className="text-base">
          Initial installation costs can be higher than electric heaters, and
          there are safety considerations with gas appliances that require
          careful handling.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          How long does it take to install a gas geyser?
        </h2>{" "}
        <p className="text-base">
          Installation times can vary depending on the complexity of the job,
          but a typical installation may take a few hours to 1 day to complete.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Can I install a gas geyser myself if I'm experienced with DIY
          projects?
        </h2>{" "}
        <p className="text-base">
          It's strongly advised against. Gas installations require specific
          expertise and certification to ensure safety and compliance with
          regulations.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do gas geysers require a different type of plumbing setup?
        </h2>{" "}
        <p className="text-base">
          No, the existing pipework is used to connect the gas geyser to. There
          are no major changes in the plumbing setup needed.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          How do I know if my home's gas supply is sufficient for a water
          heater?
        </h2>{" "}
        <p className="text-base">
          Your installer will assess your home's gas supply and advise if any
          upgrades are needed to support the water heater's requirements.
        </p>
        <p className="text-base">
          Every house(hold) has a different setup and needs a different size gas
          geyser, which obviously determines the cost.
        </p>
        <p className="text-base">
          By clicking on the link below Hotwater24 will guide you through some
          questions and based on the answers will send you a proposal entailing
          all initial information needed for a gas geyser installation:
        </p>
        <Link href="/quote/start">
          <Button className="my-4 uppercase rounded-full bg-brand">
            Get a Quote
          </Button>
        </Link>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What happens if my gas geyser malfunctions?
        </h2>{" "}
        <p className="text-base">
          Contact your installer immediately. Do not attempt repairs yourself,
          as this could void warranties or compromise safety.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Are there different types of gas geysers available in South Africa?
        </h2>{" "}
        <p className="text-base">
          Yes, options include instant gas geysers, storage tank gas geysers,
          and tankless gas geysers, each suited to different household needs and
          preferences.
        </p>
        <Link href="/#brands">
          <Button className="my-4 uppercase rounded-full bg-brand">
            View Brands
          </Button>
        </Link>{" "}
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Do I need to shut off my gas supply during installation?
        </h2>{" "}
        <p className="text-base">
          Yes, the gas supply should be turned off during installation to
          prevent leaks and ensure safety until the new system is properly
          connected and tested.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Can a gas geyser be installed on an upper floor of a building?
        </h2>{" "}
        <p className="text-base">
          Yes, but it requires proper ventilation and possibly additional
          structural considerations due to the weight and operational
          requirements of the heater.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Is there a warranty on the gas geyser and installation?
        </h2>{" "}
        <p className="text-base">
          Yes, most manufacturers offer warranties on their appliances, and
          reputable installers often provide warranties on their installation
          workmanship.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          How often should the gas lines and gas geysers be inspected?
        </h2>{" "}
        <p className="text-base">
          Gas lines and gas geysers should be inspected on a yearly basis as
          part of routine maintenance by a qualified gas technician to ensure
          they are leak-free and in good condition.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          What safety features should I look for in a gas geyser?
        </h2>{" "}
        <p className="text-base">
          Look for features like automatic shut-off valves, temperature
          controls, and venting systems designed to prevent carbon monoxide
          buildup.
        </p>
        <h2
          className={cn(
            "text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
            antonio.className
          )}
        >
          Can I install a gas geyser at a building with a thatched roof?
        </h2>{" "}
        <p className="text-base">
          Yes, you can install a gas geyser in a building with a thatched roof,
          but there are strict safety regulations and precautions that must be
          followed due to the fire risk associated with both gas and thatched
          roofs.
        </p>
        <p className="text-base">
          Please see picture below of the regulations by SANS.
        </p>{" "}
        <Image
          alt="Gas Cylinder Position"
          className="object-cover w-full my-4 overflow-hidden rounded-lg lg:w-2/5"
          height="742"
          src="/images/regulation.jpg"
          width="637"
          loading="lazy"
          quality="70"
        />{" "}
      </article>
    </div>
  );
}
