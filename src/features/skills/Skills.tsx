import React from "react";
import { CssLogo } from "src/assets/icons/CssLogo";
import { HtmlLogo } from "src/assets/icons/HtmlLogo";
import { ReactLogo } from "src/assets/icons/ReactLogo";
import { ReduxLogo } from "src/assets/icons/ReduxLogo";
import Heading from "src/common/components/heading/Heading";
import { Skill } from "src/features/skills/skill/Skill";
import s from "src/features/skills/Skills.module.scss";

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
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
