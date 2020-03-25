import styled from "styled-components"
import media from "styled-media-query"

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;

  iframe[src*="ads-iframe"] {
    display: none;
  }
  #disqus_thread {
    a {
      color: #1fa1f2 !important;
    }
  }
  
  ${media.greaterThan('large')`
    max-width: 44rem;
    padding: 0px 5rem 0px 0px;
`}


`

export const CommentsTitle = styled.h2`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  padding-bottom: 2rem;
`