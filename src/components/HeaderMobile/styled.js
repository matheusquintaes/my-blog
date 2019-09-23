import styled from "styled-components"
import { Link } from "gatsby"

export const Header = styled.header`
    width:100%;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`

export const LinkHome = styled(Link)`

    text-decoration: none;
`
export const Title = styled.h1`
    color: #fff;
    font-size: 1.8rem;
    margin-right: 0.8rem;
`
export const Dot = styled.span`
    color: #FF4438;
    font-size: 1.8rem;
`

export const Menu = styled.a`
    align-self: end
    color: #fff;
    font-size: 1.2rem;
    align-self: center;
`