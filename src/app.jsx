import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './MainDivs/Preloader';
import { MainPage } from './Pages/MainPage';
import { About } from './Pages/AboutUs';
import { Technologies } from './Pages/Technologies';
import { Products } from './Pages/Products';
import { Services } from './Pages/Services';
import { Careers } from './Pages/Careers';
import { Contacts } from './Pages/Contacts';
import './HeaderAndMain/i18n';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/Tankinox" element={<MainPage />} />
          <Route path="/Tankinox/about" element={<About />} />
          <Route path="/Tankinox/technologies" element={<Technologies />} />
          <Route path="/Tankinox/products" element={<Products />} />
          <Route path="/Tankinox/services" element={<Services />} />
          <Route path="/Tankinox/careers" element={<Careers />} />
          <Route path="/Tankinox//contacts" element={<Contacts />} />
        </Routes>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
