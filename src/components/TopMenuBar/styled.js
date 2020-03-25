import styled from "styled-components"
import media from "styled-media-query"

export const TopMenuWrapper = styled.div`
  ${media.greaterThan('large')`
    display:block;
    padding:1rem;
  `}
`
export const NightMode = styled.div`
color: var(--text);
cursor: pointer;
margin-left: auto;
height: 2rem;
position: relative;
width: 2rem;
padding: 0.5rem
`
