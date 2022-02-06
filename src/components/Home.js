import React, {Component} from 'react';
import {connect} from 'react-redux'
import "tachyons"
import Typewriter from 'typewriter-effect';
import './Home.css'
import Highlights from './Highlights'

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Home extends Component {
   
    render(props){
        let stylesArray= [ 
            'background-image: url(https://wallpaperaccess.com/full/340923.jpg)', 
            'background-size: cover',
            'font-size: 20px',
            'color: #fff', 
            'padding: 50px 20px',
            'line-height: 200px', 
            'width : 70px', 
            'top : 2px', 
            'height : 70px' ].join(';') 
       console.log('%c The force is strong with you', stylesArray);

        let msg = "%c Hi 👋! Welcome to my site!"; 
        let styles= [ 
            'font-size: 12px', 
            'font-family: monospace', 
            'background: white', 
            'display: inline-block', 
            'color: black', 
            'padding: 8px 19px', 
            'border: 1px dashed;' 
        ].join(';') 
            console.log(msg, styles);
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
                .callFunction(() => {
                    })
                .start()
                }}
            />
           </div>
           
            
            </div>
            <Highlights/>
            </>
        )
    }
}
  export default Home;
