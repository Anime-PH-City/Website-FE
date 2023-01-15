import React from "react";
import { Container } from "./style";

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children?: React.ReactNode; // make the component able to receive children elements
    color?: "primary" | "secondary" | "primary2"; // three styling options
    padding?: "big" | "small"; //two sizes
};

 const Button = ({
    onClick,
    children,
    color,
    padding 
  }: ButtonProps) => {
    return (
      <Container onClick={onClick} color={color} padding = {padding}>
        {children}
      </Container>
    );
  };

export default Button;