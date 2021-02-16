import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const LogoWrapper = styled.div`
  margin: 0;
  width: ${props => (props.logoSize.width ? props.logoSize.width : 200)}px;
  height: ${props => (props.logoSize.height ? props.logoSize.height : 60)}px;
  border: 1px solid black;
`

const Logo = ({ logoSize, siteTitle }) => (
  <Link
    to="/"
    style={{
      color: `inherit`,
      textDecoration: `none`,
    }}
  >
    <LogoWrapper logoSize={logoSize}>{siteTitle}</LogoWrapper>
  </Link>
)

export default Logo
