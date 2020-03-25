import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
`

export const LinkHome = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    ${media.greaterThan('large')`
    display:none;

    `}
`
export const Title = styled.h1`
    margin:initial;
    font-size: 0.8rem;
    margin-left:1rem;
    line-height:1rem;
    ${media.greaterThan('large')`
    display:none;

    `}
`

export const MenuLink = styled(AniLink)`
    color: var(--text);
    font-size: 0.8rem;
    text-decoration: none;
    margin-right: 2rem;
    margin-left: auto;
    ${media.greaterThan('large')`
        display:none;
    `}
`

export const NightMode = styled.div`
  color: var(--text);
  width: 16px;
  height: 16px;
  cursor:pointer;
  position: absolute;
  top: 1.20rem;
  right: 1rem;
`
