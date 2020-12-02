import React from "react"
import "./faqs.scss"
import { Row, Col, Collapse } from "antd"

const Panel = Collapse.Panel

const data = [
  { key: 1, question: "What is proof of engagement?", answer: "Something" },
  { key: 2, question: "How does proof of engagement token work?", answer: "Something" },
]

const Faqs = () => {
  return (
    <section className="faqs container">
      <h2>Frequently Asked Questions</h2>
      <Row>
        <Col md={{ span: 18, offset: 2 }} className="snippet-content">
          <Collapse bordered={false} accordion>
            {data.map(({key, question, answer}) =>
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
