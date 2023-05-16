import React from "react";
import s from "./Projects.module.scss";
import c from "../common/styles/Container.module.css";
import { Project } from "./project/Project";
import Heading from "../common/components/heading/Heading";
import todolist from "../assets/images/todolist.jpg";
import snetwork from "../assets/images/snetwork.webp";

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
    <div className={`${s.projectsBlock}`}>
      <div className={c.container}>
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
