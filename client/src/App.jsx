import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignDetails from "./pages/CampaignDetails";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainHome from './pages/MainHome';
import HowToUse from './pages/HowToUse';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import WhyUs from './pages/WhyUs';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 gradient min-h-screen flex flex-row">
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/fund" element={<Home />} />
          <Route path="/fund/profile" element={<Profile />} />
          <Route path="/fund/create-campaign" element={<CreateCampaign />} />
          <Route path="/fund/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
    </div>
  )
}

export default App