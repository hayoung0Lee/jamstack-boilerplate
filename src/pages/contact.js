import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    Contact Page <br />
    {/* TODO 메일로 문의하는 기능  */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
