import React from "react";
import c from "../common/styles/Container.module.css";
import s from "./Footer.module.css";
import { SocialItem } from "./socialitem/SocialItem";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={`${c.container} ${s.footerContainer}`}>
        <h2>Aleksander Jaroszewicz</h2>
        <div className={s.socialContainer}>
          <a href="">
            {" "}
            <SocialItem />{" "}
          </a>
          <a href="">
            {" "}
            <SocialItem />{" "}
          </a>
          <a href="">
            {" "}
            <SocialItem />{" "}
          </a>
          <a href="">
            {" "}
            <SocialItem />{" "}
          </a>
        </div>
        <span>&copy; 2023 All rights reserved</span>
      </div>
    </div>
  );
};

//export default Footer;
