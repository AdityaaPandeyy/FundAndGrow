import React, { useRef } from 'react';
import '../styles/styling.css';
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import Header from '../pages/Header';

export default function ContactUs() {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jlkhows', 'template_srv77u9', form.current, 'cBH8JNyn1Vp832vUV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="contactus" style={{width:"120%"}}>
          <div className="title">
            <h2 style={{ color: "#187bff" }}>Get in Touch</h2>
          </div>
          <div className="box">
            <div className="contact form">
              <h3>Send a message</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="formBox">
                  <div className="row50">
                    <div className="inputBox">
                      <div className="username">
                        <span>User Name</span>
                        <input type="text" placeholder="Kanishk Kumar" style={{ backgroundColor: "#101010" }} name="user_name" required />
                      </div>
                    </div>
                  </div>

                  <div className="row50">
                    <div className="inputBox">
                      <span>Email</span>
                      <input type="email" placeholder="kan201202@gmail.com" style={{ backgroundColor: "#101010" }} name="user_email" required />
                    </div>
                    <div className="inputBox">
                      <span>Mobile Number</span>
                      <input type="text" placeholder="+91 7208xxxxxx" style={{ backgroundColor: "#101010" }} name="user_phonenumber" required />
                    </div>
                  </div>

                  <div className="row100">
                    <div className="inputBox">
                      <span>Message</span>
                      <textarea placeholder="Write your message here" style={{ backgroundColor: "#101010" }} name="user_message" required></textarea>
                    </div>
                  </div>

                  <div className="row100">
                    <div className="inputBox">
                      <button>Send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact info">
              <h3>Contact Info</h3>
              <div className="infoBox">
                <div>
                  <span><FontAwesomeIcon icon={faLocationDot} /></span>
                  <p>Panvel, Navi Mumbai <br /> India</p>
                </div>
                <div>
                  <span><FontAwesomeIcon icon={faEnvelope} /></span>
                  <a href="mailto:kan201202@gmail.com">kan201202@gmail.com</a>
                </div>
                <div>
                  <span><FontAwesomeIcon icon={faPhone} /></span>
                  <a href="tel:+917208323861">+91 7208323861</a>
                </div>

                <ul className="sci">
                  <li> <a href="#"><BsFacebook /></a></li>
                  <li> <a href="#"><BiLogoInstagramAlt /></a></li>
                  <li> <a href="#"><BsTwitter /></a></li>
                  <li> <a href="#"><BsLinkedin /></a></li>
                </ul>
              </div>
            </div>
            <div className="contact map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1864122265665!2d79.59189707464311!3d13.70715699832651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4963136f08c3%3A0x5ca438a8abb2002b!2sIndian%20Institute%20Of%20Technology%20Tirupati!5e0!3m2!1sen!2sin!4v1691231602956!5m2!1sen!2sin"
                style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
