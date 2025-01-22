import React, { CSSProperties } from 'react'
import SectionTitle from '../shared/section_title'
import { useStaticQuery, graphql } from 'gatsby'
import { pricingsListView } from "./styles.module.scss"
import htmlParser from "html-react-parser"
import { FaCheck } from "react-icons/fa6"
import FlatButton from '../shared/flat_button'
import OutlinedButton from '../shared/outlined_button'

export default function Pricings() {
  return (
    <div id='pricing'>
      <SectionTitle title='Simple Pricing'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum unde pariatur.
      </SectionTitle>
      <PricingsListView />
    </div>
  )
}

function PricingsListView() {
  const pricings = usePricings()
  
  return (
    <div className={pricingsListView}>
      {pricings.map((pricing) => {
        const body = htmlParser(pricing.body)
        const style = {
          "--background-color": pricing.recommended ? "#111935" : "#F7F8F9",
          "--text-color": pricing.recommended ? "white" : "black",
          "--heading-size": pricing.recommended ? "2.7rem" : "1.5rem",
        } as CSSProperties
        
        return (
          <div key={pricing.id} style={style}>
            <h1>{pricing.title}</h1>
            <hr />
            <p>$<span>{pricing.price}</span></p>
            {body}
            <PricingAction recommended={pricing.recommended} />
          </div>
        )
      })}
    </div>
  )
}

interface PricingActionProps {
  recommended: boolean
}
function PricingAction({ recommended }: PricingActionProps) {
  if (recommended) {
    return (
      <FlatButton color='var(--primary)' textColor='#111935'>BUY NOW</FlatButton>
    )
  }
  
  return (
    <OutlinedButton color='var(--secondary)'>BUY NOW</OutlinedButton>
  )
}

interface Pricing {
  id: string
  title: string
  price: string
  recommended: boolean
  body: string
}

function usePricings() {
    const pricingsData = useStaticQuery(graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/(pricings)/"}}
          sort: {fileAbsolutePath: ASC}
        ) {
          nodes {
            id
            html
            frontmatter {
              price
              recommended
              title
            }
          }
        }
      }
    `)
  
    const pricings: Pricing[] = pricingsData.allMarkdownRemark.nodes.map((node: any) => {
      const { id, html: body } = node
      const { price, recommended, title } = node.frontmatter
      return { id, body, price, recommended, title }
    })
  
    return pricings
}