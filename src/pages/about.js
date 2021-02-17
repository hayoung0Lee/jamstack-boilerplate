import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { tempStyle } from "./index"

const AboutPage = () => (
  <Layout>
    <SEO title="About Page" />
    <div style={tempStyle}>About Page</div>
  </Layout>
)

export default AboutPage
