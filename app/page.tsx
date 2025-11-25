'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import SocialProof from '@/components/SocialProof'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <SocialProof />
      <Services />
      <Portfolio />
      <CTABanner />
      <Footer />
      <FloatingCTA />
    </>
  )
}


