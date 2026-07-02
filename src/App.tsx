import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Make sure styles are loaded

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
