import React from "react"
import "./faqs.scss"
import { Row, Col, Collapse } from "antd"

const Panel = Collapse.Panel

const data = [
  {
    key: 1,
    question: "What is the subscription protocol and subscription app?",
    answer: "The second phase of our project is to build a decentralised subscription protocol and app to help independent creators sustain themselves. " +
      "As you may have heard, Patreon has come recently under fire for censoring independent creators and are currently facing lawsuits. " +
      "We believe there is a need for a support mechanism for independent creators so they can continue working on what they are passionate about through the support of their network."
  },
  {
    key: 2,
    question: "What is proof of engagement?",
    answer: "Proof of engagement is our mechanism through which we will be able to prove to clients and advertisers the engagement on our tools through a solidity protocol."
  },
  {
    key: 3,
    question: "How does proof of engagement token work?",
    answer: "Proof of engagement token is going to be our token that will be given out to users who successfully login to one of our tools daily. " +
      "It is going to be an ERC20 token that advertisers would need to purchase from the users to be able to advertise on any of our tools."
  },
  {
    key: 4,
    question: "What other uses will the token have?",
    answer: "The token will be used for key governance decisions and further use cases will be added in Whitepaper V2."
  },
  {
    key: 5,
    question: "What will the supply of these tokens be?",
    answer: "Total supply would be capped at 100 million. " +
      "Users will be rewarded with initial 25 million for the daily rewards and another 25 million will be reserved for marketing purposes like private sale, liquidity pools etc. " +
      "The remaining 50 million tokens will be held by the company for continued development"
  },
]

const Faqs = () => {
  return (
    <section className="faqs container" id="faqs">
      <h2>Frequently Asked Questions</h2>
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
