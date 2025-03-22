import React from 'react';
import styles from './MainSection.module.css';

const MainSection = () => {
  return (
    <section id="main" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Welcome to My Portfolio</h2>
        <p className={styles.description}>Here you'll find my projects, blog posts, and more.</p>
      </div>
    </section>
  );
};

export default MainSection;
