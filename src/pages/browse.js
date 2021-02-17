import React, { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ItemContext from "../context/item-context"
import ItemList from "../components/itemlist"

const BrowseItemStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid black;
`
const Browse = () => {
  const Items = useContext(ItemContext).link
  return (
    <Layout>
      <SEO title="Menu Page" />
      <BrowseItemStyle>
        {Object.keys(Items).map((key, i) => {
          return <ItemList key={i} item={Items[key].curItem} />
        })}
      </BrowseItemStyle>
    </Layout>
  )
}

export default Browse
