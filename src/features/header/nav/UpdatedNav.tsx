import { NavItem } from "features/header/nav/NavItem";
import React from "react";
import s from "scss/UpdatedNav.module.scss";
export const UpdatedNav = () => {
  return (
    <div>
      <ul className={s.navigation}>
        <NavItem name={"About"} />
        <NavItem name={"Resume"} />
        <NavItem name={"Projects"} />
        <NavItem name={"Contact"} />
      </ul>
    </div>
  );
};
