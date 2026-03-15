import React from "react";
import Exper from './Experience.module.css'
import ABI from "../assets/abi1.jpeg";
import alo from "../assets/alo.jpg";
import infopark from "../assets/ak2.jpg";
import orvionar from "../assets/orvionar.jpg";
import resumee from "../assets/AbiSelvi.Resume.pdf";



const Experience = () => {
  return (
    <div className={Exper.exp}id="Experience" >

     <div className={Exper.expbg}>
        <button className={Exper.button1} >view more</button>
      </div>


      <div className={Exper.profileimg}>
        <img src={ABI} alt="abi"  className={Exper.imaged}/>
      </div>

      <div className={Exper.about}>
        <h1>Experience</h1>
      <a href={resumee} > <button> View My Resume</button></a> 
      </div>

      <div className={Exper.experiencecontainer}>

        {/* ALO */}

        <div className={Exper.internshipcard}>
            <div className={Exper.imgsec}>
          <img src={alo} className={Exper.img} alt="alo"/>
          </div>
          <h2 className={Exper.role}>Java Intern</h2>
          <h3 className={Exper.company}>@ALO Infotech</h3>
          <p className={Exper.duration}>Jan 2025 - Mar 2025</p>

          <ul className={Exper.work}>
            <li>Worked on core Java concepts like OOP.</li>
            <li>Used collections and exception handling.</li>
            <li>Developed small Java applications.</li>
          </ul>
        </div>

        {/* Infopark */}

        {/* <div className="internship-card">
           <img src={infopark} className="img" alt="alo"/>
          <h2 className="role">Python Intern</h2>
          <h3 className="company">@Infopark</h3>
          <p className="duration">2024</p>

          <ul className="work">
            <li>Worked with Python basics and scripting.</li>
            <li>Developed simple Python applications.</li>
            <li>Practiced problem solving and debugging.</li>
          </ul>
        </div> */}

        

        <div className={Exper.internshipcard}>
            <div className={Exper.imgsec}>
            <img src={orvionar} className={Exper.img} alt="alo"/>
            </div>
          
          <h2 className={Exper.role1}>MERN Stack Intern</h2>
          <h3 className={Exper.company}>@Orvionar</h3>
          <p className={Exper.duration}>2025</p>

          <ul className={Exper.work}>
            <li>Developed web applications using MERN stack.</li>
            <li>Built responsive UI using React.</li>
            <li>Worked with REST APIs and MongoDB.</li>
          </ul>
        </div>
        <div className={Exper.internshipcard}>
            <div className={Exper.imgsec}>
           <img src={infopark} className={Exper.img} alt="alo"/>
           </div>
          <h2 className={Exper.role}>Python Intern</h2>
          <h3 className={Exper.company}>@Infopark</h3>
          <p className={Exper.duration}>2024</p>

          <ul className={Exper.work}>
            <li>Worked with Python basics and scripting.</li>
            <li>Developed simple Python applications.</li>
            <li>Practiced problem solving and debugging.</li>
          </ul>
        </div> 

      </div>

    </div>
  );
};

export default Experience;
