import React from 'react';
import { HomeLinkSection } from '../../components/HomeLinkSection';

import styles from './style.module.css';

export const TransitionTestingPage: React.FC = () => {
   return (
      <>
         <HomeLinkSection />
         <div className={styles.transitionTestingPage}>
            <div> TRANSITION TESTING:</div>
            <div className={styles.stretchBox}>stretch me on hover</div>
            <div className={styles.rotation}>rotate me on hover</div>
         </div>
      </>
   );
};
