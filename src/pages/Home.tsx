import React, { useEffect, useState } from 'react';
import LandingSection from '../components/LandingSection/LandingSection';
import MainSection from '../components/MainSection/MainSection';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity (you can tweak the denominator to control speed)
  const landingOpacity = Math.max(1 - scrollY / 300, 0);
  const mainOpacity = Math.min(scrollY / 300, 1);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0,
          opacity: landingOpacity,
          zIndex: 2,
          transition: 'opacity 0.1s ease-out',
        }}
      >
        <LandingSection />
      </div>

      <div
        style={{
          position: 'relative',
          top: '100vh',
          opacity: mainOpacity,
          transition: 'opacity 0.1s ease-out',
          zIndex: 1,
        }}
      >
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
