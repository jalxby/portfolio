import React, { ComponentProps } from "react";

type PropsType = ComponentProps<"a">;

const Button = ({ title, ...rest }: PropsType) => {
  return (
    <a {...rest} className={"btnPrimary"}>
      <span>{title}</span>
    </a>
  );
};

export default Button;
