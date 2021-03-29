import React from "react"
import "./banner.scss"
import { Col, Row } from "antd"
import home from "../../images/cerberus/banner.svg"
import PremiumButton from "../misc/premiumButton"

const Banner = () => {
  return (
    <section className="cerberusBanner">
      <div className="container">
        <Row>
          <Col lg={12} xs={24}>
            <div className="text">
              <div className="logoContainer">
                CERBERUS
              </div>
              <h1>Advanced crytpo tracking and analytics.</h1>
              <p>A decentralised crypto tracking app built for the crypto community.</p>
              <br />
              <PremiumButton link="https://cerberus.saren.io/" color="inverted">
                Open App
              </PremiumButton>
            </div>
          </Col>
          <Col md={12} xs={24} className="image">
            <img src={home} alt="Banner" />
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default Banner
