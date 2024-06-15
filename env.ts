import { z } from "zod";

const envSchema = z.object({
	NEXT_PUBLIC_SUPABASE_URL: z.string(),
	NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
	SUPABASE_SERVICE_ROLE: z.string(),
	NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string(),
	PAYGATE_KEY: z.string(),
	WEBSITE_URL: z.string(),
	SENDGRID_API_KEY: z.string(),
	NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN: z.string(),
	NEXT_PUBLIC_SPACE_ID: z.string(),
	PAYGATE_SECRET: z.string(),
	NEXT_PUBLIC_GA_ID: z.string(),
	NEXT_PUBLIC_GA4_MEASUREMENT_ID: z.string(),
	NEXT_PUBLIC_GA4_API_SECRET: z.string(),
	PAYGATE_ID: z.string(),
	XERO_CLIENT_ID: z.string(),
	XERO_CLIENT_SECRET: z.string(),
	NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string(),
	SIMVOLY_API: z.string(),
});

envSchema.parse(process.env);

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof envSchema> {}
	}
}


