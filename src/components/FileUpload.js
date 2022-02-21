import { useState } from 'react';
import { send } from '@emailjs/browser';
import {sendForm} from '@emailjs/browser';
import emailjs from '@emailjs/browser';



const FileUpload = (props) => {
    function formSubmit(event) {
        event.preventDefault();
        let my_file = event.target.my_file.value
        emailjs.sendForm('service_beuqlgs', 'template_e39d7pr', '#form')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });;
    }
    return(


<form className="form" id="form" encType="multipart/form-data" method="post" onSubmit={formSubmit}>
    <label>Attach file:</label>
    <input type="text" name="reply_to" placeholder="Your Email"></input>
    <input type="Text" name="from_name" placeholder="Your Name"></input>

    <input type="file" name="my_file"></input>
    <input type="submit" value="Submit"></input>
</form>
    )
}


export default FileUpload