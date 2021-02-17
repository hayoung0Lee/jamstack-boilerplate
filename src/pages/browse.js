import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const ItemStyle = styled.div`
  width: 200px;
  height: 350px;
  border: 1px solid black;
  radius: 2px;

  & .info {
    margin-top: 20px;
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`

const ItemList = ({ item }) => {
  return (
    <div style={{ width: 400, margin: 20, border: `1px solid black` }}>
      <Link to={item.node.fields.slug}>
        <ItemStyle>
          <div>
            <img
              src={item.node.frontmatter.thumbnail}
              alt={item.node.frontmatter.title}
              width="200"
            />
          </div>
          <div className="info">
            <div>{item.node.frontmatter.title}</div>
            <div>{item.node.frontmatter.price}</div>
            <div>{item.node.frontmatter.date}</div>
          </div>
        </ItemStyle>
      </Link>
    </div>
  )
}

const BrowseItemStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid black;
`
const Browse = ({ data }) => {
  const Items = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Menu Page" />
      <BrowseItemStyle>
        {Items.map((item, i) => {
          return <ItemList key={i} item={item} />
        })}
      </BrowseItemStyle>
    </Layout>
  )
}

export default Browse

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            price
            thumbnail
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
