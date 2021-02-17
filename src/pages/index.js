import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const tempStyle = {
  width: `500px`,
  fontSize: 50,
  margin: `auto`,
  textAlign: `center`,
  marginTop: 150,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={tempStyle}>안녕하십니까~~~</div>
  </Layout>
)

export { tempStyle }
export default IndexPage
