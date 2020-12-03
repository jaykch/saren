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
            <h6>Blog Title</h6>
            <p>Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum
              dolor
              seti </p>
            <a href="http://blog.lavonglobal.com/">Read More</a>
          </div>
        </Col>
        <Col lg={6} sm={12} className="blog-tile">
          <div>
            <h6>Blog Title</h6>
            <p>Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum
              dolor
              seti </p>
            <a href="http://blog.lavonglobal.com/">Read More</a>
          </div>
        </Col>
        <Col lg={6} sm={12} className="blog-tile">
          <div>
            <h6>Blog Title</h6>
            <p>Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum
              dolor
              seti </p>
            <a href="http://blog.lavonglobal.com/">Read More</a>
          </div>
        </Col>

        <Col lg={6} sm={12} className="blog-tile">
            <div>
                <h6>Blog Title</h6>
                <p>Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum
                    dolor
                    seti </p>
                <a href="http://blog.lavonglobal.com/">Read More</a>
            </div>
        </Col>
        <Col lg={6} sm={12} className="blog-tile">
            <div>
                <h6>Blog Title</h6>
                <p>Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum
                    dolor
                    seti </p>
                <a href="http://blog.lavonglobal.com/">Read More</a>
            </div>
        </Col>
        <Col lg={12} sm={12} className="blog-tile">
            <div>
                <h6>Blog Title</h6>
                <p>Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum
                    dolor
                    seti </p>
                <a href="http://blog.lavonglobal.com/">Read More</a>
            </div>
        </Col>
      </Row>
    </section>
  )
}

export default Blog
