import React from "react";
import Nav from "./nav";
import Tabs from "./Tabs";

import styles from "./MainLayout.module.css";
export default function MainLayout(props) {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Tabs />
        {props.children}
      </main>
    </>
  );
}
