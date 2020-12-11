import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import logo from "../../images/logo-letters.png"
import icon from "../../images/icon.png"

const ResponsiveNavbar = () => {
  return (
    <div className="responsive-navbar">
      <AnchorLink to="/#banner" className="logo">
        <img src={icon} alt="Saren" />
      </AnchorLink>
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
      <AnchorLink to="/#banner" className="logo">
        <img src={logo} alt="Saren" />
      </AnchorLink>
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
          <a href="https://blog.saren.io/" rel="noreferrer noopener" target="_blank">
            <span>Blog</span>
          </a>
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
