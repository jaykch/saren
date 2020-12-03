import React, { useState } from "react"
import { Form, Input, message, Row, Col } from "antd"
import "./contact.scss"
import PremiumButton from "../misc/premiumButton"

const Contact = () => {

  const [sent, setSent] = useState(false)

  const handleSubmit = (values) => {
    if (!sent) {
      let data = new FormData()
      Object.keys(values).forEach(key => data.append(key, values[key]))
      const xhr = new XMLHttpRequest()
      xhr.open("POST", "https://formspree.io/f/mzbkaoje")
      xhr.setRequestHeader("Accept", "application/json")
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status === 200) {
          message.success("Your message was received successfully")
          setSent(true)
        } else {
          message.error("Your email could not be sent! Please try again or use one of our community links.")
        }
      }
      xhr.send(data)
    }
  }

  return (
    <section className="contact-form" id="contact">
      <div className="container">
        <Row>
          <Col md={12} className="details">
            <h4>Let's talk!</h4>
            <span className="detail">Do you have a query you want answered or would you like to get in touch with us for an unrelated matter?</span>
            <h5>Get in touch</h5>
            <span className="detail">Fill up this contact form and we will get back to you within 48 hours.</span>
          </Col>
          <Col md={12} className="form-container">
            <h1>Contact Us</h1>
            <Form onFinish={handleSubmit}>
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
                <Input.TextArea placeholder="Enter your message here" />
              </Form.Item>
              <PremiumButton type="submit">{sent ? "Thanks!" : "Send"} </PremiumButton>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Contact
