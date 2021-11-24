import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import { BsArrowUpRight } from "react-icons/bs"
import logo from "../../images/logo.svg"
import { Link } from "gatsby"

const ResponsiveNavbar = () => {
  return (
    <div className="responsive-navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Orbit" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
      <ul className="menu">
        <li>
          <Link to="/token"><span>Token</span></Link>
        </li>
        <li>
          <Link to="/app"><span>App</span></Link>
        </li>
        <li>
          <Link to="/about"><span>About Us</span></Link>
        </li>
        <li>
          <a href="https://medium.com/@orbitdefi" rel="noreferrer noopener" target="_blank">
            <span>Blog</span>
          </a>
        </li>
        {/*<li>*/}
        {/*  <a href="https://orbitdefi.com/" target="_blank" className="external" rel="noreferrer noopener">*/}
        {/*    <span>Launch App  <BsArrowUpRight /></span>*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </div>
  )
}

const LargeNavbar = () => {
  return (
    <div className="large-navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Orbit" />
      </Link>
      <ul className="links">
        <li>
          <Link to="/token"><span>Token</span></Link>
        </li>
        <li>
          <Link to="/app"><span>App</span></Link>
        </li>
        <li>
          <Link to="/about"><span>About Us</span></Link>
        </li>
        <li>
          <a href="https://medium.com/@orbitdefi" rel="noreferrer noopener" target="_blank">
            <span>Blog</span>
          </a>
        </li>
        {/*<li className="bordered">*/}
        {/*  <a href="https://app.orbitdefi.com/" target="_blank" className="external" rel="noreferrer noopener">*/}
        {/*    <span>Launch App  <BsArrowUpRight /></span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        <li className="bordered">
          <span>App Coming Soon</span>
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
