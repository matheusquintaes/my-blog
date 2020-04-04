import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const PostItemLink = styled(AniLink)`
  color: #8899a6;
  display: flex;
  text-decoration: none;
  margin-bottom:4rem;
  :hover h1{
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`

`

export const PostItemCategory = styled.p`
  color: var(--textSecondColor);
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
  font-weight: 500;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
  color:var(--text);
  margin-bottom: 0.8rem;
  transition: all .3s;
  line-height: 34px;
  letter-spacing: -0.014em;

  ${media.greaterThan('large')`
    font-size: 1.6rem;
  `}
`

export const PostItemDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 0.2rem;
  letter-spacing: -0.005em;
  opacity: 0.7;
  }
`

export const PostItemInfo = styled.div`

`

export const PostItemDate = styled.time`
  font-size: 0.7rem;
  text-transform: uppercase;
  color:var(--text);
`


