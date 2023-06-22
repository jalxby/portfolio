import React, { ReactNode } from "react";
import { Fade } from "react-awesome-reveal";
import { Tilt } from "react-tilt";
import s from "scss/Skill.module.scss";

type PropsType = {
  title: string;
  children: ReactNode;
};
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
export const Skill = (props: PropsType) => {
  return (
    <Fade>
      <Tilt options={defaultOptions}>
        <div className={s.skill}>
          {props.children}
          <h3 className={s.title}>{props.title}</h3>
          {/*<span className={s.description}>*/}
          {/*  Lorem ipsum dolor sit amet Ad, animi, doloribus fuga fugiat in ipsa*/}
          {/*</span>*/}
        </div>
      </Tilt>
    </Fade>
  );
};
