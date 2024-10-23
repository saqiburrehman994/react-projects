import React from "react";
import styles from "./ThirdContainer.module.css";

export const ThirdContainer = () => {
  return (
    <div className={styles.third_container}>
      <div className={styles.about_me}>
        <h1>About Me</h1>
      </div>
      <div className={styles.para_me}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          facere autem dolorum aliquid eaque consequatur ad! Iusto voluptatibus
          molestias distinctio error temporibus quod officia eum, perspiciatis
          aperiam nostrum repellendus consectetur!
        </p>
        <div className={styles.btn_container}>
          <button className={styles.style_button}>Hire Me</button>
          <button
            className={styles.style_button}
            style={{ backgroundColor: "#F8F9FA", color: "black" }}
          >
            View CV
          </button>
        </div>
      </div>
    </div>
  );
};
