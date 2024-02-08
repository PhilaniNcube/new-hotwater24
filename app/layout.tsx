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
import { GoogleTagManager } from "@next/third-parties/google";




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
          }
        );

        const { data, error } = await supabase
          .from("cities")
          .select("*").order("name", { ascending: true })


  return (
			<html lang="en">
				<GoogleTagManager gtmId="GTM-TDQ62BT" />
				<body className={lato.className}>
					<GasGenius />
					{/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
					<Desktop packages={geysers} cities={data!} />
					{/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
					<Mobile packages={geysers} cities={data!} />
					{children}
					<Footer />
				</body>
			</html>
		);
}
