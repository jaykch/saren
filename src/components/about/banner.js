import React from "react"
import "./banner.scss"
import { Col, Row } from "antd"
import banner from "../../images/about/banner.svg"
import PremiumButton from "../misc/premiumButton"

const Banner = () => {
  return (
    <section className="aboutBanner">
      <div className="container">
        <Row>
          <Col lg={8} xs={24}>
            <div className="text">
              <h1>What is Orbit?</h1>
              <div className="logoContainer">
                <p>Orbit is a one-stop platform that gives users a complete view of digital assets and tools to make great
                  investment decisions. </p>
                <p>Orbit measures community growth, open-source development, big events, and on-chain metrics in
                  addition to price, volume, and market capitalization.</p>
              </div>
              <PremiumButton link="https://www.linkedin.com/company/orbitdefi/">
                View Linkedin
              </PremiumButton>
            </div>
          </Col>
          <Col lg={16} xs={24} className="image">
            <img src={banner} alt="Banner" />
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default Banner
