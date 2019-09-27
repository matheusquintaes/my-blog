import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.section`
    margin: 4rem 0;
`
export const Title = styled(AniLink)`
    color: var(--text);
    font-size:2rem;
    font-weight: 800;
    margin-bottom: 1.6rem;
    text-decoration: none;
    display:block;
`

export const Description = styled.p`
    color: var(--textSecondColor);
    text-transform: uppercase;
`

export const Dot = styled.span`
    color: var(--highlight);
    font-size: 1.8rem;
`