import React from 'react';
import styles from './LandingSection.module.css';

const LandingSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Pedro</h1>
        <p className={styles.subtitle}>Data Enthusiast and other Stuff</p>
        <a href="#main" className={styles.scrollButton}>Scroll Down ↓</a>
      </div>
    </section>
  );
};

export default LandingSection;
