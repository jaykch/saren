import React from "react"
import { Col, Row } from "antd"
import "./releaseSchedule.scss"


const ReleaseSchedule = () => {
  return (
    <section className="releaseSchedule container">
      <Row>
        <Col lg={8}>
          <h2>Vesting Schedule</h2>
        </Col>
        <Col lg={16}>
          <p>Team tokens will be locked for 1 year. Additionally, development and marketing tokens will be unlocked at
            500,000 tokens per month.</p>
          <p>Any changes to the vesting schedule will need to be voted in through the governance protocol.</p>
        </Col>
      </Row>
    </section>
  )
}

export default ReleaseSchedule
