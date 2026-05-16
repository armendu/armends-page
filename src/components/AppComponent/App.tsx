import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../HeaderComponent/Header';
import Hero from '../HeroComponent/Hero';
import Experience from '../ExperienceComponent/Experience';
import Skills from '../SkillsComponent/Skills';
import Education from '../EducationComponent/Education';
import Footer from '../FooterComponent/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="app">
      <Header isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default App;
