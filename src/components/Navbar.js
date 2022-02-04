import React, {Component} from 'react';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Home from './Home'


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    
    render(props){
        return(
           
        <>
        <div className="nav-fixed black">
        <nav className="nav-fixed black">
            
                <aside className="black">
                    <a href="/home" className="brand-logo center">Jacob Klaven</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down ">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Get in Touch</Link></li>
                        <li><Link to="/resume">Resume</Link></li>

                    </ul>
                </aside>
                </nav>
            </div>
        
        
            </>
        )
    }
}

  export default Navbar;