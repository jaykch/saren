import React from "react"
import "./roadmap.scss"
import { Row, Col, Steps } from "antd"

const { Step } = Steps

const RoadMap = () => {
  return (
    <section className="roadmap container" id="roadmap">
      <h2>Roadmap</h2>
      <Row>
        <Col lg={24}>
          <Steps progressDot current={2} responsive={true}>
            <Step title="Brand Refresh" />
            <Step title="App Redesign" />
            <Step title="Wallet History and Send" />
            <Step title="Comments and Ratings" />
            <Step title="Multichain Dex" />
            <Step title="Staking" />
            <Step title="Multichain Wallet Viewer" />
          </Steps>
        </Col>
      </Row>
    </section>
  )
}

export default RoadMap
