import styled from "styled-components"
import media from "styled-media-query"

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
    ${media.greaterThan('large')`
      font-size: 1.1rem;
    `}
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;
  }
`
export const WorkLongDescription = styled.div`
  width: 60%
`

export const WorkProjectDetails = styled.div`

`
export const WorkContent = styled.div`
 
`



