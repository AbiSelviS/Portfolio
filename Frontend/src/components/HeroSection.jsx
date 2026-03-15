
// import picture from "../assets/abi1.jpeg";
// import Hero from './HeroSection.module.css'
// import Button from './Button.jsx'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import { faGithub } from '@fortawesome/free-brands-svg-icons';

// const HeroSection = () => {
//   return (
//     <div className={Hero.hero}id="About">

//       <div className={Hero.heroleft}>
//         <p className={Hero.intro}>Hi there, I am</p>

//         <h1 className={Hero.name}>S. Abi Selvi</h1>

//         <h2 className={Hero.role}>Frontend Developer</h2>

//         <p className={Hero.desc}>
//           Aspiring Frontend Developer passionate about building responsive
//           and user-friendly websites using HTML, CSS, JavaScript and React.
//         </p>

//         <div className={Hero.herobuttons}>
//            <button className={Hero.contact}>Contact Me</button>
//           <button className={Hero.cv}>Download CV</button> 
//           <a href="https://github.com/AbiSelviS">
//         <FontAwesomeIcon icon={faGithub} size="1x" color="#ece7e7" style={{ marginRight: "20px" }}/></a>
//         <a href="www.linkedin.com/in/s-abi-selvi-915b85259">
//   <FontAwesomeIcon icon={faLinkedin} size="1x" color="#d7dbdf" />
// </a>
       
//           {/* <Button
//             name="Contact Me"
//             bd="30px"
//             pd="12px 25px"
//             cr="pointer"
//             bg="#f5c542"
//             className={Hero.contact}
//           />
//           <Button name={'Download CV'} bd={'none'} pd={'12px 25px'} cr={'pointer'} bg={'Transparent'}colrs={'white'}className={Hero.cv} /> */}
//         </div>
//       </div>

//       <div className={Hero.heroright}>
//         <div className={Hero.imagebg}>
//           <img src={picture} alt="Abi Selvi" />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default HeroSection;
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
      duration: 1200, // animation duration
      once: false,    // animate every time it comes into view
    });
    AOS.refresh();     // ensures AOS recalculates positions
  }, []);

  return (
    <div className={Hero.hero} id="About">

      {/* Left Side: Text */}
      <div className={Hero.heroleft} data-aos="fade-right">
        <p className={Hero.intro}>Hi there, I am</p>
        <h1 className={Hero.name}>S. Abi Selvi</h1>
        <h2 className={Hero.role}>Frontend Developer</h2>
        <p className={Hero.desc}>
          Aspiring Frontend Developer passionate about building responsive
          and user-friendly websites using HTML, CSS, JavaScript, and React.
        </p>

        {/* Buttons and Social Icons */}
        <div className={Hero.herobuttons}>
          <a href="#Contact"><button className={Hero.contact}>Contact Me</button></a>
          <button className={Hero.cv}>Download CV</button> 

          <a href="https://github.com/AbiSelviS" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faGithub} 
              size="1x" 
              color="#ece7e7" 
              style={{ marginRight: "20px" }}
            />
          </a>

          <a href="https://www.linkedin.com/in/s-abi-selvi-915b85259" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon 
              icon={faLinkedin} 
              size="1x" 
              color="#d7dbdf" 
            />
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className={Hero.heroright} data-aos="fade-left" data-aos-delay="200">
        <div className={Hero.imagebg}>
          <img src={picture} alt="Abi Selvi" />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;