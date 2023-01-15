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
    primary2 : css`
      color: #ED1C24;
      background: #00AEEF;
    `
  };

  const PADDING = {
    big : css`
        height: 60px;
        padding: 15px 55px;
        font-size: 22px;
    `,
    small : css`
      padding: 10px 19px;
      font-size: 20px;
    `
  }

  export const Container = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  outline: none;
  transition: all 0.2s;

  ${(props) =>  props.color && COLOR[props.color]}
  ${(props) =>  props.padding && PADDING[props.padding]}

`;
  