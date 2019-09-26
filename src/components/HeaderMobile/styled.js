import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const Header = styled.header`
    width:100%;
    background: var(--background);
    position:fixed;

    ${media.greaterThan('large')`
        display:none;
    `}
`

export const HeaderWrapper = styled.div`
    display: flex
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    width:100%;
    padding:2rem 1.4rem 1.4rem 1.4rem;
`

export const LinkHome = styled(Link)`

    text-decoration: none;
`
export const Title = styled.h1`
    color: var(--text);
    font-size: 1.8rem;
`

export const MenuBtn = styled.button`
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    color: var(--text);
    font-size: 1.2rem;
    font-family: 'Montserrat',sans-serif;
`

export const MenuContent = styled.div`
    display:none;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 3rem;
    right: 0;
    padding: 1.4rem;

    &.state-nav-visible {
        display:block;
        background: var(--background);
    }

`

export const NightMode = styled.p`
    margin-top: 1rem;
    color: var(--text);
`