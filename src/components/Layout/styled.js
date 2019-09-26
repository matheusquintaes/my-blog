import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 1.4rem;
  ${media.greaterThan('large')`
    min-height: 100vh;
    width: 100%;
    padding: 0px;
    flex-wrap: nowrap;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  width: 100%;
  padding-top: 1rem;
  
  ${media.greaterThan('large')`
    min-height: 100vh;
    width: 100%;
    padding: 5.75rem 3.75rem 3rem 30rem;
      `}
`



