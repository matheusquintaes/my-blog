import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: var(--sideBarBackgorund);
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 25rem;
  display:none;
    ${media.greaterThan('large')`
      display: flex;
    `}
`

