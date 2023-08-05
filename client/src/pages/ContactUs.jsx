import React from 'react';
import '../styles/styling.css';
import '../index.css';

export default function ContactUs() {
  return (
      <div className="contactus">
          <div className="title">
            <h2 style={{color:"#187bff"}}>Get in Touch</h2>
          </div>
          <div className="box">
            <div className="contact form">
              <h3>Send a message</h3>
              <form>
                <div className="formBox">
                  <div className="row50">
                    <div className="inputBox">
                      <span>First Name</span>
                      <input type="text" placeholder="Kanishk" style={{backgroundColor:"#101010"}}/>
                    </div>
                    <div className="inputBox">
                      <span>Last Name</span>
                      <input type="text" placeholder="Kumar" style={{backgroundColor:"#101010"}}/>
                    </div>
                  </div>

                  <div className="row50">
                    <div className="inputBox">
                      <span>Email</span>
                      <input type="email" placeholder="kan201202@gmail.com" style={{backgroundColor:"#101010"}}/>
                    </div>
                    <div className="inputBox">
                      <span>Mobile Number</span>
                      <input type="text" placeholder="+91 7208xxxxxx" style={{backgroundColor:"#101010"}}/>
                    </div>
                  </div>

                  <div className="row100">
                    <div className="inputBox">
                      <span>Message</span>
                      <textarea placeholder="Write your message here" style={{backgroundColor:"#101010"}}></textarea>
                    </div>
                  </div>

                  <div className="row100">
                    <div className="inputBox">
                      <input type="submit" value="Send"/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact info">
              <h3>Contact Info</h3>
              <div className="infoBox">
                <div>
                  <span><ion-icon name="location-outline"></ion-icon></span>
                  <p>Panvel, Navi Mumbai <br /> India</p>
                </div>
                <div>
                  <span></span>
                  <a href="mailto:kan201202@gmail.com">kan201202@gmail.com</a>
                </div>
                <div>
                  <span></span>
                  <a href="tel:+917208323861">+91 7208323861</a>
                </div>
              </div>
            </div>
            <div className="contact map"></div>
          </div>
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </div>
  )
}
