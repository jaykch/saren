import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ReleaseSchedule from "../components/token/releaseSchedule"
import Details from "../components/token/details"
import Distribution from "../components/token/distribution"
import Where from "../components/token/where"
import Banner from "../components/token/banner"

const TokenPage = () => {
  return (
    <Layout>
      <SEO title="Saren.io" />
      <Banner />
      <Details />
      <Where />
      <Distribution />
      <ReleaseSchedule />
    </Layout>
  )
}

export default TokenPage
