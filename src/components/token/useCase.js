import React from "react"
import { Col, Row } from "antd"
import useCase from "../../images/token/useCase.svg"
import "./useCase.scss"

const UseCase = () => {
  return (
    <section className="useCase container">
      <Row>
        <Col lg={8} className="text">
          <h2>Use Cases</h2>
          <ul>
            <li><strong>DAO: </strong>Any governance decisions like new token rewards, changes to development/market
              reserves etc. will be done through a protocol which will use Saren tokens as primary voting power.
            </li>
          </ul>
        </Col>
        <Col lg={16} className="imageContainer">
          <img src={useCase} alt="Use Case" />
        </Col>
        <Col lg={8}>
          <p><strong>Advertisements: </strong>Any advertisements on Saren apps will get a discount if paid in our native
            token. Profits from Advertisements will be used to buyback part of the token supply.
          </p>
        </Col>
        <Col lg={8}>
          <p><strong>App: </strong>Once the decentralisation of our app is complete, companies holding $ORBIT will be
            able to bid on advertisements directly on our app.
          </p>
        </Col>
        <Col lg={8}>
          <p><strong>Comments and User Profiles: </strong>$ORBIT holders will get special badges on their profiles and
            will be able to opt in for special reports and rewards like NFT drops.
          </p>
        </Col>
      </Row>
    </section>
  )
}

export default UseCase
