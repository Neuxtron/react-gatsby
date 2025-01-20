import React, { CSSProperties, ReactNode } from 'react'
import { flatButton } from "./styles.module.scss"

interface FlatButtonProps {
  color?: string
  textColor?: string
  textHoverColor?: string
  children?: ReactNode
}
export default function FlatButton({ color = "var(--primary)", textColor = "white", textHoverColor = color, children }: FlatButtonProps) {
  const style = {
    "--color": color,
    "--text-color": textColor,
    "--text-hover-color": textHoverColor,
  } as CSSProperties
  
  return (
    <button style={style} className={flatButton}>
      {children}
    </button>
  )
}
