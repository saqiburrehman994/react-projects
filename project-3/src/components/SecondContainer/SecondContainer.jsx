import styles from "./SecondContainer.module.css";
const SecondContainer = () => {
  return (
    <div className={styles.second_container}>
      <div className={styles.hello_block}>
        <h1>Hello, I'm Saqib</h1>
        <p>Freelance Web Developer</p>
        <button>Hire me</button>
      </div>
      <img
        src="./images/facebook.png"
        alt="logo"
        width="338px"
        height="464px"
      />
    </div>
  );
};
export default SecondContainer;
