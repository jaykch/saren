import React from "react"
import { Col, Row } from "antd"
import token from "../../images/token/token.svg"
import "./where.scss"

const Where = () => {
  return (
    <section className="whereToBuy container">
      <Row>
        <Col lg={24}>
          <img src={token} alt="Token" />
        </Col>
        <Col lg={12} className="text">
          <h2>Where to buy?</h2>
        </Col>
        <Col lg={12} className="text">
          <p>The coin is live on <a
            href="https://app.uniswap.org/#/swap?inputCurrency=0xbd4a858139b155219e2c8d10135003fdef720b6b"
            target="_blank" rel="noopener noreferrer"><strong>Uniswap</strong></a></p>
          <p>Details regarding the coin can be viewed on our <a href="https://medium.com/@Saren_io/"><strong>Blog</strong></a></p>
        </Col>
      </Row>
    </section>
  )
}

export default Where
