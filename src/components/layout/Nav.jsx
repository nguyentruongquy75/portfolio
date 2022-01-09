import React from "react";
import Tooltip from "../tooltip/Tooltip";

import styles from "./Nav.module.css";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/nguyentruongquy75/">
            <i className="fab fa-github"></i>
          </a>
          <Tooltip className={styles.tooltip}>Github</Tooltip>
        </li>

        <li>
          <a target="_blank" href="mailto:nguyentruongquy75@gmail.com">
            <i className="far fa-envelope"></i>
          </a>
          <Tooltip className={styles.tooltip}>Mail</Tooltip>
        </li>

        {/* <li>
          <a target="_blank" href="/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <Tooltip className={styles.tooltip}>Linkedin</Tooltip>
        </li> */}

        <li>
          <a target="_blank" href="https://www.facebook.com/nguyentruongquy75">
            <i className="fab fa-facebook-f"></i>
          </a>
          <Tooltip className={styles.tooltip}>Facebook</Tooltip>
        </li>

        <li>
          <a target="_blank" href="https://www.truongquy.live/">
            <i className="fas fa-blog"></i>
          </a>
          <Tooltip className={styles.tooltip}>Blog</Tooltip>
        </li>
      </ul>
    </nav>
  );
}
