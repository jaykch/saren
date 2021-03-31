import React from "react"
import "./banner.scss"
import { Row, Col } from "antd"
import PremiumButton from "../misc/premiumButton"
import home from "../../images/backgrounds/home.svg"
import logo from "../../images/logos/side_by_side.png"

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <Row>
          <Col md={12} xs={24} className="image">
            <img src={home} alt="Banner" />
          </Col>
          <Col lg={12} xs={24}>
            <div className="text">
              <div className="logoContainer">
                <img src={logo} alt="Icon" className="logo" />
              </div>
              <h1>Community built set of decentralised tools.</h1>
              <p>We aim to build decentralised tools for the cryptocurrency community that are more engaging than the current apps.</p>
              <br />
              <PremiumButton link="https://cerberus.saren.io/" color="inverted">
                Cerberus App
              </PremiumButton>
            </div>
          </Col>
        </Row>

      </div>
    </section>
  )
}

export default Banner
