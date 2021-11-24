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
            <li><strong>DAO: </strong>Governance will only be available to Staked Token holders.
              <br />
              Voting requires $ORBIT and will take place on snapshot while the Orbit Governance Portal is completed. The
              portal will then be the main hub for governance discussions, debates and more.
            </li>
          </ul>
        </Col>
        <Col lg={16} className="imageContainer">
          <img src={useCase} alt="Use Case" />
        </Col>
        <Col lg={8}>
          <p><strong>Tiers and Roles: </strong>There will be three different tiers. Gold, Silver and Bronze, higher
            tiers will include access to lower tier features. <br />
            Features: Access to DAO proposals, API, validators and sponsored banners and more.
          </p>
        </Col>
        <Col lg={8}>
          <p><strong>Advanced Platform Functionality for token holders: </strong> Advanced features like editing
            comments, leaving reviews and user profiles will be available to our tiered members.
          </p>
        </Col>
        <Col lg={8}>
          <p><strong>Access to API and user data: </strong>$ORBIT holders will get special access to user trends and
            data endpoints to help them make better investment decisions.
          </p>
        </Col>
      </Row>
    </section>
  )
}

export default UseCase
