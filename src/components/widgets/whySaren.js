import React from "react"
import "./whySaren.scss"
import { Col, Row } from "antd"
import why from "../../images/illustrations/1.svg"

const WhySaren = () => {
  return (
    <section className="why-saren container" id="whyus">
      <h2>Why Saren?</h2>
      <Row>
        <Col md={{ span: 12}} className="text">
          <h4>Get rewarded for keeping track of your crypto</h4>
          <p>Our industry first rewards mechanism rewards our users for keeping track of their favourite
            projects. </p>
          <p>Each user is paid out our Proof of Engagement token every week which they can
            either sell to companies who want to use our tools to advertise their projects or use it to help shape the
            future of Saren through our governance protocol.</p>
        </Col>
        <Col md={{ span: 12 }}>
          <img src={why} alt="Why Us?" />
        </Col>
      </Row>
    </section>
  )
}

export default WhySaren
