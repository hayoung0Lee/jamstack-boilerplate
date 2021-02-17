import React from "react"
import styled from "styled-components"

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

export default Hamburger
