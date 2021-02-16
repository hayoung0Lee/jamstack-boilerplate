import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "./logo"
import Menu from "./menu"

const HeaderWrapper = styled.header`
  width: 80vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const logoSize = { width: 180, height: 60 }

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Logo logoSize={logoSize} siteTitle={siteTitle} />
    <Menu logoSize={logoSize} menuSize={700} />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
