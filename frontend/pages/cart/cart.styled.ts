import styled from "styled-components";

export const WrapperCart = styled.div`
  & {
    display: flex;
    justify-content: center;
  }
`;

export const BtnSubmit = styled.button`
  & {
    width: 130px;
    height: 30px;
    margin-left: 5px;
    transition: all 0.3s;
  }
  &:hover {
    background-color: #308c6a;
    scale: 1.1;
  }
`;
