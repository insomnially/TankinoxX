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
import ItemPage from './ProductsDivs/ItemPage';
import './HeaderAndMain/i18n';
import EngineeringPage from './ServicesDivs/EngineeringPage';
import EquipmentPage from './ServicesDivs/EquipmentPage';
import ThermalPage from './ServicesDivs/ThermalPage';
import CuttingPage from './ServicesDivs/CuttingPage';
import WeldingPage from './ServicesDivs/WeldingPage'

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
          {/* Main Divs */}
          <Route path="/TankinoxX" element={<MainPage />} />
          <Route path="/TankinoxX/about" element={<About />} />
          <Route path="/TankinoxX/technologies" element={<Technologies />} />
          <Route path="/TankinoxX/products" element={<Products />} />
          <Route path="/TankinoxX/services" element={<Services />} />
          <Route path="/TankinoxX/careers" element={<Careers />} />
          <Route path="/TankinoxX/contacts" element={<Contacts />} />
          {/* Products */}
          <Route path="/TankinoxX/products/overview" element={<Products />} />
          <Route path="/TankinoxX/products/item/:id" element={<ItemPage />} />
          {/* Services */}
          <Route path="/TankinoxX/services" element={<Services />} />
          <Route path="/TankinoxX/services/engineering" element={<EngineeringPage />} />
          <Route path="/TankinoxX/services/equipment" element={<EquipmentPage />} />
          <Route path="/TankinoxX/services/thermal" element={<ThermalPage />} />
          <Route path="/TankinoxX/services/cutting-and-stamping" element={<CuttingPage />} />
          <Route path="/TankinoxX/services/welding" element={<WeldingPage />} />
        </Routes>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <AppContent />
    </Router>
  );
}
