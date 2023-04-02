import React from "react";
import s from "./Hiring.module.css";
import c from "../common/styles/Container.module.css";

export const Hiring = () => {
  return (
    <div className={s.hiring}>
      <div className={`${c.container} ${s.hiringContainer}`}>
        <h2>Remote and relocation ready</h2>
        <a href={"#"}>Hire me</a>
      </div>
    </div>
  );
};
