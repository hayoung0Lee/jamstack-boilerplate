import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { tempStyle } from "../utils/style"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={tempStyle}>안녕하십니까~~~</div>
  </Layout>
)

export default IndexPage
