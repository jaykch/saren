import React from "react"
import "./team.scss"
import { Col, Row } from "antd"
import { FaLinkedin } from "react-icons/fa"
import jay from "../../images/about/team/jay.jpg"
import alex from "../../images/about/team/alex.jpg"
import kunal from "../../images/about/team/kunal.jpg"
import mike from "../../images/about/team/mike.jpg"

const employees = [
  { name: "Jay Kumar", image: jay, position: "CEO/CTO", linkedin: "https://www.linkedin.com/in/jaykch/" },
  {
    name: "Alexandria Pon",
    image: alex,
    position: "Community Manager",
    linkedin: "https://www.linkedin.com/in/alexandria-pon-41413420b/"
  },
  {
    name: "Kunal Arora",
    image: kunal,
    position: "Technical Advisor",
    linkedin: "https://www.linkedin.com/in/kunal-arora-8142a9b7/"
  },
  {
    name: "Michael Lyberopolous",
    image: mike,
    position: "Web Developer",
    linkedin: "https://www.linkedin.com/in/michael-lyberopoulos/"
  }
]

const Team = () => {
  return (
    <section className="aboutTeam container">
      <Row>
        <Col span={24}>
          <h2>Meet the team</h2>
          <p>We are always looking to hire new wonderful people, if you think you are a right fit for our company please
            contact us through our contact form.</p>
          <div className="employees">
            {employees.map(({ name, image, position, linkedin }, index) =>
              <Card name={name} image={image} position={position} linkedin={linkedin} />
            )}
          </div>
        </Col>
      </Row>
    </section>
  )
}

const Card = ({ name, image, position, linkedin }) => {
  return (
    <div className="employee">
      <div className="imageContainer">
        <img src={image} alt="Employee" />
      </div>
      <div className="details">
        <span className="name">{name}</span>
        <span className="position">- {position} -</span>
        <a className="links" href={linkedin} target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
      </div>
    </div>
  )
}

export default Team
