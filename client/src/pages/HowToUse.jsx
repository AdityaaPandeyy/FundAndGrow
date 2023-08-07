import React from 'react'
import Header from '../pages/Header';
import '../styles/styling.css';
import '../index.css';

export default function HowToUse() {
  return (
    <div className='main-container'>
      <Header />
      <div className="howtouse">
        <div className="title2">
          <h2 style={{ color: "white" }}>How to Use</h2>
        </div>
        <div className="allcard">
        <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">Connect to Metamask</p>
                <p>Hover Me</p>
            </div>
            <div className="backSide">
                <p className="title">1. Go to funds. <br/>2. Click on the Connect button.</p>
                <p>Leave Me</p>
            </div>
        </div>
        </div>
        <br/>
        <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">Create your Campaign</p>
                <p>Hover Me</p>
            </div>
            <div className="backSide">
                <p className="title">1. Go to funds. <br/>2. Connect your metamask account.<br/>3. Navigate to create your Campaign section. <br/>4. Fill the details accordingly.</p>
                <p>Leave Me</p>
            </div>
        </div>
        <br/>
        </div>
        <div className="myCard">
        <div className="innerCard">
            <div className="frontSide">
                <p className="title">Fund any Campaign</p>
                <p>Hover Me</p>
            </div>
            <div className="backSide">
                <p className="title">1. Go to funds. <br/>2. Connect your metamask account. <br/>3. Click any one of the campaign from all Campaigns. <br/>4. Enter the amount and click the fund campaign button.</p>
                <p>Leave Me</p>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
