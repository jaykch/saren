import React from "react"
import "./future.scss"
import { Col, Row } from "antd"
import future from "../../images/home/future.svg"
import { Link } from "gatsby"
import PremiumButton from "../misc/premiumButton"

const Future = () => {
  return (
    <section className="future container" id="future">
      <Row>
        <Col md={{ span: 12 }} className="text">
          <h2>Core Features</h2>
          <span className="subtitle">Import any coin</span>
          <p>The coins are imported in a completely decentralized manner, with no requirement for anyone's consent.</p>
          <span className="subtitle">Advanced Analytics</span>
          <p>Detailed data like github links, explorers, social links and tweets straight from the app.</p>
          <span className="subtitle">Extensive Filtering</span>
          <p>Coins can be sorted based on market cap, volume, percentage gain, current price and many more filters.</p>
          <span className="subtitle">Sort trusted markets and exchanges</span>
          <p>Trade with confidence by sorting through exchanges and checking the trust rating.</p>
          <PremiumButton type="internal" link="/app">Read More</PremiumButton>
        </Col>
        <Col md={{ span: 12 }}>
          <img src={future} alt="Future" />
        </Col>
      </Row>
    </section>
  )
}

export default Future
