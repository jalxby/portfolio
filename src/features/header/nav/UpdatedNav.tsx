import { NavItem } from "features/header/nav/NavItem";
import React from "react";

export const UpdatedNav = () => {
  return (
    <div>
      <ul className="mb-0 inline-flex list-none gap-7 pl-0">
        <NavItem name={"Home"} />
        <li className="inline-block align-middle">
          <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary !text-primary">
            About
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </a>
        </li>
        <li className="inline-block align-middle">
          <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
            Resume
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </a>
        </li>
        <li className="inline-block align-middle">
          <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
            Works
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </a>
        </li>
        <li className="inline-block align-middle">
          <a
            className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
            href="/posts/1"
          >
            Blog
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </a>
        </li>
        <li className="inline-block align-middle">
          <a className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary">
            Contact
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};
