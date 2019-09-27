import React from "react"

import getThemeColor from "../../utils/getThemeColor"

import * as S from './styled'

const Profile = () => (
  <S.ProfileWrapper>
    <S.Title to='/' cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
      to="/">Matheus Quintaes <S.Dot>.</S.Dot></S.Title>
    <S.Description>Front-end Ux/UI</S.Description>
  </S.ProfileWrapper>
)

export default Profile