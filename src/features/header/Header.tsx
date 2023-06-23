import { UpdatedNav } from "features/header/nav/UpdatedNav";
import React from "react";
import s from "scss/Header.module.scss";

export const Header = () => {
  return (
    <div className={s.header} id={"myHeader"}>
      <UpdatedNav />
    </div>
  );
};
