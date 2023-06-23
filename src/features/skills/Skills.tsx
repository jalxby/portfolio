import { CssLogo } from "assets/icons/CssLogo";
import { HtmlLogo } from "assets/icons/HtmlLogo";
import { ReactLogo } from "assets/icons/ReactLogo";
import { ReduxLogo } from "assets/icons/ReduxLogo";
import Heading from "common/components/heading/Heading";
import { Skill } from "features/skills/skill/Skill";
import React from "react";
import s from "scss/Skills.module.scss";

export const Skills = () => {
  return (
    <div className={s.skillsBlock} id={"skills"}>
      <div className={s.skillsContainer}>
        <Heading backTitle={"skills"} title={"my skills"} />
        <div className={s.skills}>
          <Skill title={"React"}>
            <ReactLogo />
          </Skill>
          <Skill title={"HTML"}>
            <HtmlLogo />
          </Skill>
          <Skill title={"Redux"}>
            <ReduxLogo />
          </Skill>
          <Skill title={"CSS"}>
            <CssLogo />
          </Skill>
        </div>
      </div>
    </div>
  );
};
