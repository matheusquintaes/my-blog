import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 1.4rem;
  margin-top: 4rem;
  ${media.greaterThan('large')`
    min-height: 100vh;
    width: 100%;
    padding: 0px;
    flex-wrap: wrap;
    margin-top: 0;
    flex-direction: row;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  width: 100%;
  padding-top: 1rem;
  
  ${media.greaterThan('large')`
    min-height: 100vh;
    width: 100%;
    padding: 3.75rem 3.75rem 3rem 32rem;
      `}
`



