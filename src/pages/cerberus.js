import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from "../components/cerberus/banner"
import Why from "../components/cerberus/why"
import Vision from "../components/cerberus/vision"
import Faqs from "../components/cerberus/faqs"

const CerberusPage = () => {
  return (
    <Layout>
      <SEO title="Cerberus" />
      <Banner/>
      <Why/>
      <Vision/>
      <Faqs/>
    </Layout>
  )
}

export default CerberusPage
