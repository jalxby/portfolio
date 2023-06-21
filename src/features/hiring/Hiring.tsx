import React from "react";
import s from "src/features/hiring/Hiring.module.scss";
import c from "../common/styles/Container.module.css";
import Button from "src/common/components/button/Button";

export const Hiring = () => {
  return (
    <div className={s.hiring}>
      <div className={s.hiringContainer}>
        <h2>
          Remote & relocation <span>ready</span>
        </h2>
        <Button title={"Hire Me"} href={"https://google.com/"} />
      </div>
    </div>
  );
};
