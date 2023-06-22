import Heading from "common/components/heading/Heading";
import React from "react";
import s from "scss/Main.module.scss";
import Typewriter from "typewriter-effect";

export const Main = () => {
  return (
    <div className={s.mainBlock}>
      <Heading title={"about me"} backTitle={"about"} />
      <div className={s.container}>
        <div className={s.text}>
          Hi, I'm
          <Typewriter
            options={{
              strings: [
                "<span style='color: #72E2AE'> Aleksander Jaroszewicz</span> ",
                "<span style='color: #72E2AE'> Frontend Developer</span> ",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className={s.photo}></div>
      </div>
    </div>
  );
};
