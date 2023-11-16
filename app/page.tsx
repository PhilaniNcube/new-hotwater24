import Hero from '@/components/Homepage/Hero'
import CTA from '@/components/Homepage/CTA'
import Safe from '@/components/Homepage/Safe'
import NewHero from '@/components/Homepage/NewHero'
import WhyGoGas from '@/components/Homepage/why-choose-gas'
import WhatAreYouWaitingFor from '@/components/Homepage/what-are-waiting-for'
import GeyserPackages from '@/components/Homepage/geyser-packages'
import ButtonCtaSection from '@/components/Homepage/button-cta-section'
import InstallationTimeline from '@/components/Homepage/installation-timeline'
import QualityGeysers from '@/components/Homepage/quality-geysers'
import Testimonials from '@/components/Homepage/testimonials'

export const dynamic = 'force-dynamic'




export default async function Index() {


  return (
   <main>
    <NewHero />
    <WhyGoGas />
    <WhatAreYouWaitingFor />
    <GeyserPackages />
    <ButtonCtaSection />
    <InstallationTimeline />
    <QualityGeysers />
    <Testimonials />
    <Safe />
   </main>
  )
}
