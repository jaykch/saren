import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from "../components/home/banner"
import Community from "../components/widgets/community"
import WhySaren from "../components/home/why"
import Blog from "../components/widgets/blog"
import Future from "../components/widgets/future"
import Partners from "../components/about/partners"
import Investors from "../components/about/investors"
import RoadMap from "../components/widgets/roadmap"
import PartnersInvestors from "../components/widgets/partnersInvestors"

const IndexPage = () => (
  <Layout>
    <SEO title="Orbit" />
    <Banner />
    <WhySaren />
    {/*<Cerberus/>*/}
    <Future />
    <Community />
    <RoadMap />
    <PartnersInvestors />
    <Blog />
    {/*<Faqs />*/}
    {/*<Contact />*/}
  </Layout>
)

export default IndexPage
