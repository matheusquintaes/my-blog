import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  color: #BABABA;
  display: flex;
  padding: 0.6rem ;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: #38444d;
  }
  &.previous {
    border-right: 1px solid #38444d;
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