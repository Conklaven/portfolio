import React, {Component} from 'react';
import {connect} from 'react-redux'
import "tachyons"
import Typewriter from 'typewriter-effect';
import './Home.css'
import js from '../images/js.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import sql from '../images/sql.png'
import pgadmin from '../images/pgadmin.png'
import AnimatedText from 'react-animated-text-content';
import Test from './Test'
import Projects from './Projects'
import WKU from './WKU'
import Di from './Di'
import Tech from './Tech'
import Gradient from 'rgt'
import NewProjects from './NewProjects'
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
                
                    {/* <div className="subTitle"><Test/></div> */}
                    <h1 className="subTitle">
                            <span className="gradient_test">About Me</span>
                    </h1>
                    <div className="aboutDetails">
                    <div className="section_head">
                    <Gradient dir="left-to-right" from="#F400FF" to="#FF0000">
                        Education
                        </Gradient></div>
                        <WKU/>
                        <Di/>
                        {/* <p>Western Kentucky University : <span>Business Communications</span></p>
                        <p>Developers Institute : <span>Full Stack Certification</span></p> */}
                    <div className="section_head"><Gradient dir="left-to-right" from="#F400FF" to="#FF0000">
                        Technologies
                        </Gradient></div>
                        <Tech/>
                        {/* <p>HTML, CSS, Javascript, REACT, Redux, Node.js, JSON, AJAX, SQL, JQuery, Bootstrap, Bash</p>
                        <p>Windows, OSX, Unix/Linux, </p> */}
                    <div className="section_head"><Gradient dir="left-to-right" from="#F400FF" to="#FF0000">
                        Hobbies
                        </Gradient></div>
                    <p className="text">Professional Mascot, Avid Lego Builder </p>
                    </div>
                </div>
                <a id="portfolio" href="#portfolio"></a>
                <div className="projContain">
                <h1 className="subTitle">
            
                <span className="gradient_test">Projects</span>
            
        </h1>
                {/* <Projects/> */}
                <div className="projFlex">
                <NewProjects/>
                </div>
            </div>
        </div>
            
        </>
        )
    }
}
  export default Highlights;