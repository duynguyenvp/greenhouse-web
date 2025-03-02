import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';
import MainLayout from '../layouts/main/MainLayout/MainLayout';
import RequireAuth from './RequireAuth';
import { withLoading } from '../../hocs/withLoading.hoc';

const AuthLayout = React.lazy(() => import('../../components/layouts/AuthLayout/AuthLayout'));
const HomePage = React.lazy(() => import('../../pages/home'));
const DevicesPage = React.lazy(() => import('../../pages/devices'));
const SensorsPage = React.lazy(() => import('../../pages/sensors'));
const ServerErrorPage = React.lazy(() => import('../../pages/ServerErrorPage'));
const Error404Page = React.lazy(() => import('../../pages/Error404Page'));

export const NFT_DASHBOARD_PATH = '/';

const Home = withLoading(HomePage);
const Devicess = withLoading(DevicesPage);
const Sensors = withLoading(SensorsPage);

const ServerError = withLoading(ServerErrorPage);
const Error404 = withLoading(Error404Page);

const AuthLayoutFallback = withLoading(AuthLayout);

export const AppRouter = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={protectedLayout}>
          <Route path="" element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="devices" element={<Devicess />} />
          <Route path="sensors" element={<Sensors />} />
          <Route path="server-error" element={<ServerError />} />
          <Route path="404" element={<Error404 />} />
        </Route>
        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
