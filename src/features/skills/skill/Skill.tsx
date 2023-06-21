import React, { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import s from "src/features/skills/skill/Skill.module.scss";

type PropsType = {
  title: string;
  children: ReactNode;
};

export const Skill = (props: PropsType) => {
  return (
    <Fade>
      <div className={s.skill}>
        {props.children}
        <h3 className={s.title}>{props.title}</h3>
        {/*<span className={s.description}>*/}
        {/*  Lorem ipsum dolor sit amet Ad, animi, doloribus fuga fugiat in ipsa*/}
        {/*</span>*/}
      </div>
    </Fade>
  );
};
