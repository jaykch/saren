import React from "react"
import { Col, Divider, Row } from "antd"
import "./vision.scss"
import future from "../../images/cerberus/future.svg"

const Vision = () => {
  return (
    <section className="futureCerberus container">
      <Row>
        <h2>Future</h2>
        <Divider dashed />
        <Col md={12} className="imageContainer mobile">
          <img src={future} alt="Future" />
        </Col>
        <Col md={12} className="text">
          <span>Feature list</span>
          <br /><br />
          <ul>
            <li>Night mode</li>
            <li>Proof of engagement token</li>
            <li>Decentralisation of coin listing</li>
            <li>Tweets</li>
            <li>Multiple wallet portfolio viewer</li>
            <li>Tags view</li>
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
