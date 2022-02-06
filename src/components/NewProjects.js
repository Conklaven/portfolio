import React, {Component} from 'react';
import 'materialize-css';
import { Button, Card, Row, Col, Nav, } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';
import star from '../images/starwars.PNG'
import kenes from '../images/Kenesnew.PNG'
import jewanced from '../images/Jewanced.PNG'

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


class NewProjects extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    
    render(props){
        
        return(
            <>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={star}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Star Wars Search</span>
                    <p><a href="http://kenestours.herokuapp.com/Restaurants" target="_blank">
                    <Button variant="primary">Take a Look</Button>
                    </a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Star Wars Search<i class="material-icons right">close</i></span>
                    <p className="more-info"> Interactive Star Wars Search</p>
                </div>
            </div>

            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={kenes}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Kenes Tours Database</span>
                    <p><a href="http://kenestours.herokuapp.com/Restaurants" target="_blank">
                    <Button variant="primary">Take a Look</Button>
                    </a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Kenes Tours Database<i class="material-icons right">close</i></span>
                    <p className="more-info">On the go acces for tour operators</p>
                </div>
            </div>


            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={jewanced}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Jewanced</span>
                    <p><a href="http://kenestours.herokuapp.com/Restaurants" target="_blank">
                    <Button variant="primary">Take a Look</Button>
                    </a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Jewanced<i class="material-icons right">close</i></span>
                    <p className="more-info">Immersive website for a new podcast</p>
                </div>
            </div>
            </>
        )
    }
}

export default NewProjects;


