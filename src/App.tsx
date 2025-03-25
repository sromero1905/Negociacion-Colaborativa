import React from 'react';
import { Routes, Route,Navigate } from 'react-router-dom'; 

//venta
import HomePage from './pages/HomePage'; 
import TermsPage from './pages/TermsPage'; 
import PrivacyPage from './pages/PrivacyPage';
import MoreInfo from './pages/moreinformation';
import ModuleDetail from './components/modulo.detail';
import Pricing from './pages/Pricing';
import Contact from './pages/contact';

//elearning
import LoginPage from './pages/loginPage';
import HomePageElearning from './pages/HomePagelearning';
import HelpPage from './pages/HelpPage';
import ConfigurationPage from './pages/ConfigurationPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/PrivateRoute';


const App = () => {
  return (
    <Routes> 
      {/* venta */}
      <Route path="/" element={<HomePage />} /> 
      <Route path="/terms" element={<TermsPage />} /> 
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/mas-info" element={<MoreInfo/>} /> 
      <Route path="/modulo/:moduleId" element={<ModuleDetail />} />
      <Route path="/pricing" element={<Pricing/>} /> 
      <Route path="/contact" element={<Contact/>} />
    



        {/* elearning */}
        <Route path="/elearning" element={<LoginPage />} />
      <Route path="/home/elearning/:id" element={
        <ProtectedRoute>
          <HomePageElearning />
        </ProtectedRoute>
      } />
      <Route path="/help" element={
        <ProtectedRoute>
          <HelpPage />
        </ProtectedRoute>
      } />
      <Route path="/configuration" element={
        <ProtectedRoute>
          <ConfigurationPage />
        </ProtectedRoute>
      } />
      <Route path="/my-profile" element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      } />
      
      {/* Ruta de fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
};

export default App;
