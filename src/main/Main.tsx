import React from "react";
import Heading from "../common/components/heading/Heading";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={s.mainBlock}>
      <Heading title={"about me"} backTitle={"about"} />
      <div className={s.container}>
        <div className={s.text}>
          Hi I'm
          <span className={s.name}> Aleksander Jaroszewicz</span>
          <p>Frontend Developer</p>
        </div>
        <div className={s.photo}></div>
      </div>
    </div>
  );
};
