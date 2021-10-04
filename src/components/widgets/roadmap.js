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
            <Step title="Version 1" />
            <Step title="Brand Refresh" />
            <Step title="New Tokenomics" />
            <Step title="App Redesign" />
            <Step title="Version 2" />
            <Step title="Liquidity Mining" />
            <Step title="Transition to DAO" />
          </Steps>
        </Col>
      </Row>
    </section>
  )
}

export default RoadMap
