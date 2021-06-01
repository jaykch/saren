import React from "react"
import { RightOutlined } from "@ant-design/icons"
import "./partnerCard.scss"

const PartnerCard = ({ title, text, logo, key, url }) => {
  return (
    <div className="cardContainer" key={key}>
      <div className="card-wrapper">
        <a href={url} target="_blank" rel="noreferrer noopener" className="card">
                <span className="title">
                <img src={logo} alt={`${title} logo`} />{title}
                </span>
          <span className="subtitle">
            {text} <RightOutlined />
          </span>
        </a>
      </div>
    </div>
  )
}

export default PartnerCard
