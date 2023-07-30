import Hero from '@/components/Homepage/Hero'
import CTA from '@/components/Homepage/CTA'
import Safe from '@/components/Homepage/Safe'

export const dynamic = 'force-dynamic'




export default async function Index() {


  return (
   <main>
    <Hero />
    <CTA />
    <Safe />
   </main>
  )
}
