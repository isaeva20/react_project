import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../../pages/main_page/MainPage';
import ServicePage from '../../pages/service_page/ServicePage';
import ServiceDetailPage from '../../pages/services_page/ServiceDetailPage';
import MainLayout from '../../main_layout/MainLayout';
import {Responses404} from '@consta/uikit/Responses404'
import AuthPage from '../../pages/auth_page/AuthPage';
import ProfilePage from '../../pages/profile_page/ProfilePage';
import { AppRoute } from '../../const';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? children : <Navigate to="/auth" />;
};

const App = function () {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={AppRoute.serviceDetails} element={<ServiceDetailPage />} />
            <Route path={AppRoute.auth} element={<AuthPage />} />
            <Route path={AppRoute.user} element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
          </Route>
          <Route path="*" element={<Responses404 />} />
        </Routes>
      </BrowserRouter>


    </Theme >
  );
}

export default App;