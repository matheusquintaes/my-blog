import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;
  margin-bottom: 1rem;

  ${media.lessThan("large")`
    margin: initial;
    margin-bottom:2rem;
    height: 3rem;
    width: 3rem;
  `}
`
