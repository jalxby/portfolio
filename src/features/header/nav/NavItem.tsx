import React, { FC } from "react";
import s from "scss/NavItem.module.scss";

type PropsType = {
  name: string;
};

export const NavItem: FC<PropsType> = ({ name }) => {
  return (
    <li className={s.item}>
      <a href={""} className={s.link}>
        name
        <span className={s.line}></span>
      </a>
    </li>
  );
};
