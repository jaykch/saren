import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Team from "../components/about/team"
import Description from "../components/about/description"
import Banner from "../components/about/banner"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Banner />
    <Description />
    {/*<Team />*/}
  </Layout>
)

export default AboutPage
