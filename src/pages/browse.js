import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Browse = () => (
  <Layout>
    <SEO title="Menu Page" />
    Browse Page <br />
    {/* TODO 상품 등록한 것 보이는 페이지 */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Browse
