import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Tabs.module.css";
export default function Tabs() {
  return (
    <nav className={styles.tabs}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            <i className="fas fa-info"></i>
            About
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/experience"
          >
            <i className="fas fa-user-graduate"></i>
            Experience
          </NavLink>
        </li> */}

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/work"
          >
            <i className="fas fa-briefcase"></i>
            Work
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/contact"
          >
            <i className="far fa-address-card"></i>Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/resume"
          >
            <i className="far fa-file"></i>Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
