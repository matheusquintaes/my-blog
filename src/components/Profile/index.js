import React from "react"

import Avatar from "../Avatar"
import getThemeColor from "../../utils/getThemeColor"

import * as S from './styled'

const Profile = () => (
  <S.ProfileWrapper>
    <Avatar/>
    <S.Title cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      to="/">Matheus Quintaes <S.Dot>.</S.Dot></S.Title>
    <S.Description>Front-end Developer / Ui Designer</S.Description>
  </S.ProfileWrapper>
)

export default Profile