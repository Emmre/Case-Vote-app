import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styled from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styled.button}>
      {children}
    </button>
  );
};

export default Button;
