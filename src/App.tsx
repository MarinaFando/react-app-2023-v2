import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Notfoundpage from './pages/NotfoundPage/Notfoundpage';
import Header from './components/Header/Header';
import FormsLayout from './components/FormsLayout/FormsLayout';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormsLayout />} />
        <Route path="/404" element={<Notfoundpage />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
};

export default App;
