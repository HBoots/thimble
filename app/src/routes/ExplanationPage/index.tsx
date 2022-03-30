import React from 'react';
import { HomeLinkSection } from '../../components/HomeLinkSection';

import styles from './style.module.css';

export const ExplanationPage: React.FC = () => {
   return (
      <>
         <HomeLinkSection />
         <div className={styles.explanationPage}>
            What IS Thimble, anyway?? Thimble is not about typing the correct
            letter. In fact, Thimble doesn't even know if you've typed the
            correct letter. But Thimble is very opinionated about WHERE, within
            the key, your finger touched the screen.
         </div>
      </>
   );
};
