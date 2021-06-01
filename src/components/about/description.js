import React from "react"
import "./description.scss"
import { Col, Row } from "antd"
import description from "../../images/about/description.svg"

const Description = () => {
  return (
    <section className="aboutDescription container">
      <Row>
        <Col md={{ span: 16, offset: 4 }}>
          <h2>Creating a world that is economically fair</h2>
          <img src={description} alt="Banner" />
          <p>We aim to create a cryptographically enforced set of financial instruments that would help bring in a new
            era of economic fairness to the blockchain community by giving access to advanced features like NUPL rating,
            on-chain analysis, fair subscriptions and advanced analytics to Saren holders.</p>
        </Col>
      </Row>
    </section>
  )
}

export default Description
