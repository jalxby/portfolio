import React from "react";
import s from "./Skills.module.css";
import c from "../common/styles/Container.module.css";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={`${c.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </div>
  );
};
