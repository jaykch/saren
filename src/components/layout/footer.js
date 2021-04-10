import React from "react"
import "./footer.scss"
import { Row, Col } from "antd"
import { FaDiscord, FaGithub, FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Row>
          <Col sm={12} xs={24}>
            <ul className="info">
              <li>Privacy Policy (pending)</li>
              <li>Terms of Use (pending)</li>
            </ul>
          </Col>
          <Col sm={6} xs={24}>
            <h3>Navigation</h3>

            <ul className="nav">
              <li>
                <Link to="/cerberus"><span>Cerberus</span></Link>
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
          </Col>
          <Col sm={6} xs={24}>
            <h3>Social</h3>
            <ul className="social">
              <li>
                <a href="https://t.me/sarencommunity" target="_blank" rel="noreferrer noopener"><FaTelegramPlane />Telegram</a>
              </li>
              <li>
                <a href="https://twitter.com/saren_io" target="_blank"
                   rel="noreferrer noopener"><FaTwitter />Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/saren-io" target="_blank"
                   rel="noreferrer noopener"><FaLinkedin />Linkedin</a>
              </li>
              <li>
                <a href="https://discord.gg/e9qtVrtukg" target="_blank" rel="noreferrer noopener">
                  <FaDiscord />Discord
                </a>
              </li>
              <li>
                <a href="https://github.com/saren-io" target="_blank" rel="noreferrer noopener">
                  <FaGithub /> Github
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </div>
      <div className="copyright">
        <div className="container">
          Copyright © {new Date().getFullYear()} Saren
        </div>
      </div>
    </footer>
  )
}

export default Footer
