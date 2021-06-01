import React from "react"
import "./investors.scss"
import { Row, Col } from "antd"

const data = [
  { title: "Stacker Ventures", description: "Venture Capital", url: "https://stacker.vc/" },
  { title: "Pending", description: "Exchange", url: "https://saren.io/" },
  { title: "Pending", description: "Private Investor", url: "https://saren.io/" }
]

const Investors = () => {
  return (
    <section className="aboutInvestors container">
      <h2>Investors</h2>
      <Row>
        <Col span={24} className="investorContainer">
          {data.map((investor, index) =>
            <Investor key={index} {...investor} />
          )}
        </Col>
      </Row>
    </section>
  )
}

const Investor = ({ key, title, description, url }) =>
  <a key={key} href={url} target="_blank" rel="noreferrer noopener" className="investor">
    <span className="title">{title}</span>
    <span className="description">{description}</span>
  </a>

export default Investors
