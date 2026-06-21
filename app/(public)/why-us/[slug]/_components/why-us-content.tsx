import { notFound } from "next/navigation";
import { getLandingPageBySlug } from "@/features/landing-pages/landing-pages-queries";
import PageBuilderRenderer from "@/components/blocks/pagebuilder-renderer";

export async function WhyUsContent({ slug }: { slug: string }) {
  const landingPage = await getLandingPageBySlug(slug);

  if (!landingPage) {
    notFound();
  }

  return (
    <div>
      {landingPage.pageBuilder && (
        <PageBuilderRenderer sections={landingPage.pageBuilder} />
      )}
    </div>
  );
}
