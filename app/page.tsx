import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { TechStack } from '@/components/landing/tech-stack'
import { Problem } from '@/components/landing/problem'
import { Comparison } from '@/components/landing/comparison'
import { Offer } from '@/components/landing/offer'
import { Faq } from '@/components/landing/faq'
import { SiteFooter } from '@/components/landing/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <TechStack />
        <Problem />
        <Comparison />
        <Offer />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
