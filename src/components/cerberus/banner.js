import React from "react"
import "./banner.scss"
import { Col, Row } from "antd"
import banner from "../../images/home/future.svg"
import PremiumButton from "../misc/premiumButton"

const Banner = () => {
  return (
    <section className="cerberusBanner">
      <div className="container">
        <Row>
          <Col lg={12} xs={24}>
            <div className="text">
              <h1>Advanced crypto tracking and analytics</h1>
              <p>A decentralised crypto tracking app built for the crypto community.</p>
              <PremiumButton link="https://app.orbitdefi.com/">
                Open App
              </PremiumButton>
            </div>
          </Col>
          <Col lg={12} xs={24} className="image">
            <img src={banner} alt="Banner" />
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default Banner
