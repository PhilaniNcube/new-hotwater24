import { getTopNavigation } from "@/features/landing-pages/landing-pages-queries";
import Desktop from "./Desktop";

const DesktopWrapper = async () => {
  const landingPages = await getTopNavigation();

  return <Desktop landingPages={landingPages || []} />;
};

export default DesktopWrapper;
