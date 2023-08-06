import React from 'react';
import '../styles/styling.css';
import '../index.css';
import Header from '../pages/Header';

export default function WhyUs() {
  return (
    <div className="main-container">
      <Header />
      <div className="whyus">
        <div className="title1">
          <h2 style={{ color: "white" }}>Why Us?</h2>
        </div>
        <p className="para1">We at "StartupChain" understand that funding is one of the most important components for building a successful startup, and our goal is to provide ambitious entrepreneurs like you with the resources and help you realise your dreams. Our user-friendly platform links you with a global network of investors, venture capitalists, and angel investors willing to invest in potential ventures, whether you're a seasoned entrepreneur or a first-time founder. We protect the confidentiality and integrity of your fundraising journey by using cutting-edge blockchain technology, so you can focus on what matters most: establishing and growing your firm.</p>
        <p>Following are the benefits of using Blockchain: </p>
        <ul className="ab">
          <li>Decentralization: StartupFund operates on a decentralized network, connecting entrepreneurs directly with investors, eliminating intermediaries.</li>
          <li>Security and Transparency: With advanced blockchain cryptography, your fundraising process is secure, transparent, and tamper-proof, ensuring trust among all parties involved.</li>
          <li>Efficiency and Cost Savings: Real-time transactions on the blockchain streamline the fundraising process, reducing operational costs for both startups and investors.</li>
          <li>Traceability and Data Integrity: Blockchain's immutable ledger ensures accurate tracking of funds and maintains the integrity of transaction records.</li>
          <li>Inclusivity and Smart Contracts: StartupFund promotes financial inclusivity by enabling anyone to participate in fundraising, and smart contracts automate the execution of agreements, ensuring fair terms for all parties.</li>
        </ul>
      </div>
    </div>
  )
}
