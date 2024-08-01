"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadEmailAction(formData: FormData) {
	// get the data from the form
	const houseType = formData.get("houseType") as string;
	const ownership = formData.get("ownership") as string;
	const gasSupply = formData.get("gasSupply") as string;
	const gasStove = formData.get("gasStove") as string;
	const gasWaterHeating = formData.get("gasWaterHeating") as string;
	const gasHeating = formData.get("gasHeating") as string;
	const otherGasUse = formData.get("otherGasUse") as string;
	const gasGeyser = formData.get("gasGeyser") as string;
	const electricGeyser = formData.get("electricGeyser") as string;
	const solarGeyser = formData.get("solarGeyser") as string;
	const otherGeyser = formData.get("otherGeyser") as string;
	const standardShower = formData.get("standardShower") as string;
	const rainShower = formData.get("rainShower") as string;
	const bathtub = formData.get("bathtub") as string;
	const kitchenSink = formData.get("kitchenSink") as string;
	const bathroomSink = formData.get("bathroomSink") as string;
	const flowRate = formData.get("flowRate") as string;
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;
	const email = formData.get("email") as string;
	const streetAddress = formData.get("streetAddress") as string;
	const city = formData.get("city") as string;
	const telephoneNumber = formData.get("telephoneNumber") as string;
	const suburb = formData.get("suburb") as string;
	const postalCode = formData.get("postalCode") as string;
  const geyserPrice = formData.get("geyserPrice") as string;
  const geyserSize = formData.get("geyserSize") as string;
	// Send email using resend



}
