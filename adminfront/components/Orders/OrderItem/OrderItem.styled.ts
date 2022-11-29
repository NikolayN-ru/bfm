import styled from 'styled-components'

export const OrderItemWrap = styled.div`
&{
    display: flex;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    background-color: #f2f2f2;
    margin: 1px;
    padding: 0px 40px 0px 20px;
    width: 600px;
}
&:hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
`