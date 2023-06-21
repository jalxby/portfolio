import React from "react";
import { Fade } from "react-awesome-reveal";
import s from "scss/Heading.module.scss";

type PropsType = {
  title: string;
  backTitle: string;
};
const Heading = (props: PropsType) => {
  return (
    <Fade>
      <div className={s.titleContainer}>
        <h2 className={s.title}>{props.title}</h2>
        <span className={s.underline}>
          <span className={s.animatedDot}></span>
        </span>
        <span className={s.backgroundTitle}>{props.backTitle}</span>
      </div>
    </Fade>
  );
};

export default Heading;
