import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home';
import Navigation from './Component/Navigation';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import About from './Component/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
