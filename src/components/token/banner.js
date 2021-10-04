import React from "react"
import "./banner.scss"
import banner from "../../images/token/banner.svg"
import { Col, Row } from "antd"
import Details from "./details"

const Banner = () => {
  return (
    <section className="tokenBanner container">
      <Row>
        <Col lg={8}>
          <Details/>
        </Col>
        <Col lg={16} className="bannerContainer">
          <img src={banner} alt="Token Banner" />
        </Col>
      </Row>
    </section>
  )
}

export default Banner
