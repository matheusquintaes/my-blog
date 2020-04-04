import styled from "styled-components"
import media from "styled-media-query"


export const PostHeader = styled.header`
  color: var(--text);

  ${media.greaterThan('large')`
    margin: auto;
    max-width: 44rem;
    padding: 0px 5rem 0px 0px;
  `}
  margin: auto;
`

export const PostTitle = styled.h1`
  font-size: 1.6rem;  
  margin: 0.5rem auto 1rem auto;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: -0.017em;

  ${media.greaterThan('large')`
    font-size: 2.4rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.0rem;
  font-weight: 200;
  color: var(--textSecondColor);
  margin: 0 auto 3rem auto;
  ${media.greaterThan('large')`
    font-size: 1.2rem;
  `}
`

export const PostDate = styled.p`
  font-size: 1rem;
  font-weight: 100;
  color: var(--textSecondColor);
`

export const MainContent = styled.section`
  
  ${media.greaterThan('large')`
    margin: auto;
    max-width: 44rem;
    padding: 0px 5rem 0px 0px;
  `}
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--textSecondColor);
    ${media.greaterThan('large')`
      font-size: 1.1rem;
    `}
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.008em;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--text);
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--text);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 2.8rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.4;
    font-weight: 600;
  }
  h1 {
    font-size: 1.3rem;

    ${media.greaterThan('large')`
      font-size: 2rem;
    `}
 
  }
  h2 {
    font-size: 1.1rem;
    ${media.greaterThan('large')`
      font-size: 1.8rem;
    `}
   
  }
  h3 {
    font-size: 1rem;
    ${media.greaterThan('large')`
      font-size: 1.2rem;
    `}
    
  }
  h4 {
    font-size: 0.8rem;
    ${media.greaterThan('large')`
      font-size: 2rem;
    `}
  
  }
  h5 {
    font-size: 0.6rem;
    ${media.greaterThan('large')`
      font-size: 0.8rem;
    `}
    
  }
  strong {
    font-weight: 600;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    ${media.greaterThan('large')`
      font-size: 1rem;
    `}
    font-size: 0.6rem;
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    color: var(--text);
    text-decoration: underline;
    transition: opacity 0.5s;
    svg {
      color: var(--text);
    }
    &:hover {
      color: var(--highlight);
      text-decoration:none;
    }
  }
`