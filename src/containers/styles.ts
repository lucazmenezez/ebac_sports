import styled from 'styled-components'

export const Produtos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Loading = styled.div`
  display: flex;
  // border: 1px solid;
  width: 100%;
  height: 900px;
  margin: auto;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 80px;
    letter-spacing: 3px;
    color: blue;
    // margin: 0;
  }
`
