import React, {Component} from 'react';
import {connect} from 'react-redux'
import "tachyons"
import Typewriter from 'typewriter-effect';
import './Home.css'
import Highlights from './Highlights'
import footer from '../images/upsidedownback.jpg'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Home extends Component {
   
    render(props){

        return(
            <>
           <div className="contain">
            <img className="top" src="https://images4.alphacoders.com/210/thumb-1920-210198.jpg">
            </img>
           <div className="sectionOne"> 
           <>Hello I'm <strong>Jacob Klaven</strong>,</>
           <Typewriter
                options={{
                autoStart: true,
                loop: true,
                }}
                onInit={(typewriter) => {
                typewriter.typeString("Full-Stack Developer skilled in <strong>JavaScript</strong>")
                .callFunction(() => {
                    })
                .pauseFor(500)
                .deleteChars(10)
                .typeString('<strong>React</strong>')
                .pauseFor(500)
                .deleteChars(5)
                .typeString('<strong>Redux</strong>')
                .pauseFor(500)
                .deleteChars(5)
                .typeString('<strong>Node.js</strong>')
                .pauseFor(500)
                .deleteChars(7)
                .typeString('<strong>and more</strong>')
                .callFunction(() => {
                    })
                .start()
                }}
            />
           </div>
           
            
            </div>
            <div>
            <Highlights/>
            </div>
            </>
        )
    }
}
  export default Home;
