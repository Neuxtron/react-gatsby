import React from 'react'
import { demos, demoListView } from "./styles.module.scss"
import { graphql, Link, useStaticQuery } from 'gatsby'
import SectionTitle from '../shared/section_title'

export default function PreBuiltDemos() {
  return (
    <div id='demos'>
      <SectionTitle title='Pre-Built Demos'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt eius odio?</p>
      </SectionTitle>
      <DemoListView />
    </div>
  )
}

interface Demo {
  id: string
  title: string
  image: string
}

function DemoListView() {
  const demosData = useDemosData()

  const demos: Demo[] = demosData.allMarkdownRemark.nodes.map((node: any) => {
    const id = node.id
    const { title, image } = node.frontmatter
    
    return { title, image, id }
  })
  
  return (
    <div className={demoListView}>
      {demos.map((demo) => {
        return (
          <Link key={demo.id} to='#'>
            <img src={`/images/${demo.image}`} alt={demo.title} />
            <div>
              <p>VIEW DEMO</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

function useDemosData() {
  return useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(demos)/"}}) {
        nodes {
          id
          frontmatter {
            image
            title
          }
        }
      }
    }
  `)
}