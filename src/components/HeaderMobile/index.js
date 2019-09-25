import React, { useState } from "react"

import MenuLinks from '../MenuLinks'
import SocialLinks from '../SocialLinks'
import Profile from '../Profile'

import * as S from "./styled"

const HeaderMobile = () => {

    const [ navOpen, setNavOpen ] = useState(false)

    return (
        <S.Header>
            <S.HeaderWrapper>
                <S.LinkHome to="/">
                    <S.Title>MQ.</S.Title>
                </S.LinkHome>
                <S.MenuBtn onClick={ () => setNavOpen(!navOpen)}> Menu </S.MenuBtn>
                <S.MenuContent className={ navOpen ? 'state-nav-visible' : ''}>
                    <MenuLinks/>
                    <Profile />
                    <SocialLinks/>
                </S.MenuContent>
              
            </S.HeaderWrapper>
        </S.Header>
    )
}
export default HeaderMobile