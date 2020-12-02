import React from "react"
import "./banner.scss"
import { Row, Col } from "antd"
import { ArrowRightOutlined } from "@ant-design/icons"

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <Row>
          <Col md={12} xs={24}>
            <div className="text">
              <h2>Get rewarded for tracking your crypto </h2>
              <p>Use our cerberus tool to take a deep dive into the blockchain world with a gamified Coingecko model
                that rewards you for keeping track of your cryptocurrencies.</p>
              <br />
              <button className="target">Cerberus </button>
              <button className="target">Whitepaper V1<ArrowRightOutlined /></button>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default Banner
