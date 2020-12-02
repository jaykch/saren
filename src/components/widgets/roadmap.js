import React from "react"
import "./roadmap.scss"
import { Row, Col, Timeline } from "antd"

const RoadMap = () => {
  return (
    <section className="roadmap container">
      <h2>Roadmap</h2>
      <Row>
        <Col md={{ span: 16, offset: 4 }}>
          <Timeline pending="Future features" mode="alternate">
            <Timeline.Item label="2015-09-01">Create a services site </Timeline.Item>
            <Timeline.Item label="2015-09-01">Solve initial network problems </Timeline.Item>
            <Timeline.Item label="2015-09-01">Technical testing </Timeline.Item>
            <Timeline.Item label="2015-09-01">Network problems being solved </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </section>
  )
}

export default RoadMap
