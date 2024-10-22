import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="Via Support Chat" />
          <Button text="Via Call" />
        </div>
        <Button isOutline={true} text="Via Email Form" />
        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="Text">Text</label>
            <textarea name="text" rows="8"></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "5px",
            }}
          >
            <Button isOutline={false} text="Submit" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/nike_logo.png" width="600px"></img>
      </div>
    </section>
  );
};
export default ContactForm;
