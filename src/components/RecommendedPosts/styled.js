import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  color: var(--textSecondColor);
  display: flex;
  padding: 0.6rem ;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    color: var(--highlight);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`