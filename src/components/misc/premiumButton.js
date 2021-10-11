import React from "react"
import "./premiumButton.scss"
import { Link } from "gatsby"

const PremiumButton = ({ children, link, type = "link", color = "default", to }) => {
  return (
    type === "link" ?
      <a className={`premium-button ${color}`} href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a> : type === "internal" ? <Link to={link} className={`premium-button ${color}`}>{children}</Link> :
        <button className="premium-button" type="submit">
          {children}
        </button>
  )
}

export default PremiumButton
