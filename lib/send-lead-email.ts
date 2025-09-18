import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface LeadEmailData {
  houseType: string;
  ownership: boolean | null;
  gasSupply: string;
  gasStove: boolean | null;
  gasWaterHeating: boolean | null;
  gasHeating: boolean | null;
  otherGasUse: string | null;
  locateOutside: boolean | null;
  gasGeyser: boolean | null;
  electricGeyser: boolean | null;
  solarGeyser: boolean | null;
  otherGeyser: string | null;
  standardShower: number | null;
  rainShower: number | null;
  bathtub: number | null;
  kitchenSink: number | null;
  bathroomSink: number | null;
  dishwasher: number | null;
  washingmachine: number | null;
  flowRate: number | null;
  offGrid: boolean | null;
  firstName: string;
  lastName: string;
  email: string;
  streetAddress: string | null;
  city: string;
  telephoneNumber: string;
  suburb: string;
  postalCode: string | null;
  completeSolution: boolean | null;
  product_id: string | null;
  installation: string;
  geyserPrice: number;
  monthlySavings: number;
  yearlySavings: number;
  geyserSize: number | null;
  installationCost: number;
  plumbingCost: number | null;
  bathrooms: number | null;
  cottage_bathrooms: number | null;
  cottageIncluded: boolean | null;
  electric_geysers: number | null;
  financing: string;
  comments: string;
  borehole_water: boolean;
  contactDay: string;
  contactTime: string;
}

export async function sendLeadEmail(data: LeadEmailData): Promise<boolean> {
  try {
    // Create a detailed summary of all form data for internal use
    const detailedSummary = `
CUSTOMER DETAILS:
------------------
First Name: ${data.firstName}
Last Name: ${data.lastName}
Email: ${data.email}
Street Address: ${data.streetAddress || "Not provided"}
City: ${data.city}
Suburb: ${data.suburb || "Not provided"}
Postal Code: ${data.postalCode || "Not provided"}
Telephone Number: ${data.telephoneNumber}

PROPERTY INFORMATION:
------------------
House Type: ${data.houseType || "Not provided"}
Ownership: ${data.ownership || "Not provided"}
Gas Supply: ${data.gasSupply ? "Yes" : "No"}
Locate Outside: ${data.locateOutside ? "Yes" : "No"}
Off Grid: ${data.offGrid ? "Yes" : "No"}
Borehole Water: ${data.borehole_water ? "Yes" : "No"}

CURRENT USAGE:
------------------
Gas Stove: ${data.gasStove ? "Yes" : "No"}
Gas Water Heating: ${data.gasWaterHeating ? "Yes" : "No"}
Gas Heating: ${data.gasHeating ? "Yes" : "No"}
Other Gas Use: ${data.otherGasUse || "None"}

CURRENT GEYSER TYPE:
------------------
Gas Geyser: ${data.gasGeyser ? "Yes" : "No"}
Electric Geyser: ${data.electricGeyser ? "Yes" : "No"}
Solar Geyser: ${data.solarGeyser ? "Yes" : "No"}
Other Geyser: ${data.otherGeyser || "None"}

WATER FIXTURES:
------------------
Standard Shower: ${data.standardShower || 0}
Rain Shower: ${data.rainShower || 0}
Bathtub: ${data.bathtub || 0}
Kitchen Sink: ${data.kitchenSink || 0}
Bathroom Sink: ${data.bathroomSink || 0}
Dishwasher: ${data.dishwasher || 0}
Washing Machine: ${data.washingmachine || 0}

QUOTE DETAILS:
------------------
Flow Rate: ${data.flowRate || "Not provided"}
Geyser Price: R${data.geyserPrice || 0}
Monthly Savings: R${data.monthlySavings || 0}
Yearly Savings: R${data.yearlySavings || 0}
Geyser Size: ${data.geyserSize || "Not specified"} litres
Installation Cost: R${data.installationCost || 0}
Plumbing Cost: R${data.plumbingCost || 0}
Complete Solution: ${data.completeSolution ? "Yes" : "No"}
Financing: ${data.financing || "Not specified"}

ADDITIONAL DETAILS:
------------------
Bathrooms: ${data.bathrooms || "Not specified"}
Cottage Bathrooms: ${data.cottage_bathrooms || "Not specified"}
Cottage Included: ${data.cottageIncluded ? "Yes" : "No"}
Electric Geysers: ${data.electric_geysers || "Not specified"}

CONTACT PREFERENCES:
------------------
Contact Day: ${data.contactDay || "Not specified"}
Contact Time: ${data.contactTime || "Not specified"}

COMMENTS:
------------------
${data.comments || "No additional comments"}
    `;

    // Send notification email to admin
    await resend.emails.send({
      from: "Hot Water 24 <noreply@hotwater24.com>",
      to: ["info@hotwater24.com"],
      subject: `New Lead: ${data.firstName} ${data.lastName} - ${data.city}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #d32f2f;">🔥 New Hot Water 24 Lead</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1976d2;">Customer Information</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.telephoneNumber}</p>
            <p><strong>Location:</strong> ${data.suburb}, ${data.city}</p>
            <p><strong>Preferred Contact:</strong> ${data.contactTime}</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #388e3c;">Quote Summary</h3>
            <p><strong>Geyser Size:</strong> ${
              data.geyserSize || "Not specified"
            } litres</p>
            <p><strong>Estimated Price:</strong> R${data.geyserPrice || 0}</p>
            <p><strong>Monthly Savings:</strong> R${
              data.monthlySavings || 0
            }</p>
            <p><strong>Installation Cost:</strong> R${
              data.installationCost || 0
            }</p>
          </div>
          <details style="margin: 20px 0;">
            <summary style="cursor: pointer; font-weight: bold; color: #1976d2;">Full Lead Details</summary>
            <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; font-size: 12px; overflow-x: auto;">${detailedSummary}</pre>
          </details>
        </div>
      `,
    });

    // Send confirmation email to customer
    await resend.emails.send({
      from: "Hot Water 24 <noreply@hotwater24.com>",
      to: [data.email],
      subject: "Thank you for your interest in Hot Water 24",
      html: `
        <div>
          <img
            src="http://cdn.mcauto-images-production.sendgrid.net/622b9324edf69236/b96619d1-872f-4b3f-ba0d-0908a77a2320/600x225.jpg"
            alt="banner"
          />
          <div style="padding-left: 20px; margin-top: 20px; font-size: 16px; max-width: 600px;">
            <h1 style="font-size: 24px; font-weight: bold;">Hi ${data.firstName}!</h1>
            <p>
              <strong>
                Thank you for completing our questionnaire. Based on the information
                provided, we will soon send you a comprehensive (costing) proposal
                regarding the installation for a gas water heating solution for your
                property.
              </strong>
            </p>
          </div>
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.error("Failed to send lead email:", error);
    return false;
  }
}
