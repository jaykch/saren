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
    title: "Fortnightly AMA — 20/11/2021",
    description: "When stacker ventures invested into Saren there was a time lock on their tokens what will happen...",
    url: "https://orbitdefi.medium.com/fortnightly-ama-20-11-2021-b80acd41f49f"
  },
  {
    title: "Saren’s Fortnightly AMA",
    description: "With the launch of version 2 around the corner, we are trying to make sure...",
    url: "https://orbitdefi.medium.com/sarens-fortnightly-ama-d5cf43d71e24"
  },
  {
    title: "New Design and Website",
    description: "After 2 months of design and development, we’re finally pleased to...",
    url: "https://orbitdefi.medium.com/new-design-and-website-7afd5a5b557e"
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
            <a href={blogs[0].url} target="_blank" rel="noopener noreferrer">Read More...</a>
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
