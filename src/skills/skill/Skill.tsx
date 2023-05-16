import React from "react";
import s from "./Skill.module.scss";

type PropsType = {
  title: string;
  bgIcon: { backgroundImage: string };
};

export const Skill = (props: PropsType) => {
  return (
    <div className={s.skill}>
      <div style={props.bgIcon} className={s.icon}></div>
      <h3 className={s.title}>{props.title}</h3>
      <span className={s.description}>
        Lorem ipsum dolor sit amet Ad, animi, doloribus fuga fugiat in ipsa
      </span>
    </div>
  );
};
