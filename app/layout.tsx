import Script from 'next/script';
import Footer from './Footer'
import './globals.css'
import Desktop from '@/components/Navigation/Desktop';
import { getGeysers } from '@/sanity/sanity-utils';
import { lato } from './fonts';
import GasGenius from '@/components/Homepage/GasGenius';
import Mobile from '@/components/Navigation/Mobile';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';




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

        const cookieStore = cookies();

        const supabase = createServerClient<Database>(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          {
            cookies: {
              get(name: string) {
                return cookieStore.get(name)?.value;
              },
            },
          }
        );

        const { data, error } = await supabase
          .from("cities")
          .select("*").order("name", { ascending: true })


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
      <body className={lato.className}>
        <GasGenius />
        <Desktop packages={geysers} cities={data!} />
        <Mobile packages={geysers} cities={data!} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
