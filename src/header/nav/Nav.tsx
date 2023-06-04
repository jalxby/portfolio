import React from "react";
import s from "./Nav.module.scss";

export const Nav = () => {
  const lnk =
    "bg-primary tracking-wide hover:bg-white transition-colors duration-500 text-backcolor text-transform: uppercase font-bold py-2 px-4 rounded origin-center";

  return (
    <div className={s.nav}>
      <a className={lnk} href="">
        Main
      </a>
      <a className={lnk} href="">
        Skills
      </a>
      <a className={lnk} href="">
        Projects
      </a>
      <a className={lnk} href="">
        Contacts
      </a>
      {/*<a href=""></a>*/}
    </div>
  );
};
