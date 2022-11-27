import styled from "styled-components"

export const WrapItems = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`

export const Item = styled.div`
  & {
    padding: 10px;
    background-color: tomato;
  }
`

export const BtnNew = styled.button`
  & {
    width: 100px;
    height: 50px;
    /* border: none; */
    background-color: green;
    margin: 10px;
    color: #fff;
  }
`
