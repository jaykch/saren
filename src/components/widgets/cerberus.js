import React from "react"
import "./cerberus.scss"
import pricesThumb from "../../images/app/pricesThumb.jpg"
import detailsThumb from "../../images/app/analytics.svg"
import walletThumb from "../../images/app/walletThumb.jpg"
import prices from "../../videos/prices.mp4"
import { Col, Row, Tabs } from "antd"
import PremiumButton from "../misc/premiumButton"
import { Link } from "gatsby"

const { TabPane } = Tabs


const Cerberus = () => {
  return (
    <section className="cerberus container" id="cerberus">
      <Row>
        <Col md={{span:20, offset:2}}>
          <h2>Explore 100s of cryptocurrencies with our tool</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{span:20, offset:2}} xs={24}>
          <Tabs defaultActiveKey="1" centered={true}>
            <TabPane tab="Prices" key="1">
              <video preload='auto' poster={pricesThumb} loop autoPlay muted>
                <source src={prices} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </TabPane>
            <TabPane tab="Details" key="2">
              <img src={detailsThumb} alt="" />
            </TabPane>
            <TabPane tab="Tracker" key="3">
              <img src={walletThumb} alt="" />
            </TabPane>
          </Tabs>
          <PremiumButton link="/cerberus">
            <Link to="/cerberus">View Details ></Link>
          </PremiumButton>
        </Col>
      </Row>
    </section>
  )
}

export default Cerberus
