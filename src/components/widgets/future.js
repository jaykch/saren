import React from "react"
import "./future.scss"
import { Col, Row } from "antd"
import future from "../../images/home/future.svg"
import PremiumButton from "../misc/premiumButton"

const Future = () => {
  return (
    <section className="future container" id="future">
      <Row>
        <Col md={{ span: 12 }} className="text">
          <h2>Core Features</h2>
          <span className="subtitle">Detailed Market View</span>
          <p>Searching, filtering, and evaluating  DeFi assets has never been easier. Orbit allows users to view the most popular tokens, compare historical returns, and more.</p>
          <span className="subtitle">Advanced Analytics</span>
          <p>Detailed data like GitHub links, explorers, social links, and tweets for each token are directly available on Orbit.</p>
          <span className="subtitle">Import any coin</span>
          <p>The coins are imported in a completely decentralized manner, with no requirement of anyone's consent.</p>
          <span className="subtitle">Personal wallet</span>
          <p>Orbit users can view their entire wallet and coin listing data in a single dashboard.</p>
          <span className="subtitle">Send or Swap Tokens & NFTs</span>
          <p>Users are able to send / swap tokens and NFTs between multiple chains and wallets.</p>
          <span className="subtitle">Wallet History</span>
          <p>Users are able to view their token and NFT history to analyse their holdings better.</p>
          <PremiumButton type="internal" link="/app">Read More</PremiumButton>
        </Col>
        <Col md={{ span: 12 }} className="image-container">
          <img src={future} alt="Future" />
        </Col>
      </Row>
    </section>
  )
}

export default Future
