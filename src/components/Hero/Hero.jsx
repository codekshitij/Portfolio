import React from 'react';
import LightRays from '../LightRays/LightRays';
import useTimeGreeting from '../../hooks/useTimeGreeting';
import IntroCard from '../IntroCard/IntroCard';
import './Hero.css';

const Hero = () => {
  const timeGreeting = useTimeGreeting();

  return (
    <section className="hero">
      <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      
      <div className="hero-content">
        <div className="welcome-content">
          <div className="greeting-section">
            <div className="greeting-line">
              <div className="main-greeting">
                HELLO!
              </div>
              <div className="time-greeting">
                {timeGreeting}
              </div>
            </div>
          </div>

          <div className="info-section">
            <IntroCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 