
import React from "react";
import Navbars from "./NavBar.module.css";
import Button from "./Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <div className={Navbars.navbar}>
            {/* Logo / Heading */}
            <div className={Navbars.navheading}>
                <h1>Abi Selvi</h1>
            </div>

            {/* Navigation */}
            <div className={Navbars.nav}>
                {/* Hamburger Toggle */}
                <input type="checkbox" id="check" className={Navbars.check} />
                <label htmlFor="check" className={Navbars.checked}>
                    <FontAwesomeIcon icon={faBars} />
                </label>

                {/* Menu Links */}
                <ul>
                    <li ><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Skill">Skill</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    
                    {/* <li><div className={Navbars.navbutton}>
                        <Button br={"20px"} pd={"7px"} fw={"bold"} name={"Get In Touch"} />
                    </div></li> */}
                </ul>
            </div>

    
            
        </div>
    );
};

export default NavBar;