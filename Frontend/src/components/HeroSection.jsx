


     
import React, { useEffect } from "react";
import picture from "../assets/abi1.jpeg";
import Hero from './HeroSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={Hero.hero} id="About">

      {/* Left Side */}
      <div className={Hero.heroleft} data-aos="fade-right">
        <p className={Hero.intro}>Hi there, I am</p>

        <h1 className={Hero.name}>S. Abi Selvi</h1>

        <h2 className={Hero.role}>Frontend Developer</h2>

        <p className={Hero.desc}>
          Aspiring Frontend Developer passionate about building responsive
          and user-friendly websites using HTML, CSS, JavaScript, and React.
        </p>

        {/* Button + Icons */}
        <div className={Hero.herobuttons}>

          {/* Download CV Button */}
            <a href="" className={Hero.cv}>
          Download CV
          </a>

          {/* Github */}
          <a href="https://github.com/AbiSelviS" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              size="1x"
              color="#ece7e7"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            />
          </a>

          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/s-abi-selvi-915b85259" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="1x"
              color="#d7dbdf"
            />
          </a>

        </div>
      </div>

      {/* Right Side Image */}
      <div className={Hero.heroright} data-aos="fade-left" data-aos-delay="200">
        <div className={Hero.imagebg}>
          <img src={picture} alt="Abi Selvi" />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
