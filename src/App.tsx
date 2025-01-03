import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage'; 
import TermsPage from './pages/TermsPage'; 
import PrivacyPage from './pages/PrivacyPage';
import MoreInfo from './pages/moreinformation';
import ModuleDetail from './components/modulo.detail';
import Pricing from './pages/Pricing';
import Contact from './pages/contact';
import Checkout from './pages/checkout';
const App = () => {
  return (
    <Routes> {/* Define tus rutas aquí */}
      <Route path="/" element={<HomePage />} /> 
      <Route path="/terms" element={<TermsPage />} /> 
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/mas-info" element={<MoreInfo/>} /> 
      <Route path="/modulo/:moduleId" element={<ModuleDetail />} />
      <Route path="/pricing" element={<Pricing/>} /> 
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/checkout" element={<Checkout/>} /> 
    </Routes>
  );
};

export default App;
