import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.sass';
import Footer from './Components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`app theme--${theme}`}>

        {/* <button onClick={() => handleThemeChange('light')}>Theme 1 (light)</button>
        <button onClick={() => handleThemeChange('dark')}>Theme 2 (dark)</button> */}
        <Navbar>
        </Navbar>
        <Footer>
        </Footer>
    </div>
  );
}

export default App;
