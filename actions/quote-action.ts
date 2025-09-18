"use server";

import { z } from "zod";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { sendLeadEmail } from "@/lib/send-lead-email";

// Define the quote schema for validation
const QuoteSchema = z.object({
  // Family details
  children: z.number().min(0).default(0),
  adults: z.number().min(0).default(0),
  teenagers: z.number().min(0).default(0),

  // Property details
  houseType: z.string().min(1, "House type is required"),
  ownership: z.boolean().nullable().default(null),
  gasSupply: z.string().min(1, "Gas supply information is required"),
  gasStove: z.boolean().nullable().default(null),
  gasWaterHeating: z.boolean().nullable().default(null),
  gasHeating: z.boolean().nullable().default(null),
  otherGasUse: z.string().nullable().default(null),
  locateOutside: z.boolean().nullable().default(null),

  // Current geyser setup
  gasGeyser: z.boolean().nullable().default(null),
  electricGeyser: z.boolean().nullable().default(null),
  solarGeyser: z.boolean().nullable().default(null),
  otherGeyser: z.string().nullable().default(null),

  // Water outlets
  standardShower: z.number().nullable().default(null),
  rainShower: z.number().nullable().default(null),
  bathtub: z.number().nullable().default(null),
  kitchenSink: z.number().nullable().default(null),
  bathroomSink: z.number().nullable().default(null),
  dishwasher: z.number().nullable().default(null),
  washingmachine: z.number().nullable().default(null),
  flowRate: z.number().nullable().default(null),

  // Off grid and utilities
  offGrid: z.boolean().nullable().default(null),
  borehole_water: z.boolean().default(false),

  // Personal details
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  streetAddress: z.string().nullable().default(null),
  suburb: z.string().min(1, "Suburb is required"),
  city: z.string().min(1, "City is required"),
  telephoneNumber: z.string().min(1, "Phone number is required"),
  postalCode: z.string().nullable().default(null),

  // Quote details
  completeSolution: z.boolean().nullable().default(null),
  product_id: z.string().nullable().default(null),
  installation: z.string().default(""),
  contactDay: z.string().default(""),
  contactTime: z.string().min(1, "Contact method is required"),
  geyserPrice: z.number().default(0),
  monthlySavings: z.number().default(0),
  yearlySavings: z.number().default(0),
  geyserSize: z.number().nullable().default(26),
  installationCost: z.number().default(0),
  plumbingCost: z.number().nullable().default(5000),
  comments: z.string().default(""),
  financing: z.string().default(""),
  source: z.string().nullable().default(null),

  // Additional bathroom details
  bathrooms: z.number().nullable().default(null),
  cottage_bathrooms: z.number().nullable().default(null),
  cottageIncluded: z.boolean().nullable().default(null),
  electric_geysers: z.number().nullable().default(null),
});

type QuoteFormData = z.infer<typeof QuoteSchema>;

