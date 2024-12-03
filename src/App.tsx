import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route para el enrutamiento
import HomePage from './pages/HomePage'; // Ruta al componente HomePage
import TermsPage from './pages/TermsPage'; // Ruta al componente TermsPage
import PrivacyPage from './pages/PrivacyPage'; // Ruta al componente PrivacyPage

const App = () => {
  return (
    <Routes> {/* Define tus rutas aquí */}
      <Route path="/" element={<HomePage />} /> {/* Ruta para la página de inicio */}
      <Route path="/terms" element={<TermsPage />} /> {/* Ruta para la página de términos */}
      <Route path="/privacy" element={<PrivacyPage />} /> {/* Ruta para la página de privacidad */}
      {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
};

export default App;
