import React from "react"
import "./premiumButton.scss"

const PremiumButton = ({ children, link, type = "link" }) => {
  return (
    type === "link" ?
      <a className="premium-button" href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a> :
      <div className="premium-button">
        {children}
      </div>
  )
}

export default PremiumButton
