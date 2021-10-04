import React from "react"
import "./blog.scss"
import { Row, Col } from "antd"

import banner from "../../images/blog/big.jpg"
import blog1 from "../../images/blog/1.jpg"
import blog2 from "../../images/blog/2.jpg"
import blog3 from "../../images/blog/3.jpg"

const images = [blog1, blog2, blog3]

const blogs = [
  {
    title: "Saren Update",
    description: "We would like to apologise for the lack of communication over the past few weeks...",
    url: "https://medium.com/@Saren_io/saren-update-3791545ed292"
  },
  {
    title: "User Authentication",
    description: "Password based authentication is an insecure approach to online transactions...",
    url: "https://medium.com/@Saren_io/user-authentication-a-journey-from-old-restful-to-decentralized-system-5881f56ff267"
  },
  {
    title: "New login partnership\n",
    description: "We are happy to announce that Curtis Bear will be the first project using our login system for minting their NFTs...",
    url: "https://medium.com/@Saren_io/new-login-partnership-af5f905f5c66"
  }
]

const Blog = () => {
  return (
    <section className="blog container" id="blog">
      <Row>
        <Col lg={12} xs={24} className="blog-banner">
          <img src={banner} alt="Blog Banner" />
          <div className="text">
            <h3>{blogs[0].title}</h3>
            <p>{blogs[0].description}</p>
            <a href={blogs[0].url}>Read More...</a>
          </div>
        </Col>
        <Col lg={12} xs={24} className="links">
          <h2>Blog</h2>
          <span className="subtitle">Latest updates on our project</span>
          <ul>
            {blogs.map(({ title, description, url }, index) =>
              <li key={index}>
                <img src={images[index]} alt={`Blog ${index + 1}`} />
                <div className="text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer">Read More...</a>
                </div>
              </li>
            )}
          </ul>
        </Col>
      </Row>

    </section>
  )
}

export default Blog
