import React from "react"

import getThemeColor from "../../utils/getThemeColor"
import Avatar from "../Avatar"
import * as S from "./styled"

const HeaderMobile = () => { 

    return (

        <S.Header>
            <S.LinkHome cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                activeClassName="active" to="/" >
                <Avatar />
                <S.Title>Matheus <br/>Quintaes</S.Title>
            </S.LinkHome>

            <S.MenuLink cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                activeClassName="active" to="/works" > Works
            </S.MenuLink>
            <S.MenuLink cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                activeClassName="active" to="/about" > About
            </S.MenuLink>
        </S.Header>
     
    )
}
export default HeaderMobile