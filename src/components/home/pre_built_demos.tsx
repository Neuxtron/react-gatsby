import React from 'react'
import { demos, demoTitle, demoListView } from "./styles.module.scss"
import { graphql, Link, useStaticQuery } from 'gatsby'
import { v4 } from 'uuid'

export default function PreBuiltDemos() {
  return (
    <div className={demos} id='demos'>
      <PageTitle />
      <DemoListView />
    </div>
  )
}

function PageTitle() {
  return (
    <div className={demoTitle}>
      <h1>Pre-Built Demos</h1>
      <hr />
      <p>New templates added regulary. Template blocks can be combined with any layout.</p>
    </div>
  )
}

interface Demo {
  title: string
  image: string
}

function DemoListView() {
  const demosData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            image
            title
          }
        }
      }
    }
  `)

  const demos: Demo[] = demosData.allMarkdownRemark.nodes.map((node: any) => {
    const { title, image } = node.frontmatter
    
    return { title, image }
  })
  
  return (
    <div className={demoListView}>
      {demos.map((demo) => {
        const key = v4()
        // TODO: dmeo item;;
        return (
          <Link key={key} to='#'>
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