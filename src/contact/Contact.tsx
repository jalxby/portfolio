import React from "react";
import Button from "../common/components/button/Button";
import s from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className={s.contact}>
      <div className={s.contactContainer}>
        <h2 className={s.title}>Contacts</h2>

        <form action="" className={s.contactForm}>
          <input />
          <input />
          <textarea></textarea>
          <Button title={"Submit"} href={"https://google.com/"} />
        </form>
      </div>
    </div>
  );
};
