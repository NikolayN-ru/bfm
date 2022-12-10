import styled from "styled-components"

export const WrapperComponent = styled.div`
  & {
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const SearchInput = styled.input`
  & {
    height: 40px;
    font-size: 20px;
    color: #87a60c;
  }
`
