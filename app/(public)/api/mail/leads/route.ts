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
	} = body;

	try {
		const plainTextContent = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Street Address: ${streetAddress}
    City: ${city}
    Telephone Number: ${telephoneNumber}
  `;

		const { data, error } = await resend.emails.send({
			from: "Hotwater 24 <info@hotwater24.com>",
			to: [email, "info@hotwater24.com"],
			subject: "Contact | Hotwater 24",
			text: `Hi ${firstName}.	Thank you for completing the questionnaire. Based on the information
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

		if (error) {
			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}


}
