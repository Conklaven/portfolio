import React, {Component} from 'react';
import 'materialize-css';
import { Button, Card, Row, Col, Nav, } from 'react-materialize';
import M from  'materialize-css/dist/js/materialize.min.js';
import elem from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../images/logo.png'

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
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        console.log(sidenav)
        M.Sidenav.init(sidenav, {});
      }
    render(props){
        
        return(
           
        <>
        <div className="nav-fixed black">
        <nav className="nav-fixed black">
        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
            
                <aside className="black">
                    <a href="/" className="brand-logo center"><img className="mainlogo" src={logo}></img></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Get in Touch</Link></li>
                        <li><Link to="/resume">Resume</Link></li>

                    </ul>
                </aside>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Get In Touch</a></li>
                    <li><a href="/resume">Resume</a></li>

                </ul>
            </div>
        
        
            </>
        )
    }
}

  export default Navbar;