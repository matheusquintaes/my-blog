import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: #8899a6;
  display: flex;
  text-decoration: none;
  margin-bottom:4rem;
  :hover h1{
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`

`

export const PostItemCategory = styled.div`
  color: var(--text);
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
  font-weight: 100;
  text-decoration: underline;
`

export const PostItemTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color:var(--text);
  margin-bottom: 1rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
  color: var(--textSecondColor);
  margin-bottom: 0.6rem;
`

export const PostItemInfo = styled.div`

`

export const PostItemDate = styled.time`
  font-size: 0.7rem;
  text-transform: uppercase;
  color:var(--text);
`


