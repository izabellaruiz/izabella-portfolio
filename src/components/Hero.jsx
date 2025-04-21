import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="floating-text">designer ✦ creative ✦ storyteller ✦</div>
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m Izabella Ruiz</h1>
        <p className="hero-subtitle">✦ Digital designer blending art & code ✦</p>
        <span className="scroll-indicator">↓</span>
      </div>
    </section>
  );
};

export default Hero;
