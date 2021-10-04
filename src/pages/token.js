import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ReleaseSchedule from "../components/token/releaseSchedule"
import Distribution from "../components/token/distribution"
import Where from "../components/token/where"
import Banner from "../components/token/banner"
import UseCase from "../components/token/UseCase"

const TokenPage = () => {
  return (
    <Layout>
      <SEO title="Token" />
      <Banner />
      <Where />
      <Distribution />
      <ReleaseSchedule />
      <UseCase />
    </Layout>
  )
}

export default TokenPage
