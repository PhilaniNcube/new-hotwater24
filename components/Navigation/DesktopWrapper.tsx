import { sanityFetch } from "@/sanity/live";
import { TOP_NAVIGATION_QUERY } from "@/sanity/sanity-utils";
import Desktop from "./Desktop";

const DesktopWrapper = async () => {
  const { data: landingPages } = await sanityFetch({
    query: TOP_NAVIGATION_QUERY,
  });

  return <Desktop landingPages={landingPages || []} />;
};

export default DesktopWrapper;
