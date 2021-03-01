/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"
import ItemContext from "../context/item-context"

const Main = styled.main`
  // border: 1px solid grey;
  padding-top: 30px;
  min-height: 70vh;
  width: 80vw;
  margin: auto;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              price
              image
              date
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const Items = data.allMarkdownRemark.edges
  const addLink = useContext(ItemContext).addLink

  useEffect(() => {
    const linkList = {}
    Items.forEach((item, i) => {
      const prev = i - 1 >= 0 ? Items[i - 1].node.fields.slug : -1
      const curItem = item
      const next = i + 1 < Items.length ? Items[i + 1].node.fields.slug : -1
      linkList[item.node.fields.slug] = {
        prev: prev,
        curItem: curItem,
        next: next,
      }
    })
    addLink(linkList)
    /* eslint-disable */
  }, [])

  return (
    <>
      <Header siteTitle={data?.site.siteMetadata?.title || `Title`} />
      <Main>{children}</Main>
      <Footer siteTitle={data?.site.siteMetadata?.title || `Title`} />
    </>
  )
}

export default Layout
