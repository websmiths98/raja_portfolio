import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
import Services from './components/Services';
import Summary from './components/Summary';
import DetailedExperience from './components/DetailedExperience';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero />
      <TechStrip />
      <Services />
      <Summary />
      <DetailedExperience />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <footer className="theme-coffee" style={{ padding: '2rem 0', textAlign: 'center', fontSize: '0.875rem' }} id="contact">
        <div className="container">
          <p>© {new Date().getFullYear()} RAJA V. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <a href="mailto:rajavofficialline@gmail.com">rajavofficialline@gmail.com</a>
            <a href="https://linkedin.com/in/raja-v-1a93b51b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
