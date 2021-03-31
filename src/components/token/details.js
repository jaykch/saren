import React from "react"
import "./details.scss"
import { Col, Row, Divider, Typography } from "antd"

const { Paragraph } = Typography

const Details = () => {
  return (
    <section className="tokenDetails container">
      <Row>
        <h2>Token Details</h2>
        <Col span={24}>
          <Divider dashed />
          <div className="coinStats">
            <ul className="labels">
              <li>Ticker</li>
              <li>Name</li>
              <li>Type</li>
              <li>Initial Price</li>
              <li>Circulating Supply</li>
              <li>Total Supply</li>
              <li>Contract Address</li>
            </ul>
            <ul className="values">
              <li>$SAR</li>
              <li>Saren</li>
              <li>ERC20</li>
              <li>$0.001</li>
              <li>30,000,000</li>
              <li>1,000,000,000</li>
              <li className="desktop">
                <Paragraph
                  copyable={{ text: "0xbd4a858139b155219e2c8d10135003fdef720b6b" }}>0xbd4a858139b155219e2c8d10135003fdef720b6b</Paragraph>
              </li>
              <li className="mobile">
                <Paragraph copyable={{ text: "0xbd4a858139b155219e2c8d10135003fdef720b6b" }}>0xbd...b6b</Paragraph>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Details
