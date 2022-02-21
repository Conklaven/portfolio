import { useState } from 'react';
import { send } from '@emailjs/browser';

function FormTwo() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
        my_file: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_beuqlgs',
            'template_e39d7pr',
            toSend,
            'user_Qv6m2oX5J6XNJXVAAh9mm'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        };
    
      const handleChange = (e) => {
          console.log(e.target.name)
          console.log(e.target.value)

        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
  return (
    <div className="test-mailing">
      <form onSubmit={onSubmit}>
    	<h1 className="contactHead">What to know more?... send me a message!!</h1>

  <input
  className="from-name"
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
        	name='message'
        	className="gradient_message"
        	onChange={handleChange}
        	placeholder="What's on Your mind?"
        	required
        	value={toSend.message}
        	style={{width: '100%', height: '150px'}}
      	/>
  <input
  className="reply-to"
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <input
    type='file'
    name='my_file'
    value={toSend.my_file}
    onChange={handleChange}
  />
  <button type='submit'>Submit</button>
</form>
    </div>
  );
}

export default FormTwo;
