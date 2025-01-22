import React from 'react'
import { promotion } from "./styles.module.scss"
import FlatButton from '../shared/flat_button'

export default function Promotion() {
  return (
    <div className={promotion}>
      <h1>Get all designs for just <span>$19</span></h1>
      <hr />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ipsum itaque deserunt quasi ipsam officia magnam natus quae esse sit?</p>

      <FlatButton color='var(--secondary)' textColor='white' textHoverColor='white'>BUY NOW</FlatButton>
    </div>
  )
}
