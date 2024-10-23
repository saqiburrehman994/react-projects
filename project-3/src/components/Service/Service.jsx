import React from "react";
import styles from "./Service.module.css";
export const Service = () => {
  return (
    <div className={styles.service_container}>
      <div className={styles.internal_div}>
        <h1>Services</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          asperiores et numquam aliquam, accusantium voluptatibus eum ad labore
          totam, perferendis omnis dolor ut in inventore provident ipsa est
          harum cupiditate.
        </p>
        <div className={styles.outer_container}>
          <div className={styles.internal_container}>
            <h1>S</h1>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
              nihil totam officiis tenetur deserunt.
            </p>
          </div>
          <div className={styles.internal_container}>
            <h1>S</h1>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
              nihil totam officiis tenetur deserunt.
            </p>
          </div>
          <div className={styles.internal_container}>
            <h1>S</h1>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
              nihil totam officiis tenetur deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
