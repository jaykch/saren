import React from "react"
import "./footer.scss"
import { Row, Col } from "antd"
import { FaDiscord, FaGithub, FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import { Link } from "gatsby"

import footerLogo from "../../images/logo.svg"

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="container">
          <Row>
            <Col lg={12} xs={24}>
              <img src={footerLogo} alt="Footer Logo" />
              <ul className="info">
                <li className="copyright">
                  Copyright © {new Date().getFullYear()} Orbit
                </li>
                <li><Link to="/privacy"><span>Privacy Policy</span></Link></li>
                <li><Link to="/terms"><span>Terms and Conditions</span></Link></li>
              </ul>
            </Col>
            <Col lg={12} xs={24}>
              <ul className="sitemap">
                <li>
                  <Link to="/app"><span>App</span></Link>
                </li>
                <li>
                  <Link to="/token"><span>Token</span></Link>
                </li>
                <li>
                  <Link to="/about"><span>About Us</span></Link>
                </li>
                <li>
                  <a href="https://medium.com/@orbitdefi" rel="noreferrer noopener" target="_blank">
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://t.me/orbitdefi" target="_blank"
                     rel="noreferrer noopener"><FaTelegramPlane /></a>
                </li>
                <li>
                  <a href="https://twitter.com/orbit_defi" target="_blank"
                     rel="noreferrer noopener"><FaTwitter /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/orbitdefi" target="_blank"
                     rel="noreferrer noopener"><FaLinkedin /></a>
                </li>
                <li>
                  <a href="https://discord.gg/e9qtVrtukg" target="_blank" rel="noreferrer noopener">
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/orbitdefi" target="_blank" rel="noreferrer noopener">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </section>
    </footer>
  )
}

export default Footer
