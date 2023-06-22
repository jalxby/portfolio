import React, { ComponentProps } from "react";
import { Fade } from "react-awesome-reveal";

type PropsType = ComponentProps<"a">;

const Button = ({ title, ...rest }: PropsType) => {
  return (
    <Fade>
      <a {...rest} className={"btnPrimary"}>
        <span>{title}</span>
      </a>
    </Fade>
  );
};

export default Button;
