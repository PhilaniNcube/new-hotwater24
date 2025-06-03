import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/actions/lead-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    houseType,
    ownership,
    gasSupply,
    gasStove,
    gasWaterHeating,
    gasHeating,
    otherGasUse,
    locateOutside,
    gasGeyser,
    electricGeyser,
    solarGeyser,
    otherGeyser,
    standardShower,
    rainShower,
    bathtub,
    kitchenSink,
    bathroomSink,
    dishwasher,
    washingmachine,
    flowRate,
    offGrid,
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    telephoneNumber,
    suburb,
    postalCode,
    completeSolution,
    product_id,
    installation,
    geyserPrice,
    monthlySavings,
    yearlySavings,
    geyserSize,
    installationCost,
    plumbingCost,
    bathrooms,
    cottage_bathrooms,
    cottageIncluded,
    electric_geysers,
    financing,
    comments,
    borehole_water,
    contactDay,
    contactTime,
  } = body;
  try {
    // Create a detailed summary of all form data for internal use
    const detailedSummary = `
CUSTOMER DETAILS:
------------------
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Street Address: ${streetAddress}
City: ${city}
Suburb: ${suburb || "Not provided"}
Postal Code: ${postalCode || "Not provided"}
Telephone Number: ${telephoneNumber}

PROPERTY INFORMATION:
------------------
House Type: ${houseType || "Not provided"}
Ownership: ${ownership || "Not provided"}
Gas Supply: ${gasSupply ? "Yes" : "No"}
Locate Outside: ${locateOutside ? "Yes" : "No"}
Off Grid: ${offGrid ? "Yes" : "No"}
Borehole Water: ${borehole_water ? "Yes" : "No"}

CURRENT USAGE:
------------------
Gas Stove: ${gasStove ? "Yes" : "No"}
Gas Water Heating: ${gasWaterHeating ? "Yes" : "No"}
Gas Heating: ${gasHeating ? "Yes" : "No"}
Other Gas Use: ${otherGasUse || "None"}

CURRENT GEYSER TYPE:
------------------
Gas Geyser: ${gasGeyser ? "Yes" : "No"}
Electric Geyser: ${electricGeyser ? "Yes" : "No"}
Solar Geyser: ${solarGeyser ? "Yes" : "No"}
Other Geyser: ${otherGeyser || "None"}

WATER FIXTURES:
------------------
Standard Shower: ${standardShower ? "Yes" : "No"}
Rain Shower: ${rainShower ? "Yes" : "No"}
Bathtub: ${bathtub ? "Yes" : "No"}
Kitchen Sink: ${kitchenSink ? "Yes" : "No"}
Bathroom Sink: ${bathroomSink ? "Yes" : "No"}
Dishwasher: ${dishwasher ? "Yes" : "No"}
Washing Machine: ${washingmachine ? "Yes" : "No"}
Flow Rate: ${flowRate || "Not provided"}

BATHROOM & GEYSER DETAILS:
------------------
Total Bathrooms: ${bathrooms || "Not provided"}
Cottage/Flatlet Included: ${cottageIncluded !== null ? (cottageIncluded ? "Yes" : "No") : "Not provided"}
Cottage Bathrooms: ${cottage_bathrooms || "Not provided"}
Electric Geysers: ${electric_geysers || "Not provided"}

PRODUCT SELECTION:
------------------
Complete Solution: ${completeSolution ? "Yes" : "No"}
Product ID: ${product_id || "Not provided"}
Installation: ${installation ? "Yes" : "No"}
Geyser Size: ${geyserSize || "Not provided"}

PRICING INFORMATION:
------------------
Geyser Price: ${geyserPrice ? `R${geyserPrice}` : "Not provided"}
Installation Cost: ${installationCost ? `R${installationCost}` : "Not provided"}
Plumbing Cost: ${plumbingCost ? `R${plumbingCost}` : "Not provided"}
Monthly Savings: ${monthlySavings ? `R${monthlySavings}` : "Not provided"}
Yearly Savings: ${yearlySavings ? `R${yearlySavings}` : "Not provided"}

CONTACT PREFERENCES:
------------------
Preferred Contact Day: ${contactDay || "Not provided"}
Preferred Contact Time: ${contactTime || "Not provided"}

FINANCING & ADDITIONAL INFO:
------------------
Financing: ${financing || "Not provided"}
Comments: ${comments || "No additional comments"}
`;

    // Send customer-facing email
    const customerEmail = await resend.emails.send({
      from: "Hotwater 24 <info@hotwater24.com>",
      to: [email],
      subject: "Thank You for Your Interest | Hotwater 24",
      text: `Hi ${firstName}. Thank you for completing the questionnaire. Based on the information
					you provided, we will soon send you an initial (costing) proposal.`,
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        streetAddress,
        city,
        telephoneNumber,
      }) as unknown as React.ReactNode,
    });

    // Send detailed summary email to the company
    const internalEmail = await resend.emails.send({
      from: "Hotwater 24 <info@hotwater24.com>",
      to: ["info@hotwater24.com"],
      subject: `New Lead: ${firstName} ${lastName} - ${email}`,
      text: detailedSummary,
    });
    // Handle errors from either email
    if (customerEmail.error) {
      return NextResponse.json({ error: customerEmail.error }, { status: 500 });
    }

    if (internalEmail.error) {
      console.error(
        "Failed to send internal summary email:",
        internalEmail.error
      );
      // We don't return an error here to ensure the customer flow isn't disrupted
      // if only the internal email fails
    }

    // Log the response for debugging
    console.log("Customer Email Response:", customerEmail);
    console.log("Internal Email Response:", internalEmail);

    // Combine data from both emails for response
    const data = {
      customerEmail: customerEmail.data,
      internalEmail: internalEmail.data,
    };

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
