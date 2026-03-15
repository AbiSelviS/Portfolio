
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import style from "./Contact.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qgdd4oe",
      "template_imh9ftl",
      form.current,
      "hBXOTOiM4lPmFuYtf"
    )
    .then(() => {
      alert("Message Sent Successfully ✅");
    })
    .catch(() => {
      alert("Failed to send ❌");
    });

    e.target.reset();
  };

  return (
    <div className={style.contact}id="Contact">

      <h1 className={style.title}>SEND ME A MESSAGE</h1>

      <div className={style.container}>

        {/* Left */}
        <div className={style.left}>
          <h2>Getting in touch is easy!</h2>

          <p>4/54 thiruppathisaram,west car street,Nagercoil</p>
          <p>6385311074</p>
          <p>abiselvis154@gmail.com</p>
        </div>

        {/* Right */}
        <form ref={form} onSubmit={sendEmail} className={style.form}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Send Me A Messsage" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
