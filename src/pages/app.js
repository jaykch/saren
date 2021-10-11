import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from "../components/cerberus/banner"
import Why from "../components/cerberus/why"
import Vision from "../components/cerberus/vision"

const CerberusPage = () => {
  return (
    <Layout>
      <SEO title="App" />
      <Banner/>
      <Why/>
      <Vision/>
    </Layout>
  )
}

export default CerberusPage
