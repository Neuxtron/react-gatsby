import React from 'react'
import { footer, footerTitle, footerSection } from "./styles.module.scss"
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6"
import { v4 } from 'uuid'
import { Link } from 'gatsby'

export default function Footer() {
  const sections: FooterSection[] = [
    {
      title: "Company",
      links: [
        { text: "About", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Awards", href: "#" },
        { text: "Users Program", href: "#" },
        { text: "Locations", href: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { text: "Pricing", href: "#pricing" },
        { text: "Features", href: "#features" },
        { text: "Demos", href: "#demos" },
        { text: "Mobile Templates", href: "#" },
        { text: "Wedding Wordpress Themes", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Contact", href: "#contact" },
        { text: "FAQ", href: "#" },
        { text: "Forum", href: "#" },
      ]
    }
  ]
  
  return (
    <footer className={footer}>
      <FooterTitle />
      {sections.map((section) => {
        const key = v4()
        return (
          <FooterSectionView section={section} />
        )
      })}
    </footer>
  )
}

function FooterTitle() {
  return (
    <div className={footerTitle}>
      <h1>REACT-GATSBY</h1>
      <p>Copyright © 2025.</p>
      <p>All Rights Reserved.</p>

      <div>
        <FaTwitter />
        <FaFacebookF />
        <FaLinkedinIn />
      </div>
    </div>
  )
}

interface FooterSection {
  title: string
  links: {
    text: string
    href: string
  }[]
}

interface FooterSectionViewProps {
  section: FooterSection
}
function FooterSectionView({ section }: FooterSectionViewProps) {
  return (
    <div className={footerSection}>
      <h1>{section.title}</h1>
      {section.links.map((link) => {
        const key = v4()
        return (
          <Link key={key} to={link.href}>
            {link.text}
            <div></div>
          </Link>
        )
      })}
    </div>
  )
}