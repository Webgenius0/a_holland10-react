


import Layout from '@/layout/Layout';
import Home from '@/pages/main/Home';
import FaqPage from '@/pages/main/FaqPage';
import Contact from '@/pages/Contact';
import AuthLayout from '@/layout/AuthLayout';
import Login from '@/pages/auth/Login';
import SignUp from '@/pages/auth/SignUp';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import VerifyEmail from '@/pages/auth/VerifyEmail';
import DashboardLayout from '@/layout/DashboardLayout';
import Dashboard from '@/pages/dashboard/Dashboard';
import TeamBuilder from '@/pages/dashboard/TeamBuilder';
import StallionsList from '@/pages/dashboard/StallionsList';
import Settings from '@/pages/dashboard/Settings';
import Gameweeks from '@/pages/dashboard/Gameweeks';
import Leaderboards from '@/pages/dashboard/Leaderboards';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/faq',
        element: <FaqPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/verify-email',
    element: <VerifyEmail />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/team-builder',
        element: <TeamBuilder />,
      },
      {
        path: '/dashboard/stallions',
        element: <StallionsList />,
      },
      {
        path: '/dashboard/settings',
        element: <Settings />,
      },
      {
        path: '/dashboard/gameweeks',
        element: <Gameweeks />,
      },
      {
        path: '/dashboard/leaderboards',
        element: <Leaderboards />,
      },
      {
        path: '/dashboard/leaderboards/private',
        element: <Leaderboards />,
      },
    ],
  },
]);

export default router;
