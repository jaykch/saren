import React from "react"
import { Col, Row } from "antd"
import "./why.scss"
import banner from "../../images/home/why.svg"

const WhySaren = () => {
  return (
    <section className="whySaren">
      <div className="container">
        <Row>
          <Col lg={8} xs={24}>
            <div className="text">
              <h2>Saren Explained</h2>
            </div>
          </Col>
          <Col lg={16} xs={24}>
            <p>Saren is a cryptocurrency data gathering and tracking website that gives users a first-person view of
              digital currencies and tools to examine the market thoroughly.</p>
            <p>We measure community growth, open-source development, big events, and on-chain indicators in
              addition to price, volume, and market capitalization.</p>
          </Col>
          <Col lg={{ span: 12, offset: 6 }} xs={24} className="image">
            <img src={banner} alt="Banner" />
            <p className="cancelProof">
                <span className="gradient">Cancel </span>
              {/*<span className="gradient">Censorship </span>*/}
              {/*<span className="gradient">Propaganda </span>*/}
              {/*<span className="gradient">Ban </span>*/}
              <span className="proof">Proof</span></p>
          </Col>
        </Row>

      </div>
    </section>
  )
}

export default WhySaren
