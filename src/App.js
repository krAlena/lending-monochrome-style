import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.sass';
import Footer from './Components/Footer/Footer';
import CTA from './Components/CTA/CTA';
import AboutUs from './Components/AboutUs/AboutUs';
import { ABOUT_US, CTA_PAGE } from './Constants/routes';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HowItWorks from './Components/HowItWorks/HowItWorks';

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app theme--${theme}`}>
        {/* Set up BrowserRouter for routing */}
        <Navbar/>
        {/* <BrowserRouter>
          <Routes>
            <Route path={CTA_PAGE} element={<CTA/>}/>
            <Route path={ABOUT_US} element={<AboutUs/>}/>
          </Routes>
        </BrowserRouter> */}
        {/* <button onClick={() => handleThemeChange('light')}>Theme 1 (light)</button>
        <button onClick={() => handleThemeChange('dark')}>Theme 2 (dark)</button> */}

        <CTA/>
        <AboutUs/>
        <HowItWorks/>
        <Footer/>
    </div>
  );
}

export default App;
