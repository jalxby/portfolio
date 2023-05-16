import React, { ReactNode } from "react";
import s from "./SocialItem.module.scss";
type PropsType = {
  children: ReactNode;
  href: string;
};
export const SocialItem = (props: PropsType) => {
  return (
    <div className={s.item}>
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${s.astyle}`}
      >
        <span className={"svgStyle bg-grey"}>
          <svg
            stroke={`#bfbecb`}
            fill={`#bfbecb`}
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="inline-block"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            {props.children}
          </svg>
        </span>
        <span className={"svgBackStyle"}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="inline-block"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            {props.children}
          </svg>
        </span>
      </a>
    </div>
  );
};
