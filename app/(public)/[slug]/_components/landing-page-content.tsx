import { notFound } from "next/navigation";
import { getLandingPageBySlug } from "@/features/landing-pages/landing-pages-queries";
import PagebuilderRenderer from "@/components/blocks/pagebuilder-renderer";

export async function LandingPageContent({ slug }: { slug: string }) {
  const landingPage = await getLandingPageBySlug(slug);

  if (!landingPage) {
    notFound();
  }

  return (
    <div>
      <PagebuilderRenderer sections={landingPage.pageBuilder} />
    </div>
  );
}
