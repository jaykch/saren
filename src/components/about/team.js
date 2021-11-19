import React from "react"
import "./team.scss"
import { Col, Row } from "antd"
import jay from "../../images/about/team/jay.jpg"
import rahul from "../../images/about/team/rahul.png"
import kunal from "../../images/about/team/kunal.jpg"
import mike from "../../images/about/team/mike.jpg"

const employees = [
  { name: "Jay Kumar", image: jay, position: "CEO/CTO", linkedin: "https://www.linkedin.com/in/jaykch/" },
  {
    name: "Rahul Luthra",
    image: rahul,
    position: "COO/CMO",
    linkedin: "https://www.linkedin.com/in/rahul-luthra-7672a3115/"
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
        <Col lg={12}>
          <h2>Meet the team</h2>
        </Col>
        <Col lg={12}>
          <p>We are always looking to hire new wonderful people, if you think you are a right fit for our company please
            contact us <a href="mailto:support@orbitdefi.com">here.</a></p>
        </Col>
        <Col lg={24}>
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
      </div>
    </div>
  )
}

export default Team
