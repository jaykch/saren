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
          <Col lg={12} xs={24} className="image">
            <img src={banner} alt="Banner" />
          </Col>
          <Col lg={12} xs={24}>
            <div className="text">
              <h1>About Us</h1>
              <div className="logoContainer">
                <p>We are a team of novice and experts in crypto working towards decentralisation of traditional
                  applications.</p>
              </div>
              <PremiumButton link="https://www.linkedin.com/company/saren-io/" color="inverted">
                View Linkedin
              </PremiumButton>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default Banner
