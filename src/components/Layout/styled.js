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
    flex-wrap: wrap;
    flex-direction: row;
  `}
`

export const LayoutMain = styled.main`
  background: var(--background);
  width: 100%;
  padding-top: 5rem;
  
  ${media.greaterThan('large')`
    min-height: 100vh;
    width: 100%;
    padding: 3.75rem 3rem 3rem 28rem;
      `}
`

export const TopWrapper = styled.div`
 position:fixed;
 width: 100%;
 height: 5rem;
 padding: 1.4rem;
 display:flex;
 background: var(--background);

 ${media.greaterThan('large')`
    padding: 0;
    height: 0;
    background:transparent;
`}


`



