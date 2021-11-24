import React from "react"
import { Col, Row } from "antd"
import "./why.scss"
import analytics from "../../images/app/whycerberus1.svg"
import markets from "../../images/app/whycerberus2.svg"
import addCoin from "../../images/app/whycerberus3.svg"
import future from "../../images/home/future.svg"
import userExperience from "../../images/app/whycerberus4.svg"
import sendTokens from "../../images/token/distribution.svg"

const Why = () => {
  return (
    <section className="whyCerberus container">
      <Row>
        <Col xs={24}>
          <h2>Why Orbit?</h2>
        </Col>
        <Col md={12}>
          <img src={userExperience} alt="User Experience" />
        </Col>
        <Col md={12} className="text">
          <h3>Seamless user experience with ultra-fast load times</h3>
          <p>A state of the art user interface along with ultra fast load times, Orbit’s experienced team has worked
            extremely hard to make the customer experience seamless. Our load times are significantly better than other
            industry giants.
          </p>
        </Col>
        <Col md={12} className="mobile">
          <img src={analytics} alt="Analytics Page" />
        </Col>
        <Col md={12} className="text">
          <h3>Over 1,500 Coins & 5,000 NFT Projects</h3>
          <p>Orbit has an extensive ever-growing repository of tokens and NFT project for our users. Over 20 set of
            filters allow users to sort through thousands of tokens within seconds, you will never have to scroll
            through tables again.
          </p>
          <p>All coins and NFTs can be sorted based on market cap, volume, percentage gain, current price and many
            more filters.
          </p>
          <p> Don’t see a coin you want? Orbit allows its users to add any coin using our decentralised “import”
            feature.</p>
        </Col>
        <Col md={12} className="desktop">
          <img src={analytics} alt="Analytics Page" />
        </Col>
        <Col md={12}>
          <img src={markets} alt="Markets Table" />
        </Col>
        <Col md={12} className="text">
          <h3>Advanced Analytics</h3>
          <p>Orbit uses the most advanced analytics to make crypto more accessible and efficient throughout the world by
            providing impartial, high-quality, and reliable data to retail consumers so they can make their own educated
            decisions.</p>
          <p>Orbit also allows users to have a complete understanding of each token’s social analytics and cover
            everything there is to know about all listed tokens.</p>
          <p>Detailed data like github pushes, explorers, social links and tweets straight from the app will help you
            make the right decision.</p>
        </Col>
        <Col md={12} className="mobile">
          <img src={addCoin} alt="Add Coin Page" />
        </Col>
        <Col md={12} className="text">
          <h3>Your portfolio and analytics in one single place</h3>
          <p>Track and manage your DeFi portfolio in one place. Check your net worth with our multi-wallet aggregated
            view, examine your whole wallet history, and learn more with sophisticated analytics.</p>
        </Col>
        <Col md={12} className="image-container">
          <img src={future} alt="Future" />
        </Col>
        <Col md={12} className="desktop">
          <img src={addCoin} alt="Add Coin Page" />
        </Col>
        <Col md={12} className="text">
          <h3>Trade History</h3>
          <p>Orbit’s wallet view allows users to view their full trading history from the day of wallet initiation.
            You can now check transfer of tokens and NFTs between wallets, you will never have to scroll through
            etherscan for your transaction history again.
          </p>
        </Col>
        <Col md={12} className="mobile">
          <img src={sendTokens} alt="Send Tokens" className="smaller" />
        </Col>
        <Col md={12} className="text">
          <h3>Send Tokens or NFTs</h3>
          <p>Sending Tokens or NFTs was never this easy.</p>
          <p>Want to transfer funds between multiple chains or send tokens and NFTs to different wallets? You can do it
            directly from our advanced Send functionality.</p>
        </Col>
        <Col md={12} className="desktop">
          <img src={sendTokens} alt="Send Tokens" className="smaller" />
        </Col>
      </Row>
    </section>
  )
}

export default Why
