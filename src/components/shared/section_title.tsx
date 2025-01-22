import React, { ReactNode } from 'react'
import { sectionTitle } from "./styles.module.scss"

interface SectionTitleProps {
  title: string
  children?: ReactNode
}
export default function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <div className={sectionTitle}>
      <h1>{title}</h1>
      <hr />
      {children}
    </div>
  )
}
