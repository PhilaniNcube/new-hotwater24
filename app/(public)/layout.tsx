import Script from "next/script";
import Footer from "./Footer";
import "../globals.css";
import Desktop from "@/components/Navigation/Desktop";
import { getGeysers } from "@/sanity/sanity-utils";
import { lato } from "../../fonts";
import GasGenius from "@/components/Homepage/GasGenius";
import Mobile from "@/components/Navigation/Mobile";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { GoogleTagManager } from "@next/third-parties/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hotwater24.com"),
	title: "Hotwater 24",
	description: "",
};

export default async function Public({
	children,
}: {
	children: React.ReactNode;
}) {
	const geysers = await getGeysers();

	const cookieStore = cookies();

	const supabase = createServerClient<Database>(
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value;
				},
			},
		},
	);

	const { data, error } = await supabase
		.from("cities")
		.select("*")
		.order("name", { ascending: true });

	return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WWK8FMB" />
      <body className={lato.className}>
        <GasGenius />
        {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
        <Desktop packages={geysers} cities={data!} />
        {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
        <Mobile packages={geysers} cities={data!} />
        {children}
        <Footer />
        {/* @ts-ignore */}
        <co-pilot
          platform-id="1b2a1f17-9d0c-45d6-be86-cf30ce9cf441"
          user-id="60beee09-8302-48c1-809f-e3055b8a3b86"
          chatbot-id="1a1e3fd8-f906-49a7-8362-8eab59886b9c"
          is-local="false"
        >
          <a href="https://www.chatsimple.ai/?utm_source=widget&utm_medium=referral">
            AI Nav
          </a>
          {/* @ts-ignore */}
        </co-pilot>
        <Script src="https://cdn.chatsimple.ai/ai-loader.js" defer></Script>
      </body>
    </html>
  );
}
