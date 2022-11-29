import styled from "styled-components";

export const WrapperMenuCategories = styled.div`
  & {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 1px;
    margin-left:20px;
    width: 150px;
}
`;

export const ItemMenu = styled.div`
&{
    padding: 20px;
    background-color: #5a23a1;
    color: #fff;
    cursor: pointer;
    padding-left: 10px;
    opacity: 0.7;
    transition: all 0.3s;
}

&:hover{
    background-color: #5a23a1;
    padding-left: 34px;
    opacity: 1;
}`;
