import React from "react"
import "./banner.scss"
import { Col, Row } from "antd"
import banner from "../../images/about/banner.svg"
import PremiumButton from "../misc/premiumButton"

const Banner = () => {
  return (
    <section className="aboutBanner">
      <div className="container">
        <Row>
          <Col lg={8} xs={24}>
            <div className="text">
              <h1>What is Saren?</h1>
              <div className="logoContainer">
                <p>Saren is a cryptocurrency data aggregator that supports over 1,000 crypto-assets. Saren is one of the
                  world's largest independent sources of trustworthy cryptocurrency statistics.</p>
              </div>
              <PremiumButton link="https://www.linkedin.com/company/saren-io/">
                View Linkedin
              </PremiumButton>
            </div>
          </Col>
          <Col lg={16} xs={24} className="image">
            <img src={banner} alt="Banner" />
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default Banner
