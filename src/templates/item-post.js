import React, { useContext } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import ItemContext from "../context/item-context"
import styled from "styled-components"

const ItemNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  height: 50px;
  margin-bottom: 20px;
`
export default function ItemPost({ data }) {
  const item = data.markdownRemark
  const link = useContext(ItemContext).link
  const prev = link[item.fields.slug]?.prev
  const next = link[item.fields.slug]?.next

  return (
    <Layout>
      <ItemNav>
        <Link to="/browse">뒤로 가기</Link>
        {!!prev && prev !== -1 && <Link to={prev}>이전 상품</Link>}
        {!!next && next !== -1 && <Link to={next}>다음 상품</Link>}
      </ItemNav>
      <div>Hello Item Post</div>
      <div>
        <h1>{item.frontmatter.title}</h1>
      </div>
      <div>
        <p>date : {item.frontmatter.date}</p>
        <p>price : {item.frontmatter.price}</p>
      </div>
      <div>
        <img
          src={item.frontmatter.thumbnail}
          alt={item.frontmatter.title}
          width="400"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        layout
        price
        thumbnail
        title
      }
      fields {
        slug
      }
    }
  }
`
