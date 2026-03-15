
// export default Project;
import React, { useEffect } from "react";
import Projects from "./Project.module.css";
import Button from './Button.jsx';

import portfolio from "../assets/ss portfolio.png";
import todo from "../assets/ss burger.png";
import login from "../assets/ss-native.png";

import AOS from "aos";
import "aos/dist/aos.css";

const projectData = [
  {
    title: "Tourism Website",
    image: login,
    desc: "Developed a responsive native website using HTML, CSS and JavaScript with a clean and user-friendly interface.",
    live: "https://native-project-seven.vercel.app/",
    github: "https://github.com/yourname/tourism-project"
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    desc: "Personal portfolio website created using React, HTML and CSS to showcase my skills, education and projects.",
    live: "https://your-live-link.com",
    github: "https://github.com/yourname/portfolio-project"
  },
  {
    title: "E-Commerce Website",
    image: todo,
    desc: "Developed a responsive E-commerce website using HTML and CSS with product layout and user-friendly design.",
    live: "https://burger-website-kappa-red.vercel.app/",
    github: "https://github.com/yourname/ecommerce-project"
  }
];

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation duration in ms
    
    });
    AOS.refresh();    // refresh AOS in case of dynamic content
  }, []);

  return (
    <div className={Projects.projectSection} id="Project">
      <h1 className={Projects.heading}>My Projects</h1>

      <div className={Projects.projectContainer}>
        {projectData.map((item, index) => (
          <div
            className={Projects.card}
            key={index}
            data-aos="fade-up"             // fade-up animation
            data-aos-delay={index * 100}   // stagger by 100ms per card
          >
            <div className={Projects.imageBox}>
              <img src={item.image} alt={item.title} />
            </div>

            <div className={Projects.content}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <div className={Projects.btns}>
                <a href={item.live} target="_blank" rel="noreferrer">
                  <Button
                    bg={'#007bff'}
                    pd={'8px'}
                    colrs={'white'}
                    br={'5px'}
                    cr={'pointer'}
                    bd={'none'}
                    di={'flex'}
                    name={'View Project'}
                  />
                </a>

                {/* <a href={item.github} target="_blank" rel="noreferrer">
                  <Button
                    bg={'#007bff'}
                    pd={'8px'}
                    colrs={'white'}
                    br={'5px'}
                    cr={'pointer'}
                    bd={'none'}
                    name={'GitHub'}
                  />
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;


