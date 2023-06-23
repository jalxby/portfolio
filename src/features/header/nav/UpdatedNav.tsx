import { NavItem } from "features/header/nav/NavItem";
import React from "react";
export const UpdatedNav = () => {
  return (
    <div>
      <ul className="mb-0 inline-flex list-none gap-7 pl-0">
        <NavItem name={"About"} menuNumber={1} />
        <NavItem name={"Resume"} menuNumber={2} />
        <NavItem name={"Projects"} menuNumber={3} />
        <NavItem name={"Contact"} menuNumber={4} />
      </ul>
    </div>
  );
};
