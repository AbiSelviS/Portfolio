// import Abouts from './About.module.css'
// import picture from "../assets/abi2.jpeg";
// import Button from "./Button.jsx";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';


// const About = () => {
//     return (
//         <>
//             <div>
//                 <h1 className={Abouts.About} >About Me</h1>

//             </div>

//             <div className={Abouts.secabout}>
//                 <div className={Abouts.secimage}>
//                     <img src={picture} alt="Abi Selvi" className={Abouts.aboutimg} />
//                 </div>

//                 <div className={Abouts.aboutpara}>
//                     <p>
//                         I am a passionate and dedicated aspiring Frontend Developer with a strong
//                         interest in building responsive and user-friendly web applications.
//                         I enjoy transforming ideas into interactive and visually appealing
//                         websites using modern technologies such as HTML, CSS, JavaScript and React.

//                         I am always eager to learn new technologies and improve my development
//                         skills. I focus on writing clean, efficient and maintainable code while
//                         creating smooth user experiences. My goal is to grow as a developer and
//                         contribute to innovative and impactful web projects in a professional
//                         environment.
//                     </p>
//                     <div className={Abouts.btncontainer}>
//                 {/* <button className={Abouts.btn}>View Skills</button> */}
                
//                 <Button colrs={'white'} bg={'#071b34'} br={'10%'} fs={'15px'} pd={'10px'} ml={'20px'}name={'view project'} links={"#Project"} />
        
//             </div>
//                 </div>
//             </div>
            
//         </>
//     );
// };

// export default About;
import React, { useEffect } from 'react';
import Abouts from './About.module.css';
import picture from "../assets/abi2.jpeg";
import Button from "./Button.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  // ✅ AOS init useEffect-la
  useEffect(() => {
    AOS.init({
      duration: 600, 
    
    });
  }, []);

  return (
    <>
      <div>
        <h1 className={Abouts.About} data-aos="fade-down">About Me</h1>
      </div>

      <div className={Abouts.secabout}>
        <div className={Abouts.secimage} data-aos="fade-right">
          <img src={picture} alt="Abi Selvi" className={Abouts.aboutimg} />
        </div>

        <div className={Abouts.aboutpara} data-aos="fade-left">
          <p>
            I am a passionate and dedicated aspiring Frontend Developer with a strong
            interest in building responsive and user-friendly web applications.
            I enjoy transforming ideas into interactive and visually appealing
            websites using modern technologies such as HTML, CSS, JavaScript and React.

            I am always eager to learn new technologies and improve my development
            skills. I focus on writing clean, efficient and maintainable code while
            creating smooth user experiences. My goal is to grow as a developer and
            contribute to innovative and impactful web projects in a professional
            environment.
          </p>
          <div className={Abouts.btncontainer} data-aos="zoom-in">
            <Button 
              colrs={'white'} 
              bg={'#071b34'} 
              br={'10%'} 
              fs={'15px'} 
              pd={'10px'} 
              ml={'20px'} 
              name={'view project'} 
              links={"#Project"} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;