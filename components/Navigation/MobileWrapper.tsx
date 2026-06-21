import { getTopNavigation } from "@/features/landing-pages/landing-pages-queries";
import Mobile from "./Mobile";

const MobileWrapper = async () => {
  const landingPages = await getTopNavigation();

  return <Mobile landingPages={landingPages || []} />;
};

export default MobileWrapper;
