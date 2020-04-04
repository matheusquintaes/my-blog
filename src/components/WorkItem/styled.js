import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const WorkItemLink = styled(AniLink)`
  width: 100%;
  padding: 0;
  margin: 0 0 2rem;
  text-decoration: none;

  ${media.greaterThan('medium')`
    width: 50%;
    padding: 0 3em 0 0;
    margin: 0 0 5rem;
  `}
`

export const WorkItemWrapper = styled.div`
`

export const WorkItemImage = styled.img`
  transition: all .3s;

  &:hover{
    transform: scale(1.03);
    box-shadow: 0 1.125rem 2.5rem 0 rgba(4,0,21,.2);
  }
`

export const WorkItemTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  color:var(--text);
  line-height: 34px;
  letter-spacing: -0.014em;
  margin: 1.5rem 0 0.5rem 0;
`


export const WorkItemCategory = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--textSecondColor);
  margin-bottom: 0.6rem;
`


