import React from "react"
import { Col, Divider, Row } from "antd"
import "./description.scss"
import home from "../../images/cerberus/home.svg"


const Description = () => {
  return (
    <section className="descriptionAbout  container">
      <Row>
        <h2>Description</h2>
        <Divider dashed />
        <Col md={12} className="text">
          <p>Community built set of decentralised tools.We aim to build decentralised tools for the cryptocurrency
            community that are more engaging than the current apps.Saren's financial tools provide reliable
            cryptocurrency data and economic strategies to help it's consumers with a social interactive market to
            support blockchain development.
          </p>
        </Col>
        
      </Row>
    </section>
  )
}

export default Description
