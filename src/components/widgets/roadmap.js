import React from "react"
import "./roadmap.scss"
import { Row, Col, Timeline } from "antd"
import { CheckSquareOutlined, ClockCircleOutlined } from '@ant-design/icons';

const RoadMap = () => {
  return (
    <section className="roadmap container" id="roadmap">
      <h2>Roadmap</h2>
      <Row>
        <Col md={{ span: 16, offset: 4 }} xs={24}>
          <Timeline pending="Q4 2021: Future features and strategy" mode="alternate">
            <Timeline.Item label="Q3 2020" color="green" dot={<CheckSquareOutlined />}>
              <p>Initial Concept</p>
              <p>First prototype</p>
              <p>Cerberus Wallet</p>
            </Timeline.Item>
            <Timeline.Item label="Q4 2020" color="green" dot={<CheckSquareOutlined />}>
              <p>Cerberus V1</p>
              <p>Coin List</p>
              <p>Blog</p>
            </Timeline.Item>
            <Timeline.Item label="Q1 2021" color="green" dot={<CheckSquareOutlined />}>
              <p>Proof Of Engagement Token</p>
              <p>Saren community</p>
            </Timeline.Item>
            <Timeline.Item label="Q2 2021" dot={<ClockCircleOutlined />}>
              <p>Shill My Coins App</p>
              <p>Decentralised coin listngs</p>
            </Timeline.Item>
            <Timeline.Item label="Q3 2021" dot={<ClockCircleOutlined />}>
              <p>Subscription protocol</p>
              <p>Creator subscription App</p>
              <p>Crypto subscription financial tools</p>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </section>
  )
}

export default RoadMap
