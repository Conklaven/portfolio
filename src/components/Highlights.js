import React, {Component} from 'react';
import {connect} from 'react-redux'
import blog from '../blog.png'
import "tachyons"
import Typewriter from 'typewriter-effect';
import './Home.css'
import js from '../images/js.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import html from '../images/html.png'
import sql from '../images/sql.png'
import pgadmin from '../images/pgadmin.png'
import css from '../images/css.png'
import AnimatedText from 'react-animated-text-content';
import Test from './Test'
import Projects from './Projects'
import Projectsword from './Projectsword'


import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Highlights extends Component {
   
    render(props){
        return(
            <>
            <div className="sectionTwo">
                <div className="logos">
                    <img className="logoimg" src={js}></img>
                    <img className="logoimg" src={react}></img>
                    <img className="logoimg" src={redux}></img>
                    <img className="logoimg" src={pgadmin}></img>
                    <img className="logoimg" src={sql}></img>
                </div>
                <div className="about">
                    <div className="subTitle"><Test/></div>
                    <div className="aboutDetails">
                    <div className="section_head">Education</div>
                        <p>Western Kentucky University : <span>Business Communications</span></p>
                        <p>Developers Institute : <span>Full Stack Certification</span></p>
                    <div className="section_head">Technologies</div>
                        <p>HTML, CSS, Javascript, REACT, Redux, Node.js, JSON, AJAX, SQL, JQuery, Bootstrap, Bash</p>
                        <p>Windows, OSX, Unix/Linux, </p>
                    <div className="section_head">Hobbies</div>
                    <p>Professional Mascot, Avid Lego Builder </p>
                    </div>
                </div>
                <div className="projContain">
                <div className="subTitle"><Projectsword/></div>
                <Projects/>
            </div>
            Test
        </div>
            
        </>
        )
    }
}
  export default Highlights;