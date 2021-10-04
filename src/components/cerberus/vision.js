import React from "react"
import { Col, Row } from "antd"
import "./vision.scss"
import future from "../../images/app/future.svg"

const Vision = () => {
  return (
    <section className="futureCerberus container">
      <Row>
        <Col md={12} className="imageContainer mobile">
          <img src={future} alt="Future" />
        </Col>
        <Col md={12} className="text">
          <h2>Future</h2>
          <h3>Feature list</h3>
          <ul>
            <li>Dark mode</li>
            <li>Comments</li>
            <li>NFTs</li>
            <li>Tags</li>
          </ul>
        </Col>
        <Col md={12} className="imageContainer desktop">
          <img src={future} alt="Future" />
        </Col>
      </Row>
    </section>
  )
}

export default Vision
