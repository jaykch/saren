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
                  Copyright © {new Date().getFullYear()} Saren
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
                  <a href="https://medium.com/@Saren_io" rel="noreferrer noopener" target="_blank">
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://t.me/saren_channel" target="_blank"
                     rel="noreferrer noopener"><FaTelegramPlane /></a>
                </li>
                <li>
                  <a href="https://twitter.com/saren_io" target="_blank"
                     rel="noreferrer noopener"><FaTwitter /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/saren-io" target="_blank"
                     rel="noreferrer noopener"><FaLinkedin /></a>
                </li>
                <li>
                  <a href="https://discord.gg/e9qtVrtukg" target="_blank" rel="noreferrer noopener">
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/saren-io" target="_blank" rel="noreferrer noopener">
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
