import React, { CSSProperties, useEffect, useState } from 'react'
import { navbar } from './styles.module.scss'
import NavLinks from './navlinks'
import { Link } from 'gatsby'
import OutlinedButton from '../outlined_button'

interface NavbarProps {
  hash: string
}
export default function Navbar({ hash }: NavbarProps) {
  const { style: navbarStyle, isScrolled } = useNavbarStyle()
  console.log(isScrolled)
  
  return (
    <div className={navbar} style={navbarStyle}>
      <Link to="/">REACT-GATSBY</Link>
      
      <NavLinks hash={hash} />
      <OutlinedButton color={isScrolled ? "var(--secondary)" : "var(--primary)"}>
        <Link to='#contact'>SUPPORT</Link>
      </OutlinedButton>
    </div>
  )
}

function useNavbarStyle() {
  const [isScrolled, setScrolled] = useState(false)
  
  const normalStyle = {
    backgroundColor: "transparent",
    "--selected-color": "var(--primary)",
    "--color": "white",
  } as CSSProperties
  const scrolledStyle = {
    backgroundColor: "white",
    "--selected-color": "var(--secondary)",
    "--color": "black",
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