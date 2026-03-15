
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import educ from './Education.module.css';

const Education = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
  
    });
  }, []);

  return (
    <section className={educ.educationsection} id="Education">

      <h1 className={educ.edutitle} data-aos="zoom-in">
        Education
      </h1>

      <div className={educ.educationcontainer}>

        <div className={educ.educard} data-aos="zoom-in">
          <h2>Bachelor of Computer and Science Engineering</h2>
          <h3>Arunachala College Of Engineering For Women, Kanyakumari</h3>
          <p>2022 – 2026</p>
          <p>CGPA: 8.5</p>
        </div>

        <div className={educ.educard} data-aos="zoom-in" data-aos-delay="200">
          <h2>Higher Secondary Education</h2>
          <h3>S.N.M Hindu Vidyalaya Matric Higher Secondary School</h3>
          <p>2019 – 2021</p>
          <p>Percentage: 85%</p>
        </div>

        <div className={educ.educard} data-aos="zoom-in" data-aos-delay="400">
          <h2>Secondary School (SSLC)</h2>
          <h3>S.N.M Hindu Vidyalaya Matric Higher Secondary School</h3>
          <p>2018 – 2019</p>
          <p>Percentage: 91.6%</p>
        </div>

      </div>

    </section>
  );
};

export default Education;
