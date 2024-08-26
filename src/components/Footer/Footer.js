import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Design &#10084; by{" "}
        <a className={styles.anchor} href="https://github.com/sonukumar3488">
          Sonu Kumar
        </a>
      </p>
    </footer>
  );
}
