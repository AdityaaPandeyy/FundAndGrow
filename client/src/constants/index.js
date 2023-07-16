import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
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