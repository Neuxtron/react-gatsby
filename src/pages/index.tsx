import React from 'react'
import "../assets/css/global.scss"
import Navbar from '../components/shared/navbar/navbar'
import { PageProps } from 'gatsby'
import SEO from '../components/shared/seo'
import HomeCover from '../components/home/home_cover'
import PreBuiltDemos from '../components/home/pre_built_demos'
import Features from '../components/home/features'
import Pricing from '../components/home/pricing'
import Support from '../components/home/support'
import Promotion from '../components/home/promotion'
import Footer from '../components/shared/footer'

export default function HomePage({ location }: PageProps) {
  return (
    <main>
      <SEO />
      <Navbar hash={location.hash} />
      <HomeCover />
      <PreBuiltDemos />
      <Features />
      <Pricing />
      {/* IDEA: testimony */}
      <Support />
      <Promotion />
      <Footer />
    </main>
  )
}
