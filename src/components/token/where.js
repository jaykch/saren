import React from "react"
import { Col, Row, Skeleton } from "antd"
import token from "../../images/token/token.png"
import "./where.scss"

const Where = () => {
  return (
    <section className="whereToBuy container">
      <Row>
        <Col lg={12}>
          <img src={token} alt="Token" />
        </Col>
        <Col lg={12}>
          <h2>Where to buy</h2>
          <span>To be released on 30th of March 2021</span>
          <Skeleton/>
        </Col>
      </Row>
    </section>
  )
}

export default Where
