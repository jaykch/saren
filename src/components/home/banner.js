import React from "react"
import "./banner.scss"
import { Row, Col } from "antd"
import PremiumButton from "../misc/premiumButton"
import banner from "../../images/home/banner.svg"

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <Row>
          <Col xs={24} className="mobile-image">
            <img src={banner} alt="Banner" />
          </Col>
          <Col lg={8} xs={24}>
            <div className="text">
              <h1>Decentralized tools to analyse the crypto market</h1>
              <p>Gain fundamental market insights curated by the crypto community.</p>
              <PremiumButton link="https://app.orbitdefi.com/">
                App
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
