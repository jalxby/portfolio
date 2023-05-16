import React from "react";
import c from "../common/styles/Container.module.css";
import s from "./Contact.module.scss";
import Button from "../common/components/button/Button";

export const Contact = () => {
  return (
    <div className={s.contact}>
      <div className={`${c.container} ${s.contactContainer}`}>
        <h2 className={s.title}>Contacts</h2>
        <form action="" className={s.contactForm}>
          <input />
          <input />
          <textarea></textarea>
          <span>
            <Button title={"Submit"} />
          </span>
        </form>
      </div>
    </div>
  );
};
