import styled from "styled-components"
import media from "styled-media-query"

export const IconWrapper = styled.div`
  color: var(--text);
  width: 16px;
  height: 16px;
  cursor:pointer;
    display:none;

    ${media.greaterThan('large')`
      display:block;
      position: absolute;
      top: 1rem;
      right: 1rem;
  `}
`