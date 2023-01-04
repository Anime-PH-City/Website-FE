import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const COLOR = {
    primary: css`
      color: #fff;
      background: #00AEEF;
    `,
    secondary: css`
      color: #fff;
      background: #ED1C24;
    `,
  };

  export const Container = styled.button<ButtonProps>`
  height: 60px;
  padding: 15px 55px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 22px;
  outline: none;
  transition: all 0.2s;

  ${(props) => props.color && COLOR[props.color]}
`;
  