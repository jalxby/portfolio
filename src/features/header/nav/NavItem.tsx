import React, { FC } from "react";
import { Link } from "react-scroll";
import s from "scss/NavItem.module.scss";

type PropsType = {
  name: string;
  anchor: string;
  number: string;
};
export const NavItem: FC<PropsType> = ({ name, anchor, number }) => {
  return (
    <li className={s.item}>
      <Link
        spy={true}
        className={s.link}
        to={anchor}
        smooth={true}
        duration={2500}
        offset={-80}
      >
        <span className={s.menuNumber}>{number} </span>
        <span className={s.name}>{name}</span>
        <span className={s.line}></span>
      </Link>
    </li>
  );
};
