import React from 'react'
import { cover } from "./styles.module.scss"

export default function HomeCover() {
  return (
    <div className={cover}>
      <h1>Simple <span style={{ fontWeight: "300" }}>and</span> Fast</h1>
      <p>Modern Front-End Solution</p>
    </div>
  )
}
