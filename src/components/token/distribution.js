import React from "react"
import { Col, Row } from "antd"
import "./distribution.scss"
import distribution from "../../images/token/distribution.svg"

const data = [
  { name: "Team Allocation", value: 100000000 },
  { name: "Liquidity Reserve", value: 250000000 },
  { name: "Development", value: 400000000 },
  { name: "Marketing", value: 250000000 }
]


const Distribution = () => {

  return (
    <section className="tokenDistribution container">
      <Row>
        <Col lg={12}>
          <img src={distribution} alt="Token Distribution" />
        </Col>
        <Col lg={12}>
          <div className="details">
            <h2>Token Distribution ($ORBIT)</h2>
            <ul>
              <li><span>Total Supply </span><span>100,000,000</span></li>
              <li><span>Circulating Supply</span><span>50,000,000</span></li>
              <li><span>Team Allocation</span><span>10,000,000</span></li>
              <li><span>Development</span><span>25,000,000</span></li>
              <li><span>Marketing</span><span>15,000,000</span></li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Distribution
