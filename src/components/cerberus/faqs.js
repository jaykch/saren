import React from "react"
import { Col, Divider, Row, Collapse } from "antd"
import "./faqs.scss"

const Panel = Collapse.Panel

const data = [
  {
    key: 1,
    question: "Why should I use your platform instead of CMC or Coingecko?",
    answer: "People will get tokens daily for using it which they can sell to " +
      "companies who need them to be able to list the coins. This way it will be a " +
      "closed ecosystem where the community is rewarded instead of let's say binance in the case of CMC."
  },
  {
    key: 2,
    question: "What does app offer that the competition is lacking?",
    answer: "We offer decentralised listings where $SAR holders can vote for coins to be listed on Cerberus. " +
      "It is the first of it's kind decentralised coin listing, that brings a transparent alternative to big crypto monopolies like Coin Market Cap"
  },
  {
    key: 3,
    question: "What are the things that we’re trying to solve with creating our own platform?",
    answer: "We are trying to build a wikipedia for crypto prices and details. Additionally, " +
      "we are trying to give the power back to the people instead of these big companies like binance."
  }
]

const Faqs = () => {
  return (
    <section className="faqsCerberus container">
      <h2>Frequently Asked Questions</h2>
      <Divider dashed />
      <Row>
        <Col md={{ span: 18, offset: 2 }} className="snippet-content">
          <Collapse bordered={false} accordion>
            {data.map(({ key, question, answer }) =>
              <Panel header={question} key={key}>
                <p>{answer}</p>
              </Panel>
            )}
          </Collapse>
        </Col>
      </Row>
    </section>
  )
}

export default Faqs
