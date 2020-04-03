import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const WorkHeader = styled.div`
  text-align: center;
  color: var(--text);
  ${media.greaterThan('large')`
  `}
`

export const WorkTitle = styled.h1`
  font-size: 2rem;  
  margin: 0.5rem auto 1rem auto;
  font-weight: 500;

  ${media.greaterThan('large')`
    font-size: 4rem;
  `}
`

export const WorkCategory = styled.h2`
  font-size: 1.2rem;
  font-weight: 200;
  color: var(--textSecondColor);
  margin: 0 auto 3rem auto;

  ${media.greaterThan('large')`
    font-size: 2rem;
  `}
`


export const WorkInfo = styled.div`
  display:flex;
  margin-bottom: 2rem;
  justify-content: space-between;

  h4{
    font-size: 1.2rem;  
    margin: 0.5rem auto 1rem auto;
    font-weight: 500;
  
    ${media.greaterThan('large')`
      font-size: 1.8rem;
    `}
  }

  p {
    color: var(--textSecondColor);
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;
    ${media.greaterThan('large')`
      font-size: 1.1rem;
    `}
  }
`
export const WorkLongDescription = styled.div`
  width: 70%
`

export const WorkProjectDetails = styled.div`
  width: 20%

`
export const WorkContent = styled.div`
 
`
export const WorkFooter = styled.div`
  display:flex;
  flex-direction: column;
`

export const WorkLink = styled.div`
  margin-bottom: 2rem;
`

export const WorkContact = styled.div`
  margin-top: 2rem;
  text-align: center;

  p{
    margin-bottom: 2rem;
  }
`

export const WorkItemLink = styled(AniLink)`
  border: 1px solid var(--text);
  color: var(--text);
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
`