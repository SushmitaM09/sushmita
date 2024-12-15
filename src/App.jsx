import React from 'react';
import './App.css';
import Home from './Component/Home';
import Navigation from './Component/Navigation';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import About from './Component/About';
import { ThemeProvider } from './Component/ThemeContext';

function App() {
  return (
    <div>
<ThemeProvider>

<Navigation/>
<Home/>
<Skills/>
<About/>
<Projects/>
<Contact/>
<Footer/>
</ThemeProvider>
</div>
  );
}

export default App;
