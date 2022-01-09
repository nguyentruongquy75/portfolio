import React from "react";
import Button from "../button/Button";

import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <div>
      <div className="container">
        <section className={styles.content}>
          <h2 className="title">Contact</h2>
          <p className={styles.message}>
            I’m currently looking for any new opportunities. If you give me a
            chance, I will try my best to complete it and do not betray your
            trust
          </p>
          <Button
            href="mailto:nguyentruongquy75@gmail.com"
            backgoundColor="transparent"
            type="big"
            color="#64ffda"
            border="1px solid #64ffda"
            borderRadius="4px"
            fontSize="13px"
            className={styles.button}
          >
            Contact Me
          </Button>
        </section>
      </div>
    </div>
  );
}
