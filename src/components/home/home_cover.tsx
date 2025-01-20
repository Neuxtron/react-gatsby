import React from 'react'
import { cover, actions } from "./styles.module.scss"
import FlatButton from '../shared/flat_button'

export default function HomeCover() {
  return (
    <div className={cover}>
      <h1>Simple <span style={{ fontWeight: "300" }}>and</span> Fast</h1>
      <p>Modern Front-End Solution</p>
      <Actions />
    </div>
  )
}

function Actions() {
  return (
    <div className={actions}>
      <FlatButton color='var(--primary)' textColor='black'>VIEW DEMOS</FlatButton>
      <FlatButton color='var(--secondary)' textHoverColor='white'>BUY NOW</FlatButton>
    </div>
  )
}