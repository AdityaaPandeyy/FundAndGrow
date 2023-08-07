import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/fund',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/fund/create-campaign',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/fund/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
  },
];

const mainnavlinks = [
  {
    name: 'StartupChain',
    link: "/",
  },
  {
    name: 'Fund',
    link: "/fund",
  },
  {
    name: 'How to Use',
    link: "/how-to-use",
  },
  {
    name: 'Why Us',
    link: "/why-us",
  },
  {
    name: 'Contact Us',
    link: "/contact-us",
  },
];

export {navlinks,mainnavlinks};