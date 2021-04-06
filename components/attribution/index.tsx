import React from "react";
import styles from "./Attribution.module.scss";

function Attribution() {
  return (
    <footer className={styles.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.davidchanho.com" target="_blank">
        David Chan Ho
      </a>
      .
    </footer>
  );
}

export default Attribution;
