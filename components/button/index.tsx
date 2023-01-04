import React from "react";
import { Container } from "./style";

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children?: React.ReactNode; // make the component able to receive children elements
    color?: "primary" | "secondary"; // two styling options
    // disabled?: boolean; // make the button disabled or not
};

 const Button = ({
    onClick,
    children,
    color = "primary",
    // disabled,
  }: ButtonProps) => {
    return (
      <Container onClick={onClick} color={color}>
        {children}
      </Container>
    );
  };

export default Button;