import React from "react"
import "./partners.scss"
import { Carousel, Row, Col } from "antd"
import PartnerCard from "../misc/partnerCard"

import fera from "../../images/about/partners/fera.png"
import penguin from "../../images/about/partners/penguin.png"
import moontools from "../../images/about/partners/moontools.png"
import stacker from "../../images/about/partners/stacker.png"
import pending from "../../images/about/partners/pending.png"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

const partners = [
  { title: "Fera Strategies", logo: fera, url: "https://www.ferastrategies.com/", text: "Check them out" },
  { title: "Penguin Party", logo: penguin, url: "https://penguinparty.eth.link/", text: "Check them out" },
  { title: "moontools", logo: moontools, url: "https://moontools.io/", text: "Check them out" },
  { title: "Stacker Ventures", logo: stacker, url: "https://stacker.vc/", text: "Check them out" },
  { title: "Coming Soon", logo: pending, url: "https://saren.io/", text: "Major partnership" },
  { title: "Coming Soon", logo: pending, url: "https://saren.io/", text: "Minor partnership" }
]

const Partners = () => {
  return (
    <section className="aboutPartners container">
      <h2>Partners</h2>
      <Row>
        <Col span={24} >
        <Carousel {...settings} autoplay>
          {partners.map((partner, index) =>
            <PartnerCard key={index} {...partner} />
          )}
        </Carousel>
        </Col>
    </Row>
</section>
)
}

export default Partners
