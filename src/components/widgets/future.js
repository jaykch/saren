import React from "react"
import "./future.scss"
import { Col, Row } from "antd"
import future from "../../images/illustrations/future.svg"

const Future = () => {
  return (
    <section className="future container" id="future">
      <h2>Future</h2>
      <Row>
        <Col md={{ span: 12 }}>
          <img src={future} alt="Future" />
        </Col>
        <Col md={{ span: 12 }} className="text">
          <h4>Subscription protocol and app</h4>
          <p>Starting from q2 2021 we will be working on a subscription protocol for independent creators that allows
            them to self-sustain through support from their user base.</p>
          <p>This subscription model will be censorship resistant and completely decentralised. No single entity will be
            able to block these payments or modify payment agreement without the authorisation of both the creator and
            support. Changes to the payment policies will be decentralised and governed independently for each creator,
            meaning that subscription policy for one user may be completely different from the policy of the other
            user.</p>
        </Col>
      </Row>
    </section>
  )
}

export default Future
