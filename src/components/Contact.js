import ContactForm from './ContactForm'
import './Contact.css';

const Contact = (props) => {

    return(
        <><div className="contain">
        <img className="top" src="https://images4.alphacoders.com/210/thumb-1920-210198.jpg">
        </img>
        <div className="contact-contain">
            <ContactForm/>
            </div>
            </div>
        </>
    )
}


export default Contact