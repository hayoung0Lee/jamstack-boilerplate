import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { tempStyle } from "./index"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <div style={tempStyle}>Contact Page </div>
    {/* TODO 메일로 문의하는 기능  */}
  </Layout>
)

export default ContactPage
