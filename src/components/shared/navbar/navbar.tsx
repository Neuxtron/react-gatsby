import React, { CSSProperties, useEffect, useState } from 'react'
import { navbar } from './styles.module.scss'
import NavLinks from './navlinks'
import { Link } from 'gatsby'
import OutlinedButton from '../outlined_button'
import useSiteMetadata from '../../../hooks/useSiteMetadata'

interface NavbarProps {
  hash: string
}
export default function Navbar({ hash }: NavbarProps) {
  const { style: navbarStyle, isScrolled } = useNavbarStyle()
  const title: string = useSiteMetadata().title
  
  return (
    <div className={navbar} style={navbarStyle}>
      <Link to="/">{title.toUpperCase()}</Link>
      
      <NavLinks hash={hash} />
        <Link to='#contact'>
          <OutlinedButton color={isScrolled ? "var(--secondary)" : "var(--primary)"}>
            SUPPORT
          </OutlinedButton>
        </Link>
    </div>
  )
}

function useNavbarStyle() {
  const [isScrolled, setScrolled] = useState(false)
  
  const normalStyle = {
    backgroundColor: "transparent",
    "--selected-color": "var(--primary)",
    "--color": "white",
    "--shadow-color": "transparent",
  } as CSSProperties
  const scrolledStyle = {
    backgroundColor: "white",
    "--selected-color": "var(--secondary)",
    "--color": "black",
    "--shadow-color": "#0005",
  } as CSSProperties

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setScrolled(false)
      } else {
        setScrolled(true)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => { window.removeEventListener("scroll", onScroll) }
  }, [])

  const style = isScrolled ? scrolledStyle : normalStyle
  return { style, isScrolled }
}