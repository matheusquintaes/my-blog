import styled from "styled-components"
import media from "styled-media-query"

export const TopMenuWrapper = styled.div`
  display:flex;
  width:100%;
  height: 2rem;
  padding-right: 1rem;
  position: fixed;
  ${media.greaterThan('large')`

  `}
`

export const NightMode = styled.div`
  color: var(--text);
  width: 16px;
  height: 16px;
  cursor:pointer;
  padding-top: 0.5rem;
  margin-left: auto;
`
