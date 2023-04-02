import React from "react";
import s from "./Projects.module.css";
import c from "../common/styles/Container.module.css";
import { Project } from "./project/Project";

export const Projects = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return (
    <div className={s.projectsBlock}>
      <div className={`${c.container} ${s.projectsContainer}`}>
        <h2>Projects</h2>
        <div className={s.projects}>
          <Project description={description} title={"Todo List"} />
          <Project description={description} title={"Todo List"} />
        </div>
      </div>
    </div>
  );
};

//export default Projects;
