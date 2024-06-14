import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import CityHero from "./_components/CityHero";
import CitySection from "./_components/CitySection";
import { areas } from "@/utils/areas";

export const dynamic = "force-static";


const page = async ({params:{city}}:{params:{city:string}}) => {

      // const cookieStore = cookies();

      // const supabase = createServerClient<Database>(
      //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
      //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      //   {
      //     cookies: {
      //       get(name: string) {
      //         return cookieStore.get(name)?.value;
      //       },
      //     },
      //   }
      // );

      // const {data, error} =  await supabase.from("cities").select('*').eq("slug", city).single()

      const area = areas.find((area) => area.slug === city);

      if(!area) {
        return {
          notFound: true
        }

      }

  return (
			<main>
				<CityHero city={area?.name} />
				<CitySection city={area?.name} />
			</main>
		);
};
export default page;
