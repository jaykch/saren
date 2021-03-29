import React from "react"
import "./premiumButton.scss"

const PremiumButton = ({ children, link, type = "link", color = "default", to }) => {
  return (
    type === "link" ?
      <a className={`premium-button ${color}`} href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a> :
      <button className="premium-button" type="submit">
        {children}
      </button>
  )
}

export default PremiumButton
