import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Event = () => (
  <Layout>
    <SEO title="Event Page" />
    Event Page <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Event
