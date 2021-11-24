import React from "react"
import { Col, Row } from "antd"
import "./distribution.scss"
import distribution from "../../images/token/distribution.svg"

const data = [
  { name: "Total Supply", value: 100000000 },
  { name: "Circulating Supply", value: 30000000 },
  { name: "DAO", value: 35000000 },
  { name: "New Users", value: 10000000 }
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
              {data.map((tokens, key)=>
                <li key={key}><span>{tokens.name} </span><span>{tokens.value}</span></li>
              )}
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Distribution
