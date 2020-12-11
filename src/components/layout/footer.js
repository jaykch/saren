import React from "react"
import "./footer.scss"
import { Row, Col } from "antd"
import { FaDiscord, FaGithub, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Row>
          <Col sm={12} xs={24}>
            <ul className="info">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </Col>
          <Col sm={6} xs={24}>
            <h3>Navigation</h3>

            <ul className="nav">
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
          </Col>
          <Col sm={6} xs={24}>
            <h3>Social</h3>
            <ul className="social">
              <li>
                <a href="https://t.me/sarencommunity" target="_blank" rel="noreferrer noopener"><FaTelegramPlane />Telegram</a>
              </li>
              <li>
                <a href="https://t.me/sarencommunity" target="_blank" rel="noreferrer noopener">
                  <FaDiscord />Discord
                </a>
              </li>
              <li>
                <a href="https://t.me/sarencommunity" target="_blank" rel="noreferrer noopener">
                  <FaGithub /> Github
                </a>
              </li>
              {/*<li><FaYoutube />Youtube</li>*/}
              {/*<li><FaTwitter />Twitter</li>*/}
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
