import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

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

const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: ${props => props.mediaQueryBreakPoint}px) {
    display: block;
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;
  }
`

const Hamburger = ({
  mediaQueryBreakPoint,
  isHamburgerOpen,
  setHamburgerStatus,
}) => {
  if (isHamburgerOpen) {
    return (
      <HamburgerWrapper
        mediaQueryBreakPoint={mediaQueryBreakPoint}
        onClick={() => setHamburgerStatus(false)}
      >
        Close
      </HamburgerWrapper>
    )
  } else {
    return (
      <HamburgerWrapper
        mediaQueryBreakPoint={mediaQueryBreakPoint}
        onClick={() => setHamburgerStatus(true)}
      >
        Open
      </HamburgerWrapper>
    )
  }
}

const Menu = ({ logoSize, menuSize }) => {
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

export default Menu
