import React, { CSSProperties, ReactNode } from 'react'
import { outlinedButton } from "./styles.module.scss"

interface OutlinedButtonProps {
  color: string
  children: ReactNode
}
export default function OutlinedButton({ color, children }: OutlinedButtonProps) {
  const style = {
    "--color": color
  } as CSSProperties
  
  return (
    <button className={outlinedButton} style={style}>
      {children}
    </button>
  )
}
