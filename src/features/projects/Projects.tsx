import Heading from "common/components/heading/Heading";
import { Project } from "features/projects/project/Project";
import React from "react";
import s from "scss/Projects.module.scss";
import todolist from "assets/images/todolist.jpg";
import snetwork from "assets/images/snetwork.webp";

export const Projects = () => {
  const socialStyle = {
    backgroundImage: `url(${snetwork})`,
  };
  const todoListStyle = {
    backgroundImage: `url(${todolist})`,
  };
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return (
    <div className={s.projectsBlock}>
      <div className={s.container}>
        <Heading title={"my projects"} backTitle={"projects"} />
        <div className={s.projects}>
          <Project
            description={description}
            title={"Todo List"}
            style={todoListStyle}
          />
          <Project
            description={description}
            title={"Social Network"}
            style={socialStyle}
          />
        </div>
      </div>
    </div>
  );
};

//export default Projects;
