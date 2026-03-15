import React from "react";
import Foot from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Foot.footer}>

      <h2 className={Foot.name}>Abiselvi</h2>
       <p className={Foot.names}>FrontEnd Developer</p>

      <div className={Foot.icons}>
        <FaGithub />
        <FaLinkedin />
        <FaInstagram />
      </div>

      <p className={Foot.copy}>
        © 2026 Abiselvi. All Rights Reserved
      </p>

    </div>
  );
};

export default Footer;