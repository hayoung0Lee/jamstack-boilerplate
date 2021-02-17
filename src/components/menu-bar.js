import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Hamburger from "./hamburger-menu"
import MenuItem from "./menu-item"

const MenuWrapper = styled.menu`
  margin: 0;
  width: ${props => props.menuSize}px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (max-width: ${props => props.mediaQueryBreakPoint}px) {
    width: 150px;
    background-color: red;
    flex-direction: column;
    top: 60px;
    right: 0;
    position: absolute;
    height: auto;
    visibility: ${props => (props.isHamburgerOpen ? "visible" : "hidden")};
  }
`

const MenuBar = ({ logoSize, menuSize }) => {
  const mediaQueryBreakPoint = menuSize + logoSize.width + 300
  const [isHamburgerOpen, setHamburgerStatus] = useState(false)

  return (
    <>
      <Hamburger
        mediaQueryBreakPoint={mediaQueryBreakPoint}
        isHamburgerOpen={isHamburgerOpen}
        setHamburgerStatus={setHamburgerStatus}
      />
      <MenuWrapper
        logoSize={logoSize}
        menuSize={menuSize}
        mediaQueryBreakPoint={mediaQueryBreakPoint}
        isHamburgerOpen={isHamburgerOpen}
      >
        <Link to="/about/">
          <MenuItem mediaQueryBreakPoint={mediaQueryBreakPoint}>About</MenuItem>
        </Link>
        <Link to="/browse/">
          <MenuItem mediaQueryBreakPoint={mediaQueryBreakPoint}>
            Browse Item
          </MenuItem>
        </Link>
        <Link to="/event/">
          <MenuItem mediaQueryBreakPoint={mediaQueryBreakPoint}>Event</MenuItem>
        </Link>
        <Link to="/contact/">
          <MenuItem mediaQueryBreakPoint={mediaQueryBreakPoint}>
            Contact Page
          </MenuItem>
        </Link>
      </MenuWrapper>
    </>
  )
}

export default MenuBar
