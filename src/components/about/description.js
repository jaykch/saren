import React from "react"
import "./description.scss"
import { Col, Row } from "antd"
import description from "../../images/about/description.svg"

const Description = () => {
  return (
    <section className="aboutDescription container">
      <Row>
        <Col lg={24}>
          <h2>Creating a world that is economically fair</h2>
          <img src={description} alt="Banner" />
          <p>We aim to create a set of financial instruments that would help bring in economic fairness to the
            blockchain community by giving access to advanced features like NUPL rating, on-chain analysis, fair
            subscriptions and advanced analytics.</p>
          <br />
          <p>Interested in learning more? Get in touch at
            <strong><a href="mailto:support@orbitdefi.com"> support@orbitdefi.com.</a></strong>
          </p>
        </Col>
      </Row>
    </section>
  )
}

export default Description
