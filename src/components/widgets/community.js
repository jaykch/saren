import React from "react"
import "./community.scss"
import { Row, Col } from "antd"
import { FaTelegramPlane, FaGithub, FaDiscord, FaTwitter, FaLinkedin } from "react-icons/fa"
import { RightOutlined } from "@ant-design/icons"


const links = [
  {
    title: "Telegram",
    subtitle: "Join the talk",
    url: "https://t.me/sarencommunity",
    logo: <FaTelegramPlane />
  },
  {
    title: "Twitter",
    subtitle: "Read the latest",
    url: "https://twitter.com/saren_io",
    logo: <FaTwitter />
  },
  {
    title: "Linkedin",
    subtitle: "View the people",
    url: "https://www.linkedin.com/company/saren-io",
    logo: <FaLinkedin />
  },
  {
    title: "Discord",
    subtitle: "Get involved",
    url: "https://discord.gg/e9qtVrtukg",
    logo: <FaDiscord />
  },
  {
    title: "Github",
    subtitle: "Create with us",
    url: "https://github.com/saren-io",
    logo: <FaGithub />
  }
]

const Community = () => {
  return (
    <section className="community container">
      <Row>
        <Col md={{ span: 16, offset: 4 }}>
          <span className="banner-title">Changing the way you analyse the crypto market!</span>
        </Col>
      </Row>
      <div className="community-links">
        <Row>
          <Col md={{ span: 10, offset: 2 }}>
            <span className="subtitle">Join Saren's global open-source community</span>
          </Col>
          <Col md={{ span: 10 }}>
            <p>Saren's financial tools provide reliable cryptocurrency data and economic strategies to help it's
              consumers with a social interactive market.</p>
          </Col>
        </Row>
        <div className="divide" />
        <Row>
          <Col md={{ span: 18, offset: 3 }}>
            <ul className="cards-container">
              {links.map(({ title, subtitle, url, logo }, index) =>
                <SocialLink title={title} subtitle={subtitle} url={url} logo={logo} index={index} />)}
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  )
}

const SocialLink = ({ url, title, subtitle, logo, index }) => {
  return (
    <li className="card-wrapper" key={index}>
      <a href={url} target="_blank" rel="noreferrer noopener" className="card">
        {logo}
        <div className="text">
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle} <RightOutlined /></span>
        </div>
      </a>
    </li>
  )
}

export default Community