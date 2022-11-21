import styled from 'styled-components'

export const MainWrap = styled.div`
&{
    display: flex;
    align-items: flex-start;
    gap: 20px;
    /* flex-direction: column; */
}
`

export const WrapperProduct = styled.div`
  & {
    font-size: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const MainImg = styled.img`
  & {
    width: 300px;
    /* height: 100%; */
    /* object-fit: cover; */
  }
`

export const InputField = styled.input`
  & {
    border-radius: 5px;
    border: 2px solid #d1ced6;
    width: 300px;
    height: 40px;
    font-size: 20px;
    color: #470ca6;
  }
`

export const TextAreaInput = styled.textarea`
  & {
    width: 300px;
    height: 100px;
  }
`
export const WrapperVariables = styled.div`
  & {
    margin-top: 30px;
    display: flex;
    gap: 20px;
  }
`

export const InputVariable = styled.input`
  & {
    width: 60px;
    border-radius: 20%;
    height: 60px;
    border: 2px solid #d1ced6;
    padding-left: 10px;
    /* align-items: center; */
    /* padding-right: 20px; */
  }
  &:nth-child(3){
    padding-left: 20px;

  }
  &:hover {
    border: 2px solid #87a60c;
  }
`

export const WrapperTags = styled.div`
  & {
    display: flex;
    gap: 20px;
  }
`

export const ButtonTag = styled.button`
  & {
    /* width: 70px; */
  }
`

export const SaveButton = styled.button `
&{
    cursor: pointer;
    width: 100px;
    height: 40px;
    background-color: green;
    border: none;
}`