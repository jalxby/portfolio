import React from "react";
import s from "./Skills.module.css";
import c from "../common/styles/Container.module.css";
import { Skill } from "./skill/Skill";
import Heading from "../common/components/heading/Heading";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import css from "../assets/icons/css.svg";
import html from "../assets/icons/html.svg";

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={`${c.container} ${s.skillsContainer}`}>
        <Heading backTitle={"skills"} title={"my skills"} />
        <div className={s.skills}>
          <Skill
            title={"React"}
            bgIcon={{
              backgroundImage: `url(${react})`,
            }}
          />
          <Skill
            title={"HTML"}
            bgIcon={{
              backgroundImage: `url(${html})`,
            }}
          />
          <Skill
            title={"Redux"}
            bgIcon={{
              backgroundImage: `url(${redux})`,
            }}
          />
          <Skill
            title={"CSS"}
            bgIcon={{
              backgroundImage: `url(${css})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
