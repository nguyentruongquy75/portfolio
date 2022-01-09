import React from "react";

import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div>
      <div className="container">
        <div className={styles["main__container"]}>
          <div className={styles.header}>
            <span className={styles.greeting}>Hi, my name is</span>
            <h1 className={styles.name}>Nguyen Truong Quy</h1>
            <p className={styles.slogan}>Work hard, thinking forward</p>
          </div>
          <div className={styles.body}>
            <h2 className="title">About me</h2>
            <div className={styles["content__container"]}>
              <div className={styles.content}>
                <p>
                  I'm Truong Quy. I'm a third-year student of
                  <span> Cao Thang Technical college</span>, majoring in
                  <span> Electronics and Communication Technology</span>
                </p>
                <p>
                  I am a technology enthusiast, love solving logic problems and
                  creating technology products. In which, website development is
                  the direction that I am pursuing
                </p>
                <p>
                  Here are some technologies that I have been learning recently:
                </p>
                <ul>
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>NodeJs</li>
                  <li>ExpressJs</li>
                </ul>
              </div>
              <div className={styles["image__container"]}>
                <div className={styles.image}>
                  <img
                    src="https://media.graphcms.com/UWJXGhTSzW2WWBERWDb5"
                    alt="Nguyen Truong Quy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
