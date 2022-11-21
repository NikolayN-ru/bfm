import styled from 'styled-components'

export const WrapProduct = styled.div`
& {
  width: 500px;
  display: flex;
  /* justify-content: center; */
}`

export const ButtonDel = styled.button`
& {
  border: none;
  background-color: red;
  color: white;
  font-weight: bold;
  cursor: pointer;

  /* width: 500px; */
  /* display: flex; */
  /* justify-content: center; */
}&:hover {
  background-color: tomato;

}&:active {
  background-color: blue;

}`

export const StyledCategory = styled.span`
  & {
    font-size: 10px;
    margin-left: 30px;
  }
`
