import styled, { css } from "styled-components";
import { ButtonProps } from ".";

const COLOR = {
  primary: css`
    color: #fff;
    background: #00aeef;
  `,
  secondary: css`
    color: #fff;
    background: #ed4424;
  `,
  primary2: css`
    color: #ed1c24;
    background: #00aeef;
  `,
  secondary2: css`
    color: #fff;
    background: #ed1c24;
  `,
};

const PADDING = {
  big: css`
    height: 60px;
    padding: 15px 55px;
    font-size: 22px;
  `,
  long: css`
    height: 60px;
    padding: 15px 95px;
    font-size: 22px;
  `,
  small: css`
    padding: 10px 19px;
    font-size: 20px;
  `,
};

export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  outline: none;
  transition: all 0.2s;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.padding && PADDING[props.padding]}
`;
