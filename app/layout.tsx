
import "./globals.css";
import { lato } from "../fonts";
import { GoogleTagManager } from "@next/third-parties/google";

import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://hotwater24.com"),
  title: "Hotwater 24",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WWK8FMB" />
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}
