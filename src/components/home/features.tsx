import React from 'react'
import SectionTitle from '../shared/section_title'
import { useStaticQuery, graphql } from 'gatsby'
import { featuresListView } from "./styles.module.scss"
import htmlParser from "html-react-parser"

export default function Features() {
  return (
    <div id='features'>
      <SectionTitle title='Features designed for you'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate, impedit quaerat itaque aliquid cumque quisquam illo quos, commodi officia iusto at. Veniam, magnam.</p>
      </SectionTitle>
      <FeaturesListView />
    </div>
  )
}

function FeaturesListView() {
  const features = useFeatures()

  return (
    <div className={featuresListView}>
      {features.map((feature) => {
        const body = htmlParser(feature.body)
        
        return (
          <div key={feature.id}>
            <img src={`/images/${feature.image}`} />
            {body}
          </div>
        )
      })}
    </div>
  )
}

interface Feature {
  id: string
  image: string
  body: string
}

function useFeatures() {
  const featuresData = useStaticQuery(graphql`
    query  {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(features)/"}}
        sort: {frontmatter: {image: ASC}}
      ) {
        nodes {
          id
          html
          frontmatter {
            image
          }
        }
      }
    }
  `)

  const features: Feature[] = featuresData.allMarkdownRemark.nodes.map((node: any) => {
    const { id, html: body } = node
    const { image } = node.frontmatter
    return { id, body, image }
  })

  return features
}