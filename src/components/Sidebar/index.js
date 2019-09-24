import React from "react"
import Profile from "../Profile"
import MenuLinks from "../MenuLinks"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <MenuLinks />
    <SocialLinks/>
  </S.SidebarWrapper>
)

export default Sidebar