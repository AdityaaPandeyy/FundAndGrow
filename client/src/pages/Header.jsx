import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../styles/styling.css';
import '../index.css';

export default function Header() {

    const [fix, setFix] = useState(false);
  
    function setFixed(){
      if(window.scrollY >= 100){
        setFix(true);
      }
      else{
        setFix(false);
      }
    }
  
    window.addEventListener("scroll", setFixed)
  
    return (
      <>
        <nav className="navbar items-center flex-wrap p-6">
            <div className={fix ? 'header fixed' : 'header'}>
              <div className="navbar-menu w-full flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="navbar-nav text-xl lg:flex-grow px-20">
                  <Link to="/fund" style={{ color: "white", marginLeft: "1rem" }} className="nav-text">Fund</Link>
                  <Link to="/how-to-use" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">How to Use</Link>
                  <Link to="/why-us" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">Why Us</Link>
                  <Link to="/contact-us" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">Contact Us</Link>
                  <Link to="/sign-up" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">Sign Up</Link>
                </div>
              </div>
              </div>
        </nav>
      </>
    )
  }
  

