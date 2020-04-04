import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.section`
    margin: 4rem 0;
`
export const Title = styled(AniLink)`
    font-family: 'Prompt', sans-serif;
    color: var(--text);
    font-size:2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-decoration: none;
    display:block;
    letter-spacing: -1px;
`

export const Description = styled.p`
    color: var(--textSecondColor);
    font-size: 1rem;
`

export const Dot = styled.span`
    color: var(--highlight);
    font-size: 2rem;
    line-height: 1px;
    margin-left: -6px;
`