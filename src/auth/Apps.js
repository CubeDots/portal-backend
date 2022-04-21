
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from 'react-auth-kit'



//import PrivateLayout from './layouts/PrivateLayout';
import AboutUsPage from "../pages/AboutUsPage";
import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFound";
import ProjectsPage from "../pages/ProjectsPage";
import WhyUsPage from "../pages/WhyUsPage";
import DashboardPage from "./Dashboard";
import SettingsPage from '../pages/SettingsPage';
//import NavBar from './common/NavBar';
//import PublicLayout from './layouts/PublicLayout';


import LoginPage from "./SignIn";

const App = () => (
    <AuthProvider authType = {'cookie'}
                  authName={'_cuauth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
        
        <BrowserRouter>
         
         
            <nav>
          <Link to="/home">Home</Link> {' '}
          <Link to="/about">About</Link> {' '}
          <Link to="/projects">projects</Link> {' '}
          <Link to="/whyus">why us</Link> {' '}
          <Link to="/login">Login</Link> {' '}
          <Link to="/dashboard">Dashboard</Link> {' '}
          <Link to="/app/settings">settings</Link> {' '}
        </nav>
            <Routes>
              {/* <Route path="/" element={<PublicLayout />}> */}
                {/* <Route index element={<HomePage />} /> */}
                <Route path="home" element={<HomePage />} />
                <Route path="about" element={<AboutUsPage />} />
                <Route path="whyus" element={<WhyUsPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="login" element={<LoginPage />} />
              {/* </Route> */}
              {/* <Route path="dashboard" element={<DashboardPage />} /> */}
              {/* <PrivateLayout path="/dashboard" element={<DashboardPage />} /> */}
              {/* <PrivateLayout path="/settings" element={<SettingsPage />} /> */}
              {/* <Route path="app" element={<PrivateLayout />}> */}
                {/* <Route index element={<DashboardPage />} /> */}
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="settings" element={<SettingsPage />} />

              {/* </Route> */}


              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        
        </BrowserRouter>

    </AuthProvider>
);

export default App;