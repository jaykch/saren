import React from "react"
import "./blog.scss"
import { Row, Col } from "antd"

const Blog = () => {
  return (
    <section className="blog container" id="blog">
      <h1>Blog</h1>
      <Row>
        <Col lg={24}>
          <span className="subtitle">Latest updates on our projects</span>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={12} className="blog-tile">
          <div>
            <h6>Charts and UI fixes</h6>
            <p>Now was the time to just wrap up everything and finish the initial version. When I started this app, I
              had no idea it was going to be a full-blown DAPP...</p>
            <a href="https://blog.saren.io/charts/">Read More</a>
          </div>
        </Col>
        <Col lg={6} sm={12} className="blog-tile">
          <div>
            <h6>Converting to a Decentralised App</h6>
            <p>At this stage, I felt like I had all the information I needed to help me with my trading. One of the
              things that felt missing... </p>
            <a href="https://blog.saren.io/converting-to-dapp/">Read More</a>
          </div>
        </Col>
        <Col lg={6} sm={12} className="blog-tile">
          <div>
            <h6>Non ERC20 Coins</h6>
            <p>After finishing the ERC20 list. I now wanted to check analytics for other coins I was holding. Coins like
              bitcoin and polkadot. I knew how...</p>
            <a href="https://blog.saren.io/non-eth-coins/">Read More</a>
          </div>
        </Col>

        <Col lg={6} sm={12} className="blog-tile">
          <div>
            <h6>Coin List</h6>
            <p>Now that I was satisfied with the analytics I was getting out of the coin page,I wanted to see more
              details about more coins. Coins that I...</p>
            <a href="https://blog.saren.io/coin-list/">Read More</a>
          </div>
        </Col>
        <Col lg={6} sm={12} className="blog-tile">
          <div>
            <h6>Coin Analytics</h6>
            <p>After finishing up the last version, coin page still looked incomplete to me. It seemed like I had all
              the information there, but a lot...</p>
            <a href="https://blog.saren.io/coin-analytics/">Read More</a>
          </div>
        </Col>
        <Col lg={12} sm={12} className="blog-tile">
          <div>
            <h6>Coin Details</h6>
            <p>After using the app for a while I realised, there needs to be a better way to view the information I
              needed. I use it...</p>
            <a href="https://blog.saren.io/coin-details/">Read More</a>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Blog
