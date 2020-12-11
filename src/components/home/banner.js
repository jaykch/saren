import React from "react"
import "./banner.scss"
import { Row, Col } from "antd"
import PremiumButton from "../misc/premiumButton"

const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="container">
        <Row>
          <Col md={12} xs={24}>
            <div className="text">
              <h2>Get rewarded for tracking your crypto </h2>
              <p>Use our cerberus tool to take a deep dive into the blockchain world with a gamified Coingecko model
                that rewards you for keeping track of your cryptocurrencies.</p>
              <br />
              <PremiumButton link="https://cerberus.saren.io/" color="inverted">
                Cerberus
              </PremiumButton>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default Banner
