import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--textSecondColor);
  display: flex;
  padding: 1.5rem 0px;
  justify-content: space-between;
  font-size: 1rem;
  a {
    color:var(--textSecondColor);
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: var(--highlight);
    }
  }
`