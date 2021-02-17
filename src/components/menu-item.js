import React from "react"
import styled from "styled-components"

const MenuItemWrapper = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.mediaQueryBreakPoint}px) {
    background-color: yellow;
    height: 50px;
  }
`
const MenuItem = ({ mediaQueryBreakPoint, children }) => {
  return (
    <MenuItemWrapper mediaQueryBreakPoint={mediaQueryBreakPoint}>
      {children}
    </MenuItemWrapper>
  )
}

export default MenuItem
