import styled from "styled-components"

export const WrapWheres = styled.div`
  & {
    padding: 10px;
    position: fixed;
    width: 600px;
    height: 500px;
    background-color: #f2f2f2;
    z-index: 10;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`

export const Content = styled.span`
  & {
    margin-left: 20px;
    margin-right: 20px;
    font-weight: 200;
    color: #411d8c;
  }
`

export const WrapCategory = styled.div`
  & {
    margin: 20px;
    padding: 10px;
    display: flex;
    gap: 20px;
  }
`
