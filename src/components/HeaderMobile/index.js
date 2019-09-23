import React from "react"

import * as S from "./styled"

const HeaderMobile = () => (
    <S.Header>
        <S.LinkHome to="/">
            <S.Title>MQ <S.Dot>.</S.Dot></S.Title>
        </S.LinkHome>
            <S.Menu>Menu</S.Menu>
        
    </S.Header>
)

export default HeaderMobile