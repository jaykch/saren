import React from "react"
import { Col, Row } from "antd"
import "./why.scss"
import analytics from "../../images/app/whycerberus1.svg"
import markets from "../../images/app/whycerberus2.svg"
import addCoin from "../../images/app/whycerberus3.svg"

const Why = () => {
  return (
    <section className="whyCerberus container">
      <Row>
        <Col xs={24}>
          <h2>Why Saren?</h2>
        </Col>
        <Col md={12} className="mobile">
          <img src={analytics} alt="Analytics Page" />
        </Col>
        <Col md={12} className="text">
          <h3>Over 1,000 coins and more added every day!</h3>
          <p>Our big repository of crypto projects will keep your eyes glued to the platform for the next big project!
            analyse your existing portfolio or explore from our huge library of tokens.</p>
        </Col>
        <Col md={12} className="desktop">
          <img src={analytics} alt="Analytics Page" />
        </Col>
        <Col md={12}>
          <img src={markets} alt="Markets Table" />
        </Col>
        <Col md={12} className="text">
          <h3>Advanced analytics to help you make the right decision</h3>
          <p>Our advanced analytical tools cover everything there is to know about all listed tokens. </p>
          <p>Detailed data like github pushes, explorers, social links and tweets straight from the app will help you
            make the right decision.</p>
        </Col>
        <Col md={12} className="mobile">
          <img src={addCoin} alt="Add Coin Page" />
        </Col>
        <Col md={12} className="text">
          <h3>Extensive filters to help you find the most suitable token</h3>
          <p>All coins can be sorted based on market cap, volume, percentage gain, current price and many more filters.</p>
        </Col>
        <Col md={12} className="desktop">
          <img src={addCoin} alt="Add Coin Page" />
        </Col>
      </Row>
    </section>
  )
}

export default Why
