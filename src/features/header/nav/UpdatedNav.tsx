import { NavItem } from "features/header/nav/NavItem";
import React from "react";
export const UpdatedNav = () => {
  return (
    <div>
      <ul className="flex align-middle gap-3">
        <NavItem name={"About"} anchor={"about"} number={"01."} />
        <NavItem name={"Skills"} anchor={"skills"} number={"02."} />
        <NavItem name={"Projects"} anchor={"projects"} number={"03."} />
        <NavItem name={"CV"} anchor={"cv"} number={"04."} />
        <NavItem name={"Contact"} anchor={"contact"} number={"05."} />
      </ul>
    </div>
  );
};
