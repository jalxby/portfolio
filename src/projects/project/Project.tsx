import React from "react";
import s from "./Project.module.css";

type PropsType = {
  title: string;
  description: string;
};

export const Project = (props: PropsType) => {
  return (
    <div className={s.project}>
      <div className={s.imgContainer}>
        <a href="#">show more</a>
      </div>
      <div className={s.descriptionContainer}>
        <h3>{props.title}</h3>
        <span className={s.description}>{props.description}</span>
      </div>
    </div>
  );
};

// <img src={logo} alt={'project'}/>
// <button>show more</button>
