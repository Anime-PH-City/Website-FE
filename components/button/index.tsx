import React from "react";
import { Container } from "./style";

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children?: React.ReactNode; // make the component able to receive children elements
    color?: "primary" | "secondary"; // two styling options
};

 const Button = ({
    onClick,
    children,
    color = "primary"
  }: ButtonProps) => {
    return (
      <Container onClick={onClick} color={color}>
        {children}
      </Container>
    );
  };

export default Button;