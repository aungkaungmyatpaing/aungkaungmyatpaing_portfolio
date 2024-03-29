import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1oigowv', 'template_6hdueoh', form.current, '7uCae-Hxp8kvJDUZq')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>saberaozo5152@gmail.com</h5>
              <a href="mailto:saberaozo5152@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>AG Kaung Myat Paing</h5>
              <a href="https://m.me/aungkaung.myatpaing.33" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+959760575696</h5>
              <a href="https://api.whatsapp.com/send?phone+959760575696" target="_blank">Send a message</a>
            </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact