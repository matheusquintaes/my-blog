import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin-top: auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
`

export const SocialLinksItem = styled.li`  
  list-style: none;
`

export const SocialLinksLink = styled.a`
  color: var(--textSecondColor);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`