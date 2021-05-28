import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  return (
    <>
      <AnchorLink href="#home"><img src='inline.png' alt="lincoln law"/></AnchorLink>
      <AnchorLink href='#what'>What We Do</AnchorLink>
      <AnchorLink href='#who'>Whe We Are</AnchorLink>
      <AnchorLink href='#where'>Where To Find Us </AnchorLink>
    </>
  )
}

export default Navbar
