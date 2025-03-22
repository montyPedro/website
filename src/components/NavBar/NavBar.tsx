import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home'); // Tracks which section is active
  const [indicatorPosition, setIndicatorPosition] = useState(0); // Position of the scroll indicator

  const sections = ['home', 'projects', 'blog', 'contact']; // Sections we want to track

  useEffect(() => {
    // Set up Intersection Observer to detect which section is in the viewport
    const sectionElements = sections.map((section) => document.getElementById(section));
    const options = {
      root: null, // Use viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section based on intersection
        }
      });
    }, options);

    // Observe all sections
    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Clean up observer on component unmount
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const totalHeight = document.body.scrollHeight;
    const indicatorPos = (currentScroll / totalHeight) * 100;
    setIndicatorPosition(indicatorPos); // Update the position of the indicator
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.sidebar}>
      {/* Ball Indicator next to each link */}
      <div
        className={styles.indicator}
        style={{
          top: `${indicatorPosition}%`, // Align the ball based on scroll position
        }}
      ></div>

      {/* Sidebar Links */}
      <ul className={styles.navList}>
        {sections.map((section) => (
          <li
            key={section}
            className={`${styles.navItem} ${activeSection === section ? styles.active : ''}`}
          >
            <div className={styles.navLinkContainer}>
              {/* Ball Indicator */}
              <div
                className={`${styles.ballIndicator} ${activeSection === section ? styles.activeBall : ''}`}
              ></div>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className={styles.navLink}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
  