import React, { FC } from "react";
import s from "scss/NavItem.module.scss";

type PropsType = {
  name: string;
  menuNumber: number;
};
export const NavItem: FC<PropsType> = ({ name, menuNumber }) => {
  return (
    <li className={s.item}>
      <a
        href={"#"}
        className={s.link}
        style={{ "--section-counter": menuNumber } as React.CSSProperties}
      >
        {name}
        <span className={s.line}></span>
      </a>
    </li>
  );
};
