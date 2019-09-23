import styled from "styled-components"
import media from "styled-media-query"


export const PostHeader = styled.header`
  color: var(--text);
`

export const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem auto;
`

export const PostDescription = styled.h2`
  font-size: 1.6rem;
  font-weight: 200;
  color: var(--textSecondColor);
  margin: 0.8rem auto;
`

export const PostDate = styled.p`
  font-size: 1rem;
  font-weight: 100;
  color: var(--textSecondColor);
`

export const MainContent = styled.section`
  padding: 2rem 0px;
  margin: auto;
  max-width: 70rem;

  ${media.greaterThan('large')`
    margin: initial;
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
    color: var(--text);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
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
    border-left: 0.3rem solid #var(--red);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
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
    font-weight: 800;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: 0.8rem;
  }
  strong {
    font-weight: 700;
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
      color: #var(--red);
      text-decoration:none;
    }
  }
`