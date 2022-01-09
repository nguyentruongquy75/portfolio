import React from "react";

import styles from "./Tooltip.module.css";
export default function Tooltip(props) {
  return (
    <div
      className={`${styles.tooltip} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
}
