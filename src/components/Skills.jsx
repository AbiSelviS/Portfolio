// import './Skill.css'
import HTML from '../assets/html.jpg'
import CSS from '../assets/css1.jpg'
import JS from '../assets/js.webp'
import BOOTSTRAP from '../assets/bootstrap.jpg'
import REACT from '../assets/react.svg'
import MONGODB from '../assets/mongodb.jpg'
import GITHUB from '../assets/github.png'
import VERCEL from '../assets/vercel.jpg'
import NODEJS from '../assets/Node.js.jpg'
import Skilled from './Skill.module.css'




const SkillS = () => {
    return<>
    <h1 className={Skilled.skill}id="Skill">SKILLS</h1>
    <div className={Skilled.Skillsection} >
    
        <div className={Skilled.skillimage}>
            <img src={HTML}alt="Abi Selvi" className={Skilled.skillimg} />
            <h1>HTML5</h1>
            <p>I use HTML to structure web pages using semantic elements
          like headings, sections, forms and media.</p>
        </div>
        <div className={Skilled.skillimage}>
    
            <img src={CSS} alt="Abi Selvi" className={Skilled.skillimg} />
            <h1>CSS</h1>
            <p> I style responsive layouts using Flexbox, Grid and modern
          CSS techniques.</p>
        </div>
        <div className={Skilled.skillimage}>
            <img src={JS}alt="Abi Selvi" className={Skilled.skillimg} />
            <h1>JAVA SCRIPT</h1>
            <p>I build interactive web functionality using JavaScript,
          ES6 features and DOM manipulation.</p>
        </div>
        <div className={Skilled.skillimage}>
            <img src={BOOTSTRAP} alt="abi SElvi" className={Skilled.skillimg} />
            <h1>BOOT STRAP</h1>
            <p>I use Bootstrap to build responsive and mobile-friendly web layouts using its grid system and pre-built components.</p>
        </div>
         <div className={Skilled.skillimage}> 
            <img src={REACT} alt="abi SElvi" className={Skilled.skillimg} />
            <h1>REACT</h1>
            <p> I create reusable UI components and dynamic web applications
          using React.</p>
        </div>
        
        <div className={Skilled.skillimage}>
            <img src={MONGODB} alt="abi SElvi" className={Skilled.skillimg}/>
            <h1>MONGO DB</h1>
            <p>I work with MongoDB to store and manage application data
          in a NoSQL database.</p>
        </div>
        <div className={Skilled.skillimage}>
            <img src={GITHUB} alt="abi SElvi" className={Skilled.skillimg} />
            <h1>GITHUB</h1>
            <p>I use GitHub for version control, project management
          and collaboration.</p>
        </div>
        <div className={Skilled.skillimage}>
            <img src={VERCEL} className={Skilled.skillimg}/>
            <h1>VERCEL</h1>
            <p>I use Vercel to deploy and host web applications quickly. </p>
        </div>
        <div className={Skilled.skillimage}>
            <img src={NODEJS} className={Skilled.skillimg}/>
            <h1>NODE.JS</h1>
            <p>I use Netlify to deploy and host static websites with fast performance and easy continuous deployment.</p>
        </div>
    </div>
    </>
}

export default SkillS;