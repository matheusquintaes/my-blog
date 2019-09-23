import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  align-items: center;
  color: var(--textSecondColor);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color:var(--textSecondColor);
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #1fa1f2;
    }
  }
`