import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 3.75rem;
  width: 3.75rem;
  margin-bottom: 2rem;

  ${media.lessThan("large")`
    margin: initial;
    height: 3rem;
    width: 3rem;
    margin-bottom: 1rem;
  `}
`
