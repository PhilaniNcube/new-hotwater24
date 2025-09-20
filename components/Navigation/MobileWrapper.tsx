import { sanityFetch } from "@/sanity/live";
import { TOP_NAVIGATION_QUERY } from "@/sanity/sanity-utils";
import Mobile from "./Mobile";

const MobileWrapper = async () => {
  const { data: landingPages } = await sanityFetch({
    query: TOP_NAVIGATION_QUERY,
  });

  return <Mobile landingPages={landingPages || []} />;
};

export default MobileWrapper;
