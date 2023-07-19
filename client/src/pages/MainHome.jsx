import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import HowToUse from './HowToUse';
import ContactUs from './ContactUs';
import SignUp from './SignUp';
import '../styles/styling.css';
import '../index.css';

export default function MainHome() {
  return (
    <>
      <nav className="navbar items-center flex-wrap p-6">
        {/* <div className='pos-fix gradient' style={{width:"100%",height:"5rem"}}> */}
        <div className='pos-fix m-5'>
        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
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
        <div>
        <div className='text-white page-text flex ' style={{ marginTop: "8rem" }}>
          <div className='mr-5' style={{ marginTop: '7rem' }}>At StartupChain, we are revolutionizing the way entrepreneurs raise investments for their groundbreaking startups and empowering investors to discover the most promising ventures, all through the transformative power of blockchain Ethereum technology. Our platform is a pioneer in the realm of decentralized fundraising, offering a seamless and secure ecosystem where dreams are funded and innovations thrive.</div>
          <img className="page-image" src="https://m.economictimes.com/thumb/msid-79990001,width-1200,height-900,resizemode-4,imgsize-137495/fund-raising-getty-1200.jpg" />
        </div>
        <div className='text-white page-text mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, sequi asperiores! Itaque, incidunt. Nulla qui optio tempora aut voluptatem nostrum rerum quas porro odio quasi aliquam illum rem eius mollitia consequatur labore voluptates modi fugit cupiditate eligendi magnam, libero repellendus fuga ipsam. Velit impedit quibusdam, ab itaque, eveniet voluptates voluptate amet, nihil porro error perspiciatis facilis. Quam, deleniti rerum. Totam neque inventore commodi saepe animi? Dicta blanditiis, tempora dignissimos in rerum dolore et placeat incidunt aliquam. Exercitationem nulla enim ullam omnis aperiam rerum nostrum quos sunt nobis vero voluptates sint recusandae deserunt placeat nam doloribus accusamus, non quam. Impedit, quam!</div>
        <div className='text-white page-text mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, sequi asperiores! Itaque, incidunt. Nulla qui optio tempora aut voluptatem nostrum rerum quas porro odio quasi aliquam illum rem eius mollitia consequatur labore voluptates modi fugit cupiditate eligendi magnam, libero repellendus fuga ipsam. Velit impedit quibusdam, ab itaque, eveniet voluptates voluptate amet, nihil porro error perspiciatis facilis. Quam, deleniti rerum. Totam neque inventore commodi saepe animi? Dicta blanditiis, tempora dignissimos in rerum dolore et placeat incidunt aliquam. Exercitationem nulla enim ullam omnis aperiam rerum nostrum quos sunt nobis vero voluptates sint recusandae deserunt placeat nam doloribus accusamus, non quam. Impedit, quam!</div>
        </div>
      </nav>
    </>
  )
}
