import React from "react"
import { Col, Row } from "antd"
import useCase from "../../images/token/useCase.svg"
import "./useCase.scss"

const UseCase = () => {
  return (
    <section className="useCase container">
      <Row>
        <Col lg={12} className="imageContainer">
          <img src={useCase} alt="Use Case" />
        </Col>
        <Col lg={12} className="text">
          <h2>Use Cases</h2>
          <ul>
            <li><strong>Governance Protocol: </strong>Any governance decisions like new token rewards, changes to
              liquidity reserves etc. will be done through a protocol which will use Saren tokens as primary voting
              power.
            </li>
            <li><strong>Subscription protocol: </strong>Holders of Saren will get reduced fees on the upcoming
              subscription protocol in Q3.
            </li>
            <li><strong>Advertisements: </strong>Any advertisements on Saren apps will have to paid for in Saren tokens
              which will be redistributed amongst the app users to build a self-sustained ecosystem.
            </li>
            <li><strong>Cerberus: </strong>Once the decentralisation of Cerberus is complete, companies will have to
              hold Saren tokens to be able to list new coins on Cerberus.
            </li>
            <li><strong>Shill my coins app: </strong>Our next app that will be released in Q2 2021 will be a reddit like
              forum where Saren holders will be able to make a post about any coin listed on Cerberus.
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  )
}

export default UseCase
