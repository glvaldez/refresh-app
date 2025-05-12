import React from 'react';
import '../../styles/hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Where good ideas find you</h1>
        <p>Read and share new perspectives on just about any topic. Everyone's welcome.</p>
        <button className="start-reading-btn">Start Reading</button>
      </div>
    </section>
  );
};

export default Hero;