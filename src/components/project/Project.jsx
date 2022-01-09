import React from "react";

import styles from "./Project.module.css";
export default function Project(props) {
  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <p className={styles["project__title"]}>{props.type}</p>
        <a
          target="_blank"
          className={styles["project__name"]}
          href={props.demo}
        >
          {props.name}
        </a>
        <div className={styles["project__desc"]}>{props.desc}</div>
        <div className={styles["project__stack"]}>
          <ul>
            {props.stacks.map((stack) => (
              <li>{stack}</li>
            ))}
          </ul>
        </div>
        <div className={styles["project__link"]}>
          <a target="_blank" href={props.github}>
            <i className="fab fa-github"></i>
          </a>
          <a target="_blank" href={props.demo}>
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <div className={styles["image__container"]}>
        <div className={styles.image}>
          <a target="_blank" href={props.demo}></a>
          <img src={props.image} alt={props.name} />
        </div>
      </div>
    </div>
  );
}
