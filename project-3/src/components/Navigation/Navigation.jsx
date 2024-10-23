import React from "react";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.nav_container}>
      <div>
        <h1>S</h1>
      </div>
      <ul className={styles.nav_ul}>
        <li>Home</li>
        <li>Services</li>
        <li>Blog</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Navigation;
