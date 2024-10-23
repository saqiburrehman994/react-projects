import React from "react";
import styles from "./Blog.module.css";
export const Blog = () => {
  return (
    <div className={styles.blog_container}>
      <div>
        <h1>Blog</h1>
      </div>
      <div className={styles.blog_second_container}>
        <div
          className={`${styles.inside_blog_second_container} ${styles.blog_item}`}
        >
          <div className={styles.inside_blog_each_item}></div>
          <div className={styles.second_box}>
            <div style={{ padding: "20px" }}>
              <h3>Learn HTML</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quia dicta delectus? Harum quis amet.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.inside_blog_second_container} ${styles.blog_item}`}
        >
          <div className={styles.inside_blog_each_item}></div>
          <div className={styles.second_box}>
            <div style={{ padding: "20px" }}>
              <h3>Learn CSS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quia dicta delectus? Harum quis amet.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.inside_blog_second_container} ${styles.blog_item}`}
        >
          <div className={styles.inside_blog_each_item}></div>
          <div className={styles.second_box}>
            <div style={{ padding: "20px" }}>
              <h3>Learn GoLang</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quia dicta delectus? Harum quis amet.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.inside_blog_second_container} ${styles.blog_item}`}
        >
          <div className={styles.inside_blog_each_item}></div>
          <div className={styles.second_box}>
            <div style={{ padding: "20px" }}>
              <h3>Learn Java</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quia dicta delectus? Harum quis amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
