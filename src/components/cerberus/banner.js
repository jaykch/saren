import React from "react"
import "./banner.scss"
import { Col, Row } from "antd"
import PremiumButton from "../misc/premiumButton"
import banner from "../../images/token/token.svg"

const Banner = () => {
  return (
    <section className="cerberusBanner">
      <div className="container">
        <Row>
          <Col lg={8} xs={24}>
            <div className="text">
              <h1>Advanced crypto tracking and analytics</h1>
              <p>A decentralised crypto tracking app built for the crypto community.</p>
              <PremiumButton type="internal" link="/app">
                App Coming Soon
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
