import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ResponsiveNavbar = () => {
  return (
    <div className="responsive-navbar">
      <Link to="/" className="logo">
        <span>SAREN</span>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li>
          <AnchorLink to="/#cerberus"><span>Cerberus</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#roadmap"><span>Roadmap</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#whyus"><span>Why Us?</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#blog"><span>Blog</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#faqs"><span>FAQs</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#contact"><span>Contact</span></AnchorLink>
        </li>
      </ul>
    </div>
  )
}

const LargeNavbar = () => {
  return (
    <div className="large-navbar">
      <span className="logo">
        SAREN
      </span>
      <ul className="links">
        <li>
          <AnchorLink to="/#cerberus"><span>Cerberus</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#roadmap"><span>Roadmap</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#whyus"><span>Why Us?</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#blog"><span>Blog</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#faqs"><span>FAQs</span></AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#contact"><span>Contact</span></AnchorLink>
        </li>
      </ul>
    </div>
  )
}

const Header = () => (
  <header className="container">
    <ResponsiveNavbar />
    <LargeNavbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
