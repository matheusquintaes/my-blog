import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const WorkItemLink = styled(AniLink)`
  width: 33.33%;
  padding: 0 3em 0 0;
  margin: 0 0 5rem;
  text-decoration: none;

  ${media.lessThan('large')`
    width: 50%;
  `}

  ${media.lessThan('medium')`
    width: 100%;
    padding: 0;
  `}
`

export const WorkItemWrapper = styled.div`
`

export const WorkItemImage = styled.img`

`

export const WorkItemCategory = styled.p`
  color: var(--highlight);
  font-size: 0.8rem;
  margin: 0.8rem 0;
  font-weight: 100;
`

export const WorkItemTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 1rem;
`

export const WorkItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--textSecondColor);
  margin-bottom: 0.6rem;
`






