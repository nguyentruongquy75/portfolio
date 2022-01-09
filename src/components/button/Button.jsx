import React, { useEffect, useRef } from "react";

import styles from "./Button.module.css";
export default function Button(props) {
  const buttonRef = useRef();
  useEffect(() => {
    if (props.type === "big") {
      buttonRef.current.style.padding = "20px 28px";
    } else if (props.type === "medium") {
      buttonRef.current.style.padding = "12px 16px";
    }
  }, [props.type]);
  if (props.href) {
    return (
      <a
        ref={buttonRef}
        href={props.href}
        style={{
          color: props.color || "#fff",
          backgroundColor: props.backgroundColor || "transparent",
          fontSize: props.fontSize || "14px",
          border: props.border || "none",
          borderRadius: props.borderRadius || "none",
        }}
        className={`${styles["button"]} ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </a>
    );
  }
  return (
    <button
      ref={buttonRef}
      style={{
        color: props.color || "#fff",
        backgroundColor: props.backgroundColor || "transparent",
        fontSize: props.fontSize || "14px",
        border: props.border || "none",
        borderRadius: props.borderRadius || "none",
      }}
      className={`${styles["button"]} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </button>
  );
}
