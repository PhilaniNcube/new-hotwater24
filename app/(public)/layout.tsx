import Script from "next/script";
import Footer from "./Footer";
import "../globals.css";
import DesktopWrapper from "@/components/Navigation/DesktopWrapper";
import { lato } from "../../fonts";
import GasGenius from "@/components/Homepage/GasGenius";
import MobileWrapper from "@/components/Navigation/MobileWrapper";

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
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WWK8FMB" />
      <body className={lato.className}>
        <GasGenius />

        <DesktopWrapper />

        <MobileWrapper />
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
