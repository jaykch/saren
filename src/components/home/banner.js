import React from "react"
import "./banner.scss"
import { Row, Col } from "antd"

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <Row>
          <Col span={12}>
            <div className="text">
              <h2>Banner </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sem gravida, imperdiet risus ut,
                eleifend odio. Vestibulum at feugiat nulla, vel rutrum leo. Vivamus orci quam, pharetra non nisl eu,
                aliquam efficitur mi.</p>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default Banner
