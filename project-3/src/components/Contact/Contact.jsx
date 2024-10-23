import React from "react";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.internal_container}>
        <h1 style={{ textAlign: "center" }}>Contact</h1>
        <div className={styles.mycontainer}>
          <div className={styles.contact_section}>
            <h3>Send me a Message</h3>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Name"></input>
            <textarea placeholder="Message"></textarea>
            <button className={styles.contact_btn}>Send</button>
          </div>
          <div className={styles.social_media}>
            <h2>Social Media</h2>
            <h6>Saqib Ur Rehman</h6>
            <h6>Saqib Ur Rehman</h6>
            <h6>Saqib Ur Rehman</h6>
            <h6>Saqib Ur Rehman</h6>
            <h6>Saqib Ur Rehman</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
