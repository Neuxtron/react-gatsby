import React from 'react'
import useSiteMetadata from '../../hooks/useSiteMetadata'

interface SEOProps {
  title?: string
  description?: string
}
export default function SEO({ title, description }: SEOProps) {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()
  
  const seo = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
  }
  
  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
    </>
  )
}