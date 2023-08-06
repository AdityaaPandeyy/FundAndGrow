import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import HowToUse from './HowToUse';
import ContactUs from './ContactUs';
import SignUp from './SignUp';
import { useEffect, useState } from "react";
import '../styles/styling.css';
import '../index.css';
import Header from '../pages/Header';
import axios from 'axios';

export default function MainHome() {
  const [ethToUsdRate, setEthToUsdRate] = useState('');

  useEffect(() => {
    // Function to fetch the ETH to USD rate
    const fetchEthToUsdRate = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );

        // Extract the ETH to USD rate from the API response
        const ethUsdRate = response.data.ethereum.usd;
        setEthToUsdRate(ethUsdRate);
      } catch (error) {
        console.error('Error fetching ETH to USD rate:', error);
      }
    };

    // Fetch the rate when the component mounts
    fetchEthToUsdRate();

    // Set up an interval to fetch the rate every 60 seconds (adjust as needed)
    const interval = setInterval(fetchEthToUsdRate, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{width:"100vw"}}>
      <nav className="navbar items-center flex-wrap p-6">

          <Header />
      {/* Navigation bar is above */}
        
        <div className='text-white page-text flex ' style={{ marginTop: "8rem" }}>
          <div className='mr-5' style={{ marginTop: '5rem' }}>At StartupChain, we are revolutionizing the way entrepreneurs raise investments for their groundbreaking startups and empowering investors to discover the most promising ventures, all through the transformative power of blockchain Ethereum technology. Our platform is a pioneer in the realm of decentralized fundraising, offering a seamless and secure ecosystem where dreams are funded and innovations thrive.</div>
          <div className="ether">
          <div className="card" style={{width:"18rem",height:"24rem"}}>
      <svg
        className="img"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="7rem"
        height="100%"
        version="1.1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 784.37 1277.39"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_1421394342400">
            <g>
              <polygon fill="#343434" fillRule="nonzero" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54" />
              <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
              <polygon fill="#3C3C3B" fillRule="nonzero" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89" />
              <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
              <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
              <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
            </g>
          </g>
        </g>
      </svg>
      <div className="textBox">
        <p className="text head">Ethereum</p>
        <span>Cryptocurrency</span>
        <p className="text price">{ethToUsdRate ? `${ethToUsdRate} USD` : 'Loading...'}</p>
      </div>
    </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
