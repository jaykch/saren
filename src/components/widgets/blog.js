import React from "react"
import "./blog.scss"
import { Row, Col } from "antd"

const Blog = () => {
  return (
    <section className="blog container">
      <h1>Blog</h1>
      <Row>
        <Col sm={24}>
          <span className="subtitle">Latest updates on our projects</span>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col sm={12} className="blog-tile">
          <div>
            <h6>The New Focus on UX Design in Technology</h6>
            <p>The phrase, “form over function” is a perfect description of a problem that was
              common in technology interfaces prior to the introduction of UX design...</p>
            <a href="http://blog.lavonglobal.com/">Read More</a>
          </div>
        </Col>
        <Col sm={6} className="blog-tile">
          <div>
            <h6>Don Draper and the Importance of Confidence</h6>
            <p>If you’ve seen AMC’s Mad Men, a show set in the 1960s during the golden age of
              advertising...</p>
            <a href="http://blog.lavonglobal.com/">Read More</a>
          </div>
        </Col>
        <Col sm={6} className="blog-tile">
          <div>
            <h6>Restaurants Have Terrible Websites. Don’t Be Like Them</h6>
            <p>We get it. You’re not a web design firm...</p>
            <a href="http://blog.lavonglobal.com/">Read More</a>
          </div>
        </Col>

        <Col sm={6} className="blog-tile">
            <div>
                <h6>Blog Title</h6>
                <p>Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum
                    dolor
                    seti </p>
                <a href="http://blog.lavonglobal.com/">Read More</a>
            </div>
        </Col>
        <Col sm={6} className="blog-tile">
            <div>
                <h6>Blog Title</h6>
                <p>Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum dolor seti Lorem ipsum
                    dolor
                    seti </p>
                <a href="http://blog.lavonglobal.com/">Read More</a>
            </div>
        </Col>
        <Col sm={12} className="blog-tile">
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
