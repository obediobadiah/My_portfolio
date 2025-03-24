import React from 'react';
import Layout from './Components/layout/Layout';
import Hero from './Components/sections/Hero';
import Experience from './Components/sections/Experience';
import Projects from './Components/sections/Projects';
import Contact from './Components/sections/Contact';
import AboutSkillsSection from './Components/sections/AboutSkillsSection';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSkillsSection />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
