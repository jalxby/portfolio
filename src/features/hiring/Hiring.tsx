import Button from "common/components/button/Button";
import React from "react";
import s from "scss/Hiring.module.scss";

export const Hiring = () => {
  return (
    <div className={s.hiring} id={"cv"}>
      <div className={s.hiringContainer}>
        <h2>
          Remote & relocation <span>ready</span>
        </h2>
        <Button title={"Hire Me"} href={"https://google.com/"} />
      </div>
    </div>
  );
};
