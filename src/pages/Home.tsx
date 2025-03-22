import React, { useEffect, useState } from "react";
import LandingSection from "../components/LandingSection/LandingSection";
import MainSection from "../components/MainSection/MainSection";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showNavBar, setShowNavBar] = useState(false);

  const handleScroll = () => {
    const landingSectionHeight =
      document.getElementById("landing-section")?.offsetHeight || 0;
    setScrollY(window.scrollY);

    if (window.scrollY >= landingSectionHeight) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div id="landing-section">
        <LandingSection />
      </div>
      <div>
        <MainSection />
      </div>

      {showNavBar && <NavBar />}
    </div>
  );
};

export default Home;
