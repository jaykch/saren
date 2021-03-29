import React from "react"
import { Col, Divider, Row } from "antd"
import "./why.scss"
import home from "../../images/cerberus/home.svg"
import analytics from "../../images/cerberus/analytics.svg"
import markets from "../../images/cerberus/markets.svg"
import addCoin from "../../images/cerberus/addCoin.svg"

const Why = () => {
  return (
    <section className="whyCerberus container">
      <Row>
        <h2>Why Cerberus?</h2>
        <Divider dashed />
        <Col md={12}>
          <img src={home} alt="Home Page" />
        </Col>
        <Col md={12} className="text">
          <p><strong>View all coins and sort them as needed</strong></p>
          <p>Filter all coins based on daily or hourly percentage gain. <br />
            You can sort the coins based on market cap, volume, percentage gain, current price and every field available
            on the interface.
          </p>
          <p>Additionally, you can favourite all your coins and have them load automatically the next time you come to
            the page.</p>
        </Col>
        <Divider dashed />
        <Col md={12} className="mobile">
          <img src={analytics} alt="Analytics Page" />
        </Col>
        <Col md={12} className="text">
          <p><strong>View advanced analytics for each coin</strong></p>
          <p>Check out detailed data like github links, explorers, social links and tweets (experimental feature)
            straight from the app.</p>
          <p>Copy the contract address or check out public sentiment. We display all information you would need as an
            investor to assess your next moon shot.</p>
        </Col>
        <Col md={12} className="desktop">
          <img src={analytics} alt="Analytics Page" />
        </Col>
        <Divider dashed />
        <Col md={12}>
          <img src={markets} alt="Markets Table" />
        </Col>
        <Col md={12} className="text">
          <p><strong>Sort trusted markets and exchanges</strong></p>
          <p>Trade with confidence by sorting through exchanges and checking the trust rating. <br /> Click the exchange
            name to take you directly to the trading pair of that exchange.</p>
          <p>Sort through exchanges with highest liquidity or trust rating and make an informed choice on where to buy
            your coins.</p>
        </Col>
        <Divider dashed />
        <Col md={12} className="mobile">
          <img src={addCoin} alt="Add Coin Page" />
        </Col>
        <Col md={12} className="text">
          <p><strong>Import any coin from coingecko</strong></p>
          <p>Didn't find your favourite coins listed on cerberus but found them on coingecko? <br />
            You can now import them directly, just click on import coins and type the name or symbol in the search bar.
            Click on preview and confirm it is the coin you are looking for.
          </p>
          <p>The coins are imported in a completely decentralised way without needing any approval from anyone. Once you
            import, wait for confirmation notification and the coin should be available on the app straight away.</p>
        </Col>
        <Col md={12} className="desktop">
          <img src={addCoin} alt="Add Coin Page" />
        </Col>
      </Row>
    </section>
  )
}

export default Why
