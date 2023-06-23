import { SimpleGrid } from "@mantine/core";
import { AxiosLogo } from "assets/icons/AxiosLogo";
import { CssLogo } from "assets/icons/CssLogo";
import { HtmlLogo } from "assets/icons/HtmlLogo";
import { MantineLogo } from "assets/icons/MantineLogo";
import { MuiLogo } from "assets/icons/MuiLogo";
import { ReactLogo } from "assets/icons/ReactLogo";
import { ReduxLogo } from "assets/icons/ReduxLogo";
import { SassLogo } from "assets/icons/SassLogo";
import { StoryLogo } from "assets/icons/StoryLogo";
import { StyledLogo } from "assets/icons/StyledLogo";
import { TsLogo } from "assets/icons/TsLogo";
import { UnitTestsLogo } from "assets/icons/UnitTestsLogo";
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
          <Skill title={"Redux-Toolkit"}>
            <ReduxLogo />
          </Skill>
          <Skill title={"CSS"}>
            <CssLogo />
          </Skill>
          <Skill title={"TypeScript"}>
            <TsLogo />
          </Skill>
          <Skill title={"Styled Components"}>
            <StyledLogo />
          </Skill>
          <Skill title={"Axios"}>
            <AxiosLogo />
          </Skill>
          <Skill title={"StoryBook"}>
            <StoryLogo />
          </Skill>
          <Skill title={"UnitTests"}>
            <UnitTestsLogo />
          </Skill>
          <Skill title={"MUI"}>
            <MuiLogo />
          </Skill>
          <Skill title={"Mantine"}>
            <MantineLogo />
          </Skill>
          <Skill title={"SASS"}>
            <SassLogo />
          </Skill>
        </div>
      </div>
    </div>
  );
};
