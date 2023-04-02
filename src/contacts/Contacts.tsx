import React from "react";
import c from "../common/styles/Container.module.css";
import s from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={`${c.container} ${s.contactsContainer}`}>
        <h2>Contacts</h2>
        <form action="">
          <input />
          <input />
          <textarea></textarea>
        </form>
        <a href="">Submit</a>
      </div>
    </div>
  );
};
