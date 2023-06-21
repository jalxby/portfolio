import React from "react";
import s from "src/features/projects/project/Project.module.scss";

type PropsType = {
  title: string;
  description: string;
  style: { backgroundImage: string };
};

export const Project = (props: PropsType) => {
  return (
    <div className={s.project}>
      <div style={props.style} className={s.imgContainer}>
        <a
          href={"https://google.com/"}
          className={
            "bg-primary tracking-wide hover:bg-white transition-colors duration-500 text-backcolor text-transform: uppercase font-bold py-2 px-4 rounded origin-center"
          }
        >
          <span>show more</span>
        </a>
      </div>
      <div className={s.descriptionContainer}>
        <h5>{props.title}</h5>
        <p className={s.description}>{props.description}</p>
      </div>
    </div>
  );
};

// <img src={logo} alt={'project'}/>
// <button>show more</button>
