import React from "react";
import s from "./Skill.module.css";

export const Skill = () => {
  return (
    <div className={s.skill}>
      <div className={s.icon}></div>
      <h3>React</h3>
      <span className={s.description}>
        Lorem ipsum dolor sit amet Ad, animi, doloribus fuga fugiat in ipsa
      </span>
    </div>
  );
};

