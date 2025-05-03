import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

interface FaqItem {
  question: string
  answer: React.ReactNode
  category: string
}

interface FaqSectionProps {
  title?: string
  description?: string
  faqs?: FaqItem[]
  showCategories?: boolean
}

export default function FaqSection({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about gas geysers, installations, and more.",
  faqs = defaultFaqs,
  showCategories = true,
}: FaqSectionProps) {
  // Group FAQs by category
  const categories = showCategories ? Array.from(new Set(faqs.map((faq) => faq.category))) : ["All"]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-8 md:mt-12">
          {showCategories && (
            <div className="mb-8">
              {categories.map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="text-xl font-bold mb-4">{category}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs
                      .filter((faq) => faq.category === category)
                      .map((faq, index) => (
                        <AccordionItem key={index} value={`${category}-item-${index}`}>
                          <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}

          {!showCategories && (
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  )
}

const defaultFaqs: FaqItem[] = [
  // GAS GEYSERS
  {
    question: "What is a gas geyser and how does it work?",
    answer: (
      <div>
        <p>A Gas Geyser is a water heating system that runs on LPG or Natural Gas.</p>
        <p className="mt-2">
          The traditional gas geyser does not have a reservoir to store hot water. Instead, it heats the water
          instantly/ on-demand. If someone opens the hot tap, the gas geyser will activate and send hot water to the
          tap. The gas geyser will deactivate when the tap is closed and stop producing hot water.
        </p>
        <p className="mt-2">
          <Link
            href="https://www.hotwater24.com/news/how-does-a-tankless-gas-water-heater-works"
            className="text-primary underline"
          >
            Read more about how a gas geyser works
          </Link>
        </p>
      </div>
    ),
    category: "GAS GEYSERS",
  },
  {
    question: "Does a gas geyser require electricity to operate?",
    answer: (
      <div>
        <p>
          <strong>Yes:</strong> the larger size gas geysers (20L/min & 26L/min) are often referred as fan-forced gas
          geysers. These gas geysers require small amounts of electricity for the ignition and the fan.
        </p>
        <p className="mt-2">
          Fan-forced gas geysers use between 50W-65W of power (equal to a light bulb) and therefore can easily be
          installed to your Solar PV/ Inverter system/ a UPS or a generator. The plug point is generally installed close
          to the gas geyser.
        </p>
        <p className="mt-2">
          <strong>No:</strong> the smaller size gas geysers (6L/min – 18l/min) operate either with a battery or use
          hydro-generated power (Bosch models).
        </p>
      </div>
    ),
    category: "GAS GEYSERS",
  },
  {
    question: "What type of gas does your gas geyser use?",
    answer: "Gas geysers typically use either propane (LPG) or natural gas (methane) as their fuel source.",
    category: "GAS GEYSERS",
  },
  {
    question: "Is LPG safe to use?",
    answer:
      "YES! LPG is very safe to use for your property. However, ensure that all the necessary guidelines are followed during installation, including the issue of CoC (Certificate of Compliance) and have regular - a least once a year - repairs and maintenance.",
    category: "GAS GEYSERS",
  },
  {
    question: "What size gas geyser do I need for my property/home?",
    answer: (
      <div>
        <p>
          This depends on your household's hot water usage. A professional installer can assess your needs based on the
          number of people and usage patterns in your home.
        </p>
        <p className="mt-2">Below the size gas geyser we at Hotwater24 use as an indication:</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>1 kitchen tap: 8L/min</li>
          <li>1 shower: 12L/min</li>
          <li>1 cottage/ 1 bathroom: 16L/min</li>
          <li>2 bathrooms and kitchen tap: 20L/min</li>
          <li>3 bathrooms and kitchen tap: 26L/min</li>
          <li>
            &gt;3bathrooms: you are looking at a Commercial unit (28L/min or 32L/min) combination of the above-mentioned
            gas geysers
          </li>
        </ol>
        <p className="mt-2">
          <Link href="https://www.hotwater24.com/#packages" className="text-primary underline">
            View our available packages
          </Link>
        </p>
      </div>
    ),
    category: "GAS GEYSERS",
  },
  {
    question: "What is the life span of a gas geyser?",
    answer:
      "If a gas geyser is well maintained, and serviced/maintained yearly or bi-annually, you are looking at a life span of approximately 15-20 years.",
    category: "GAS GEYSERS",
  },
  {
    question: "What gas geysers in South Africa are the best?",
    answer: (
      <div>
        <p>
          For the best quality gas geysers, we highly recommend Rinnai, Paloma, Bosch, Typhoon or Dewhot. These gas
          geysers have proven to be reliable, durable, perform at a high efficiency, great aftersales support and
          warranty.
        </p>
        <p className="mt-2">
          <Link href="https://www.hotwater24.com/#brands" className="text-primary underline">
            View the best quality gas geysers
          </Link>
        </p>
      </div>
    ),
    category: "GAS GEYSERS",
  },
  {
    question: "Do gas geysers require a weather cover?",
    answer:
      "Not all gas geysers require a weather cover when installed outdoors. For the smaller units 6L/min – 18L/min that are not Fan-Forced and operate on batteries we often install the gas geyser with a weather cover. Fan-forced gas geyser often don't require a weather cover.",
    category: "GAS GEYSERS",
  },
  {
    question: "Do I need to service my gas geyser regularly?",
    answer:
      "Yes, regular servicing ensures efficient and safe operation. Follow the manufacturer's recommendations or consult your installer for service intervals, however recommendation is to service your gas geyser every year.",
    category: "GAS GEYSERS",
  },
  {
    question: "Is there a warranty on the gas geysers?",
    answer:
      "Yes, most manufacturers offer warranties on their appliances, and reputable installers often provide warranties on their installation workmanship.",
    category: "GAS GEYSERS",
  },
  {
    question: "Does a gas geyser make noise?",
    answer: "A gas geyser makes very little noise when in use.",
    category: "GAS GEYSERS",
  },
  {
    question: "What happens if my gas geyser malfunctions?",
    answer:
      "Contact your installer immediately. Do not attempt repairs yourself, as this could void warranties or compromise safety.",
    category: "GAS GEYSERS",
  },
  {
    question: "Can one convert an electric geyser to a gas geyser?",
    answer: "No",
    category: "GAS GEYSERS",
  },

  // GAS GEYSERS - INSTALLATIONS
  {
    question: "What are the requirements to install a gas geyser?",
    answer: (
      <div>
        <Link
          href="https://www.hotwater24.com/news/installing-a-gas-geyser-key-requirements"
          className="text-primary underline"
        >
          Read all about the requirements for a gas geyser installation
        </Link>
      </div>
    ),
    category: "GAS GEYSERS - INSTALLATIONS",
  },
  {
    question: "Is there a warranty on the gas geyser installation?",
    answer: "Yes, we offer a 3-month warranty on our installations.",
    category: "GAS GEYSERS - INSTALLATIONS",
  },
  {
    question: "Can a gas geyser be installed on an upper floor of a building?",
    answer: "Yes",
    category: "GAS GEYSERS - INSTALLATIONS",
  },
  {
    question: "Does a gas geyser installation require separate plumbing?",
    answer:
      "No, when installing the gas geyser we tap into the existing system of the already existing property/ house.",
    category: "GAS GEYSERS - INSTALLATIONS",
  },
  {
    question: "How long does it take to install a gas geyser?",
    answer:
      "Installation times can vary depending on the complexity of the job, but a typical installation may take a few hours to 1 day to complete.",
    category: "GAS GEYSERS - INSTALLATIONS",
  },
  {
    question: "Can I install a gas geyser myself if I'm experienced with DIY projects?",
    answer:
      "It's strongly advised against installing your own gas geyser. Gas installations require specific expertise and certification to ensure safety and compliance with regulations.",
    category: "GAS GEYSERS - INSTALLATIONS",
  },
  {
    question: "Can I install a gas geyser indoors?",
    answer:
      "Yes, you can install it indoors, but proper ventilation is essential to prevent the buildup of carbon monoxide. Follow manufacturer and local safety guidelines.",
    category: "GAS GEYSERS - INSTALLATIONS",
  },
  {
    question: "Where is the gas geyser installed?",
    answer:
      "Most gas geysers are installed on the outside wall of your house/ property. In addition to being installed according to SANS, gas geysers are often installed close to where hot water will be used.",
    category: "GAS GEYSERS - INSTALLATIONS",
  },
  {
    question: "How much does a gas geyser installation cost (estimate)?",
    answer: (
      <div>
        <Link href="https://www.hotwater24.com/#packages" className="text-primary underline">
          Get an idea of the costing of installing different size gas geysers for your property
        </Link>
      </div>
    ),
    category: "GAS GEYSERS - INSTALLATIONS",
  },

  // GAS CYLINDERS
  {
    question: "What are the regulations to place a gas cylinder?",
    answer: (
      <div>
        <p>Cylinders shall be located on a firm, clean, well-drained and level base platform.</p>
        <p className="mt-2">
          The area surrounding a container shall be kept clear of combustible materials, for example, weeds, dry grass,
          paper and waste.
        </p>
        <p className="mt-2">
          Cylinders shall be located and protected against tampering by unauthorized persons as well as damage and
          interference by, for example, animals and vehicles.
        </p>
        <p className="mt-2">
          Below diagram explains a more accurate on the exact requirements and
          dimensions:
        </p>
        <img
          src="/images/geyser-location.png"
          alt="Gas Cylinder Location"
          className="mt-4 w-full max-w-[600px] mx-auto"
        />
      </div>
    ),
    category: "GAS CYLINDERS",
  },
  {
    question: "What cylinder sizes are suitable for a gas geyser?",
    answer: (
      <div>
        <ul className="list-disc pl-5 space-y-1">
          <li>For a 6L/min – 18L/min a 19kg gas cylinder is recommended</li>
          <li>For a larger size (fan-forced) gas geyser (20L/min and higher) a 48kg gas cylinder is recommended.</li>
        </ul>
        <p className="mt-2">For free-standing properties, the maximum cylinder size permitted is 100kg.</p>
      </div>
    ),
    category: "GAS CYLINDERS",
  },
  {
    question: "How much does a gas cylinder cost?",
    answer:
      "This often differs between regions/ provinces, but in general the price for a 19kg gas cylinder (including gas supply) lies around R1,6k and for a 48kg gas cylinder around R3.5k.",
    category: "GAS CYLINDERS",
  },
  {
    question: "How much does gas cage cost?",
    answer:
      "For safety and security reasons it is advisable (but not required by SANS Safety Standards) to lock up your cylinders in a gas cage. Prices depend on the quality and size, but in general do range between R1.8K (for a single 19kg cage) to R3.5K (for a double 48kg).",
    category: "GAS CYLINDERS",
  },
  {
    question: "How long will last me a 48kg gas cylinder?",
    answer: (
      <div>
        <p>
          This depends strongly on the number of family members, temperature setting on the gas geyser, the length of
          showers, number of baths you like to take, etc.
        </p>
        <p className="mt-2">
          However, from experience we experience that a 48kg gas cylinder should last between 2-3months.
        </p>
        <p className="mt-2">
          The average use for a household family (4 people) is estimated to be 20kg of LPG a month.
        </p>
        <p className="mt-2">
          When used in conjunction with a solar geyser, this can even go up to 5-6months and even longer….
        </p>
      </div>
    ),
    category: "GAS CYLINDERS",
  },

  // SAFETY & REGULATIONS
  {
    question: "Do I need a Certificate of Compliance/Conformity (CoC) for my gas installation?",
    answer: (
      <div>
        <p>
          A CoC is proof that your gas installation is safe and complies with the rules and regulations laid out in the
          South African National Standards (SANS) 10087-1.
        </p>
        <p className="mt-2">
          The law requires that you be in possession of a CoC for gas installations at all times, as does your insurance
          company. If your property suffers damage from a gas fault, your insurance company will expect you to produce a
          valid certificate. Not being able to produce one may invalidate your claim.
        </p>
      </div>
    ),
    category: "SAFETY & REGULATIONS",
  },
  {
    question: "When must a CoC be issued?",
    answer: (
      <div>
        <p>A Certificate of Conformity (CoC) must be issued for a PERMANENT installation:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>On completion of a new gas installation,</li>
          <li>After any modification, alteration or maintenance of an existing gas installation,</li>
          <li>
            On change of ownership of a property housing an existing gas installation. (When you sell your property).
          </li>
        </ul>
      </div>
    ),
    category: "SAFETY & REGULATIONS",
  },
  {
    question: "Do I need a professional to install my gas geyser?",
    answer:
      "Yes, it's crucial to hire a qualified gas installer who is registered with the LPGSA (Liquefied Petroleum Gas Safety Association) to ensure safety and compliance with local regulations.",
    category: "SAFETY & REGULATIONS",
  },
  {
    question: "What is a permanent gas installation?",
    answer:
      "Legislation deems a permanent gas installation to be a gas installation that is a fixture in a building, immovable and not of a temporary nature. This would include all build-in gas equipment – Gas fires, Heaters, Gas Braais, Stoves, Ovens and Hot water systems (gas geyser). Movable gas heaters and gas braais on wheels are seen as temporary and do not require a CoC.",
    category: "SAFETY & REGULATIONS",
  },
  {
    question: "How long is a CoC valid for?",
    answer: (
      <div>
        <ul className="list-disc pl-5 space-y-1">
          <li>A CoC is valid for five years, provided the installation has not been altered.</li>
          <li>Any alterations done to your gas installation requires issuing a new CoC for the ENTIRE system.</li>
          <li>An installation must be inspected, and a CoC issued when a property is sold</li>
        </ul>
      </div>
    ),
    category: "SAFETY & REGULATIONS",
  },
  {
    question: "Is a gas cage required?",
    answer:
      "Domestic installations do not require according to SANS standard that the cylinders be placed in a cage but shall be secured in such a manner so as not to accidentally fall over (Eg: Anchor and chain).",
    category: "SAFETY & REGULATIONS",
  },
  {
    question: "Can I install a gas geyser at a house with a thatched roof?",
    answer: (
      <div>
        <p>
          Installing a gas geyser in a house with a thatched roof is generally possible, but it requires careful
          consideration of safety and regulatory requirements and needs to be performed by a professional and certified
          installer.
        </p>
        <p className="mt-2">
          Gas cylinders shall not be installed directly under the eaves of thatched roof and shall be not less than 3 m
          away from eaves of the thatched roof behind a firewall.
        </p>
        <img
          src="/images/thatch-geyser.png"
          alt="Gas Cylinder Location Thatched Roof"
          className="mt-4 w-full max-w-[600px] mx-auto"
        />
      </div>
    ),
    category: "SAFETY & REGULATIONS",
  },
  {
    question: "How much kg's of LPG gas am I allowed?",
    answer: (
      <div>
        <p>
          You are not allowed to have over 100kg of "fixed" LPG gas cylinders at your property. If you plan to install
          over 100kg of LPG gas, you will require planning submission and approval in terms of the "National Building
          Regulations and Building Standards Act" as well as certification in terms of the "Community Fire Safety
          By-law" and its amendments.
        </p>
        <p className="mt-2">
          Please do consult your local municipality regarding these regulations as they might differ between
          municipalities.
        </p>
      </div>
    ),
    category: "SAFETY & REGULATIONS",
  },

  // ADVANTAGES GAS GEYSER
  {
    question: "Does switching from a electric geyser to a gas geyser save me money?",
    answer: (
      <div>
        <p>
          Switching from an electric geyser to a gas geyser can result in significant cost savings, especially with the
          rising cost of electricity in South Africa.
        </p>
        <p className="mt-2">
          To calculate the potential savings, we need to compare the operating costs of both systems.
        </p>
        <p className="mt-2">
          <strong>Factors to Consider:</strong>
        </p>
        <p className="mt-2">
          <strong>1. Electric Geyser Costs:</strong>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Electricity Monthly Usage: To heat 150litres of hot water per day for one month, the electric units used are
            270kWh.
          </li>
          <li>
            Electricity Tariff: According to its latest publicly available data on electricity prices, South Africa's
            average per-kWh electricity tariff for households stood at roughly R3.30 by December 2023
          </li>
          <li>Monthly Expense: 270kWh × R3.30 = R891.00/month</li>
        </ul>
        <p className="mt-2">
          <strong>2. Gas Geyser Costs:</strong>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Gas Consumption: To heat 150litres of hot water per day for one month, the gas used is 15kg</li>
          <li>
            Gas Price: The cost of LPG is around R36 per kilogram in South Africa (prices fluctuate with market
            conditions).
          </li>
          <li>Monthly Expense: 15kg × R36.00 = R540.00/month</li>
        </ul>
        <p className="mt-2 font-bold">
          Monthly saving by switching from an electrical geyser to a gas geyser is R351.00, which is almost 40%!
        </p>
      </div>
    ),
    category: "ADVANTAGES GAS GEYSER",
  },
  {
    question: "Can you use a gas geyser as a back-up for your solar geyser?",
    answer: (
      <div>
        <p>
          YES! A gas geyser can be used as a backup for a solar geyser. This setup ensures a continuous supply of hot
          water during times when the primary system is giving you insufficient hot water (during winter/ overcast
          weather) or unavailable.
        </p>
        <p className="mt-2">
          By installing a solar-to-gas valve the hot water is either being directed straight into the house (when water
          has the desired temperature), or in case the water is too cold, the water will first be directed from the
          electric or solar geyser to the gas geyser to heat up the water to the desired temperature.
        </p>
        <p className="mt-2">
          <Link
            href="https://www.hotwater24.com/news/why-you-should-consider-installing-a-gas-geyser-as-a-backup-for-your-solar-geyser"
            className="text-primary underline"
          >
            Learn more about using a gas geyser as backup for your solar geyser
          </Link>
        </p>
      </div>
    ),
    category: "ADVANTAGES GAS GEYSER",
  },
  {
    question: "Do I need to permanently decommission or switch of your electric geyser when I install a gas geyser?",
    answer: (
      <div>
        <p>
          No, the electric geyser can still be part of the hot water supply system. When installing the gas geyser, we
          switch off the electric geyser from the DB board (preventing you from getting these high electricity bills).
        </p>
        <p className="mt-2">
          In case you forget to fill up your gas cylinder, you can then simply switch on the electric geyser from the DB
          board, wait for 1-1.5hours and still enjoy hot water.
        </p>
        <p className="mt-2">
          <Link
            href="https://www.hotwater24.com/news/ensuring-a-reliable-hot-water-supply"
            className="text-primary underline"
          >
            Read more about ensuring a reliable hot water supply
          </Link>
        </p>
      </div>
    ),
    category: "ADVANTAGES GAS GEYSER",
  },
]
