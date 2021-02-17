import React from "react"

const Footer = ({ siteTitle }) => {
  return (
    <footer
      style={{
        margin: `0 auto`,
        maxWidth: `80vw`,
        padding: `1.45rem 1.0875rem`,
        border: `1px solid black`,
        height: `150px`,
        marginTop: `50px`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      <div>This is {siteTitle}</div>
    </footer>
  )
}

export default Footer
