import React from 'react'
import'./contact.css';
import {FiMail} from 'react-icons/fi';
import {BsTelephone} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
const Contact = () => {
  return (
    <section id = 'contact'>
        <h2>Contact Me</h2>
        <div className = "container contact_container">
            <div className = 'contact_options'>
            <article className='contact_option'>
                <FiMail className = 'contact-option-icon'/>
                <h4>Email</h4>
                <h5>aryanjairath7@gmail.com</h5>
                <a href = 'mailto:aryanjairath7@gmail.com'>Send a message</a>
            </article>

            <article className='contact_option'>
                <BsTelephone className = 'contact-option-icon' />
                <h4>Call/Text</h4>
                <h5>(201)-351-3300</h5>
            <div>
                <a href = 'tel:+12013513300'>Call</a>
                <a href = 'sms:+12013513300'>Text</a>
            </div>
            </article>

            <article className='contact_option'>
                <GrInstagram className = 'contact-option-icon'/>
                <h4>Instagram/Messenger</h4>
                <h5>@_aryanjairath</h5>
                <a href = 'https://www.instagram.com/_aryanjairath/' target ='_blank'>Connect</a>
            </article>
            </div>
            {}
            <form action = "">
                <input type='text' name = 'name' placeholder='Aryan Jairath' requireed/>
                <input type = 'email' name = 'email' placeholder = 'Your Email' required/>
                <textarea name = 'message' rows = '7' placeholder= 'Your Message' required/>
                <button type = "submit" className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact