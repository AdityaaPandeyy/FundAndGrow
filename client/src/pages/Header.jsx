import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { mainnavlinks } from '../constants';
import '../styles/styling.css';
import '../index.css';
import { logo, menu, search, thirdweb } from '../assets';

export default function Header() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <>
      <div className="sm:hidden flex justify-between items-center relative">

        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className="mb-4">
            {mainnavlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43]'}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className='hidden lg:block'>
        <nav className="navbar items-center flex-wrap p-6">
          <div>
            <div className="className={`absolute top-[60px] right-0 left-0 z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}">
              <div className="navbar-nav text-xl lg:flex-grow px-20">
                <Link to="/" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">StartupChain</Link>
                <Link to="/fund" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">Fund</Link>
                <Link to="/how-to-use" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">How to Use</Link>
                <Link to="/why-us" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">Why Us</Link>
                <Link to="/contact-us" style={{ color: "white", marginLeft: "3rem" }} className="nav-text">Contact Us</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}


