import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import HowToUse from './HowToUse';
import ContactUs from './ContactUs';
import SignUp from './SignUp';

export default function MainHome() {
  return (
    <>
      <nav className="navbar items-center flex-wrap p-6">
        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="navbar-menu w-full flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="navbar-nav text-xl lg:flex-grow px-20">
          <Link to = "/fund" style={{color:"white",marginLeft:"1rem",border:"0.1rem solid black"}}>Fund</Link>
          <Link to = "/how-to-use" style={{color:"white",marginLeft:"3rem"}}>How to Use</Link>
          <Link to = "/why-us" style={{color:"white",marginLeft:"3rem"}}>Why Us</Link>
          <Link to = "/contact-us" style={{color:"white",marginLeft:"3rem"}}>Contact Us</Link>
          <Link to = "/sign-up" style={{color:"white",marginLeft:"3rem"}}>Sign Up</Link>
          </div>
          
        </div>
      </nav>
    </>
  )
}
