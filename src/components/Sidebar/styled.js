import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: var(--sideBarBackgorund);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 25rem;
  display:none;
    ${media.greaterThan('large')`
      display: block;
    `}
`

