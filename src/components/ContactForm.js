import React, {Component} from 'react';
import{ init } from '@emailjs/browser';
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


init("user_Qv6m2oX5J6XNJXVAAh9mm");

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '', email: '' };
        this.handleFeedback = this.handleFeedback.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    render(props){
        
        return(
            <form className="test-mailing">
    	<h1>What to know more?... send me a message!!</h1>
    	<div>
            <input value={this.state.name} type="text" className="from_name" id="name" onChange={this.handleName} placeholder="Your Name"></input>
            <input value={this.state.email} type="text" className="reply_to" id="email" onChange={this.handleEmail} placeholder="Your Email"></input>
            
          <textarea
        	id="feedback"
        	className="message"
        	onChange={this.handleFeedback}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleName(event) {
    this.setState({name : event.target.value})
  }
  handleFeedback(event) {
    this.setState({feedback : event.target.value})
  }
  handleEmail(event) {
    this.setState({email : event.target.value})
  }
  handleSubmit (event) {
	const templateId = 'template_e39d7pr';

	this.sendFeedback(templateId, {message: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'service_beuqlgs', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}


export default ContactForm;

