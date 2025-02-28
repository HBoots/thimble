import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const HomePage: React.FC = () => {
   return (
      <div className={styles.homePageViewHeight}>
         <div className={styles.homePage}>
            <div className={styles.welcome}>Welcome to THIMBLE</div>
            <nav className={styles.navButton}>
               <Link to="/typingPage" className={styles.linkInHome}>
                  start training
               </Link>
            </nav>
         </div>
      </div>
   );
};
