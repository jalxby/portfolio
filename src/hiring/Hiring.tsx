import React from "react";
import s from "./Hiring.module.scss";
import c from "../common/styles/Container.module.css";
import Button from "../common/components/button/Button";

export const Hiring = () => {
  return (
    <div className={s.hiring}>
      <div className={`${c.container} ${s.hiringContainer}`}>
        <h2 className={s.title}>
          Remote & relocation <span>ready</span>
        </h2>
        <Button title={"Hire Me"} href={"https://google.com/"} />
      </div>
    </div>
  );
};
