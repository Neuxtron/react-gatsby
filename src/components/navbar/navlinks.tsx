import React, { CSSProperties, ReactNode } from 'react'
import { Link } from 'gatsby'

interface NavLinksProps {
  hash: string
}
export default function NavLinks({ hash }: NavLinksProps) {
  return (
    <ul>
      <NavLinkItem to='' hash={hash}>HOME</NavLinkItem>
      <NavLinkItem to='#demos' hash={hash}>DEMOS</NavLinkItem>
      <NavLinkItem to='#features' hash={hash}>FEATURES</NavLinkItem>
      <NavLinkItem to='#pricing' hash={hash}>PRICING</NavLinkItem>
      <NavLinkItem to='#faq' hash={hash}>FAQ</NavLinkItem>
    </ul>
  )
}

interface NavLinkItemProps {
  to: string
  children: ReactNode
  hash: string
}
function NavLinkItem({ to, children, hash }: NavLinkItemProps) {
  const isSelected = hash === to
  const style = {
    color: isSelected ? "var(--selected-color)" : ""
  } as CSSProperties
  
  return (
    <li>
      <Link to={to} style={style}>{children}</Link>
    </li>
  )
}