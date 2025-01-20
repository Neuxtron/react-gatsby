import React from 'react'
import "../assets/css/global.scss"
import Navbar from '../components/navbar/navbar'
import { cover } from "./index.module.scss"
import { PageProps } from 'gatsby'

export default function HomePage({ location }: PageProps) {
  console.log(location)
  
  return (
    <main>
      <Navbar hash={location.hash} />
      <div className={cover}>
        
      </div>
      <h1 style={{ height: "100px" }}>AAAAAAAAAAAAA</h1>
    </main>
  )
}
