import React from "react"
import "./cerberus.scss"
import cerberus from "../../images/cerberus/cerberus.jpg"
import { Col, Row, Tabs } from "antd"
import PremiumButton from "../misc/premiumButton"

const { TabPane } = Tabs


const Cerberus = () => {
  return (
    <div className="cerberus container">
      <Row>
        <Col md={{span:20, offset:2}}>
          <h2>Explore 100s of cryptocurrencies with our cerberus tool</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{span:20, offset:2}} xs={24}>
          <Tabs defaultActiveKey="1" centered={true}>
            <TabPane tab="Price Feeds" key="1">
              <img src={cerberus} alt="" />
            </TabPane>
            <TabPane tab="Details" key="2">
              <img src={cerberus} alt="" />
            </TabPane>
            <TabPane tab="Wallet Tracker" key="3">
              <img src={cerberus} alt="" />
            </TabPane>
          </Tabs>
          <PremiumButton link="https://cerberus.saren.io/">
            Cerberus
          </PremiumButton>
        </Col>
      </Row>
    </div>
  )
}

export default Cerberus
