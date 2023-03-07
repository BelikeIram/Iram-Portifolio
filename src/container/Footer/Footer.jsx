import React, {useState } from 'react';
import { useRef } from 'react';
import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false)

  
  const input = useRef(null);

 const { username, email, message } = formData;


  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const validPattern =  {
     pattern:"^[A-Za-z0-9]{5,10}$",
     required:true
    }
   console.log(validPattern);
   
   const onHandle = ()=>{
     setFocused(true)
   }

  const handleSubmit = () => {
    if (username !== '' && email !== '' && message !=='') {
      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };
  
      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        }).catch((err) => console.log(err));
  } else {
    setFocused(true)
  }
      
  };
 
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="erummalik049@gmail.com" className="p-text">erummalik049@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 9625473288" className="p-text">+91 9625473288</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div  style={{flexDirection:'column'}}>
            <input id='1' className="input p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} focused={focused.toString()} {...validPattern} onBlur={onHandle}/>
            <p>Oops! you need to add your name here</p>
          </div>
          <div  style={{flexDirection:'column'}}>
            <input id='2' className="input p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}  focused={focused.toString()}   onBlur={onHandle} required />
            <p>Oops! you need to add your email here</p>
          </div>
          <div>
            <textarea
              id='3'
              className="input p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              focused={focused.toString()}
              onBlur={onHandle}
              {...validPattern }        />
              <p>Please share something</p>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);