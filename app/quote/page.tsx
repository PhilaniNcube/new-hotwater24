import Script from "next/script";
import NewLead from "./NewLead";
import { getGeysers } from "@/sanity/sanity-utils";



const page = async () => {


  const geysers = await getGeysers();

  console.log(geysers)



  return (
    <main className="container min-h-screen py-10">
      <Script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
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

      <NewLead geysers={geysers}  />
    </main>
  );
};
export default page;
