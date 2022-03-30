import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const HomePage: React.FC = () => {
   return (
      <div className={styles.homePageViewHeight}>
         <div className={styles.homePage}>
            <div className={styles.welcome}>Welcome to THIMBLE</div>
            <nav className={styles.navSection}>
               <Link to="/transitionTestingPage" className={styles.linkInHome}>
                  What is <br></br> Thimble?
               </Link>
               <Link to="/typingPage" className={styles.linkInHome}>
                  Start <br></br> Training
               </Link>
            </nav>
         </div>
      </div>
   );
};
