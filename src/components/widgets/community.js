import React from "react"
import "./community.scss"
import { Row, Col } from "antd"
import { FaTelegramPlane, FaGithub, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa"
import { RightOutlined } from "@ant-design/icons"

const Community = () => {
  return (
    <section className="community container">
      <Row>
        <Col md={{ span: 16, offset: 4 }}>
          <h2>Join Saren's global open-source community</h2>
          <p>Saren's financial tools provide reliable cryptocurrency data and economic strategies to help it's consumers
            with a social interactive market to support blockchain development.</p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 18, offset: 3 }}>
          <ul className="cards-container">
            <li className="card-wrapper">
              <a href="https://t.me/sarencommunity" target="_blank" rel="noreferrer noopener" className="card">
                <span className="title">
                <FaTelegramPlane />Telegram
                </span>
                <span className="subtitle">
                  Join the talk <RightOutlined />
                </span>
              </a>
            </li>
            <li className="card-wrapper">
              <a href="https://discord.gg/8YvpfQKn" target="_blank" rel="noreferrer noopener" className="card">
                <span className="title">
                  <FaDiscord />Discord
                </span>
                <span className="subtitle">
                  Get involved <RightOutlined />
                </span>
              </a>
            </li>
            <li className="card-wrapper">
              <a href="https://github.com/saren-io" target="_blank" rel="noreferrer noopener" className="card">
                <span className="title">
                  <FaGithub /> Github
                </span>
                <span className="subtitle">
                  Create with us <RightOutlined />
                </span>
              </a>
            </li>
            <li className="card-wrapper">
              <a href="https://t.me/sarencommunity" target="_blank" rel="noreferrer noopener" className="card">
                <span className="title">
                  <FaYoutube />Youtube
                </span>
                <span className="subtitle">
                  View our videos <RightOutlined />
                </span>
              </a>

            </li>
            <li className="card-wrapper">
              <a href="https://t.me/sarencommunity" target="_blank" rel="noreferrer noopener" className="card">
                <span className="title">
                  <FaTwitter />Twitter
                </span>
                <span className="subtitle">
                  Latest News <RightOutlined />
                </span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  )
}

export default Community
