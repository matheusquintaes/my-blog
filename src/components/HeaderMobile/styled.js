import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const Header = styled.header`
    width:100%;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    ${media.greaterThan('large')`
        display:none;
    `}
`

export const LinkHome = styled(Link)`

    text-decoration: none;
`
export const Title = styled.h1`
    color: var(--text);
    font-size: 1.8rem;
    margin-right: 0.8rem;
`
export const Dot = styled.span`
    color: var(--highlight);
    font-size: 1.8rem;
`

export const Menu = styled.a`
    align-self: end
    color: var(--text);
    font-size: 1.2rem;
    align-self: center;
`