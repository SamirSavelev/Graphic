import styled, { css } from "styled-components";
import { CommonUseComponents } from "../../../../styles/CommonUseComponents";

const { Row } = CommonUseComponents;

const Container = styled(Row)`
  margin-top: 25px;
  background: ${({ theme }) => theme.white};
  width: 290px;
  height: 62px;
  padding: 9px 13px;
  cursor: pointer;
`;

const Arrow = styled.div<{ rotate?: boolean }>`
  transition: 0.2s ease-out;
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(0.5turn);
    `}
`;

const Popup = styled.div`
  position: absolute;
  top: 215px;
  width: 290px;
  height: fit-content;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 5px 18px rgba(40, 41, 61, 0.07);
  z-index: 9;
`;

const Input = styled.input<{ isShow?: boolean }>`
  cursor: pointer;
  width: 180px;
  background-color: ${({ theme }) => theme.white};
  font-size: 14px;
  color: ${({ theme }) => theme.grey2};
  ${({ isShow }) =>
    isShow &&
    css`
      color: ${({ theme }) => theme.greyLink};
    `}
`;

export const DropdownStyles = {
  Container,
  Arrow,
  Popup,
  Input,
};
