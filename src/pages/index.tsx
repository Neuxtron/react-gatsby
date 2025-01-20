import React from 'react'
import "../assets/css/global.scss"
import Navbar from '../components/shared/navbar/navbar'
import { PageProps } from 'gatsby'
import SEO from '../components/shared/seo'
import HomeCover from '../components/home/home_cover'

export default function HomePage({ location }: PageProps) {
  return (
    <main>
      <SEO />
      <Navbar hash={location.hash} />
      <HomeCover />
      <h1 style={{ height: "100px" }}></h1>
    </main>
  )
}
