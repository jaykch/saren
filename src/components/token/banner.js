import React from "react"
import "./banner.scss"
import banner from "../../images/backgrounds/token.svg"
import { Col, Row } from "antd"

const Banner = () => {
  return (
    <section className="tokenBanner container">
      <Row>
        <Col lg={24} className="bannerContainer">
          <img src={banner} alt="Token Banner" />
        </Col>
      </Row>
    </section>
  )
}

export default Banner
