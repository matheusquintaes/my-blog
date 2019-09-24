import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../Sidebar"
import HeaderMobile from "../HeaderMobile"
import TopMenuBar from "../TopMenuBar"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <HeaderMobile/>
      <Sidebar />
      <TopMenuBar/>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
