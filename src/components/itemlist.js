import React from "react"
import { Link } from "gatsby"
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
  // TODO 이미지 계속 로드하는 것 처리하기,
  // TODO 컴포넌트 분리하기
  return (
    <div style={{ width: 400, margin: 20, border: `1px solid black` }}>
      <Link to={item.node.fields.slug}>
        <ItemStyle>
          <div>
            <img
              src={item.node.frontmatter.image}
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

export default ItemList
