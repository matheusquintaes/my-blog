import React, { useState } from "react"

import { TransitionPortal } from "gatsby-plugin-transition-link"

import MenuLinks from '../MenuLinks'
import SocialLinks from '../SocialLinks'
import Profile from '../Profile'
import LogoSVG from '../../images/logo-sm-dark.svg'


import * as S from "./styled"

const HeaderMobile = () => {

    const [ navOpen, setNavOpen ] = useState(false)

    return (
        <TransitionPortal level="top">
            <S.Header className={ navOpen ? 'state-header-fixed' : ''} >
                <S.HeaderWrapper>
                    <S.LinkHome to="/">
                        <LogoSVG width="50px" height="100%"/>
                        {/* <S.Title>MQ.</S.Title> */}
                    </S.LinkHome>
                    
                    <S.MenuBtn onClick={ () => setNavOpen(!navOpen)}> Menu </S.MenuBtn>
                    <S.MenuContent className={ navOpen ? 'state-nav-visible' : ''}>
                        <MenuLinks/>
                        <Profile />
                        <SocialLinks/>
                    </S.MenuContent>
                
                </S.HeaderWrapper>
            </S.Header>
        </TransitionPortal>
    )
}
export default HeaderMobile