import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';
import Terms from './components/Terms';
import ThankYou from './components/ThankYou';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}
