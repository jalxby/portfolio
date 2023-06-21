import { Nav } from "features/header/nav/Nav";
import React from "react";
import s from "scss/Header.module.scss";

export const Header = () => {
  return (
    <div className={s.header}>
      <Nav />
    </div>
  );
};
