import styled from "styled-components"
import media from "styled-media-query"

export const WorksWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const PageTitle = styled.h1`
  font-size: 2rem;
  ${media.greaterThan('large')`
    font-size: 3rem;
  `}

  margim-bottom: 3rem;
`