import Script from 'next/script';
import Footer from './Footer'
import Navbar from './Navbar'
import './globals.css'
import Desktop from '@/components/Navigation/Desktop';
import { getGeysers } from '@/sanity/sanity-utils';

export const dynamic = "force-dynamic";


export const metadata = {
  title: 'Hotwater 24',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const geysers = await getGeysers();

  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9S7607VTDS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9S7607VTDS');
        `}
      </Script>
      <body>
        <Desktop packages={geysers} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
