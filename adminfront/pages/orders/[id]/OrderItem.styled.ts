import styled from 'styled-components'

export const OrderItem = styled.div`
&{
    width: 800px;
    display: flex;
    flex-direction: column;
    gap: 10px;
/* justify-content: flex-start; */
    div {
        display: flex;
    }
}
`

export const Pcontent = styled.span`
&{
    width:200px;
    color: #a1a1a1;
    font-weight: 200;
}`

export const Pdata = styled.span`
&{
    color: #4d3a9c;
    font-weight: 400;
}`

export const Message = styled.span`
&{
    color: tomato;
}`