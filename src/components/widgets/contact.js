import React from "react"
import { Form, Input, Button, Row, Col } from "antd"

import "./contact.scss"
import PremiumButton from "../misc/premiumButton"

const Contact = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <Row>
          <Col md={12} className="details">
            <h4>Let's talk!</h4>
            <span className="detail">Do you have a query you want answered or would you like to get in touch with us for an unrelated matter?</span>
            <h5>Get in touch</h5>
            <span className="detail">Fill up this contact form and we will get back to you within 48 hours.</span>
          </Col>
          <Col md={12}  className="form-container">
            <h1>Contact Us</h1>
            <form action="">
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!"
                  }
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!"
                  }
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="text"
                rules={[
                {
                  required: true,
                  message: "Please write a message!"
                }
              ]}>
                <Input.TextArea placeholder="Enter your message here"/>
              </Form.Item>
              <PremiumButton>
                Send
              </PremiumButton>
            </form>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Contact
