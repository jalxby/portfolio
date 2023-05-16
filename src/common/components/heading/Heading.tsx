import React from "react";
import s from "./Heading.module.scss";

type PropsType = {
  title: string;
  backTitle: string;
};
const Heading = (props: PropsType) => {
  return (
    <div className={s.titleContainer}>
      <h2 className={s.title}>{props.title}</h2>
      <span className={s.underline}>
        <span className={s.animatedDot}></span>
      </span>
      <span className={s.backgroundTitle}>{props.backTitle}</span>
    </div>
  );
};

export default Heading;
