import React from "react"
import "./investors.scss"
import { Row, Col } from "antd"

const data = [
  {
    title: "Stacker Ventures",
    subtitle: "Venture Capital",
    description: "Stacker Ventures is pioneering an open protocol for early-stage investing that aligns the incentives of community investors with founding teams.",
    url: "https://stacker.vc/"
  },
  {
    title: "PSI Capital",
    subtitle: "Venture Capital",
    description: "PSI capital is a capital investment group that invests in early crypto startups with an allocation of 1M USD towards funding decentralised protocols.",
    url: "https://psi.capital/"
  },
  {
    title: "Penguin Party",
    subtitle: "Decentralised Exchange",
    description: "Penguin Party is a group of open-source software developers fighting to improve and defend decentralised protocols like Uniswap.",
    url: "https://penguinparty.eth.limo/"
  }
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

const Investor = ({ key, title, subtitle, description, url }) =>
  <a key={key} href={url} target="_blank" rel="noreferrer noopener" className="investor">
    <span className="title">{title}</span>
    <span className="subtitle">{subtitle}</span>
    <span className="description">{description}</span>
  </a>

export default Investors
