import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import styled from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  ref?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...props },
  ref
) => {
  return (
    <label className={styled.input}>
      {label}
      <input {...props} name={name} ref={ref} />
    </label>
  );
};

const FormInput = React.forwardRef(Input);

export default FormInput;
