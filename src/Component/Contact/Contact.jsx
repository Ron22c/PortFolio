import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {

  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d7urd8r', 'template_isbtsek', form.current, 'LZu24xKdl4Ugdv1c6')
    e.target.reset()
      
    // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rjc22aug@gmail.com</h5>
            <a href='mailto:rjc22aug@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ranajit Chandra</h5>
            <a href=''  target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href=' https://wa.me/+917980705729'  target="_blank">Send a message</a>
          </article>
        </div>
        {/* contact form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
      </section>
  )
}
