import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import Projects from './components/project/project';
import ThankYou from './components/ThankYou/ThankYou';
import './styles/globals.css';
import './App.css';

function App() {
    return (
    <div className="App">
      <Navigation />
      <Hero />
      <Intro />
      <Projects />
      <ThankYou />
    </div>
  );
}

export default App;