export type QuoteActionResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitQuoteAction(
  formData: QuoteFormData
): Promise<QuoteActionResult> {
  try {
    // Validate the input data
    const validatedData = QuoteSchema.parse(formData);

    // Create Supabase client
    const supabase = await createClient();

    // Insert quote into database
    const { data: quote, error: dbError } = await (supabase as any)
      .from("quotes")
      .insert([
        {
          children: validatedData.children,
          adults: validatedData.adults,
          teenagers: validatedData.teenagers,
          houseType: validatedData.houseType,
          ownership: validatedData.ownership ?? true,
          gasSupply: validatedData.gasSupply,
          gasStove: validatedData.gasStove,
          gasWaterHeating: validatedData.gasWaterHeating,
          gasHeating: validatedData.gasHeating,
          otherGasUse: validatedData.otherGasUse,
          locateOutside: validatedData.locateOutside,
          gasGeyser: validatedData.gasGeyser,
          electricGeyser: validatedData.electricGeyser,
          solarGeyser: validatedData.solarGeyser,
          otherGeyser: validatedData.otherGeyser,
          standardShower: validatedData.standardShower ?? 0,
          rainShower: validatedData.rainShower ?? 0,
          bathtub: validatedData.bathtub ?? 0,
          kitchenSink: validatedData.kitchenSink ?? 0,
          bathroomSink: validatedData.bathroomSink ?? 0,
          dishwasher: validatedData.dishwasher ?? 0,
          washingmachine: validatedData.washingmachine ?? 0,
          flowRate: validatedData.flowRate ?? 0,
          offGrid: validatedData.offGrid,
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          streetAddress: validatedData.streetAddress ?? "",
          city: validatedData.city,
          suburb: validatedData.suburb,
          telephoneNumber: validatedData.telephoneNumber,
          postalCode: validatedData.postalCode ?? undefined,
          completeSolution: validatedData.completeSolution,
          product_id: validatedData.product_id,
          installation: validatedData.installation,
          contactDay: validatedData.contactDay,
          contactTime: validatedData.contactTime,
          geyserPrice: validatedData.geyserPrice,
          monthlySavings: validatedData.monthlySavings,
          yearlySavings: validatedData.yearlySavings,
          geyserSize: validatedData.geyserSize,
          installationCost: validatedData.installationCost,
          plumbingCost: validatedData.plumbingCost,
          comments: validatedData.comments,
          financing: validatedData.financing,
          source: validatedData.source,
          borehole_water: validatedData.borehole_water,
          bathrooms: validatedData.bathrooms,
          cottage_bathrooms: validatedData.cottage_bathrooms,
          cottageIncluded: validatedData.cottageIncluded,
          electric_geysers: validatedData.electric_geysers,
        },
      ])
      .select("*")
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return {
        success: false,
        message: "Failed to save quote to database",
      };
    }

    // Send email notification
    try {
      const emailSuccess = await sendLeadEmail({
        houseType: validatedData.houseType,
        ownership: validatedData.ownership,
        gasSupply: validatedData.gasSupply,
        gasStove: validatedData.gasStove,
        gasWaterHeating: validatedData.gasWaterHeating,
        gasHeating: validatedData.gasHeating,
        otherGasUse: validatedData.otherGasUse,
        locateOutside: validatedData.locateOutside,
        gasGeyser: validatedData.gasGeyser,
        electricGeyser: validatedData.electricGeyser,
        solarGeyser: validatedData.solarGeyser,
        otherGeyser: validatedData.otherGeyser,
        standardShower: validatedData.standardShower,
        rainShower: validatedData.rainShower,
        bathtub: validatedData.bathtub,
        kitchenSink: validatedData.kitchenSink,
        bathroomSink: validatedData.bathroomSink,
        dishwasher: validatedData.dishwasher,
        washingmachine: validatedData.washingmachine,
        flowRate: validatedData.flowRate,
        offGrid: validatedData.offGrid,
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        streetAddress: validatedData.streetAddress,
        suburb: validatedData.suburb,
        city: validatedData.city,
        telephoneNumber: validatedData.telephoneNumber,
        postalCode: validatedData.postalCode,
        completeSolution: validatedData.completeSolution,
        product_id: validatedData.product_id,
        installation: validatedData.installation,
        contactDay: validatedData.contactDay,
        contactTime: validatedData.contactTime,
        geyserPrice: validatedData.geyserPrice,
        monthlySavings: validatedData.monthlySavings,
        yearlySavings: validatedData.yearlySavings,
        geyserSize: validatedData.geyserSize,
        installationCost: validatedData.installationCost,
        plumbingCost: validatedData.plumbingCost,
        comments: validatedData.comments,
        financing: validatedData.financing,
        borehole_water: validatedData.borehole_water,
        bathrooms: validatedData.bathrooms,
        cottage_bathrooms: validatedData.cottage_bathrooms,
        cottageIncluded: validatedData.cottageIncluded,
        electric_geysers: validatedData.electric_geysers,
      });

      if (!emailSuccess) {
        console.error("Email sending failed");
        // Don't fail the entire process if email fails
      }
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the entire process if email fails
    }

    // Revalidate any relevant paths
    revalidatePath("/quote");

    return {
      success: true,
      message: "Quote submitted successfully",
    };
  } catch (error) {
    console.error("Server action error:", error);

    if (error instanceof z.ZodError) {
      const formattedErrors: Record<string, string[]> = {};
      Object.entries(error.flatten().fieldErrors).forEach(([key, value]) => {
        if (value) {
          formattedErrors[key] = value;
        }
      });

      return {
        success: false,
        message: "Validation failed",
        errors: formattedErrors,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
