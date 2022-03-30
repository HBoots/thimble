import React, { useEffect } from 'react';
import { SampleSection } from './components/SampleSection';
import { HomeLinkSection } from '../../components/HomeLinkSection';
import { KeyboardAndConsoleLogicWrap } from './components/KeyboardAndConsoleLogicWrap';

import styles from './style.module.css';

export const TypingPage: React.FC = () => {
   // grok innerHeight so phone's nav bars and scroll bars don't affect proper screen height
   const resetJumpVh = () => {
      let jumpVh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--jump-vh', `${jumpVh}px`);
   };

   window.addEventListener('resize', () => {
      resetJumpVh();
   });

   useEffect(() => {
      resetJumpVh();
   });

   return (
      <div className={styles.typingPageViewHeight}>
         <div className={styles.typingPage}>
            <HomeLinkSection />
            <SampleSection />
            <KeyboardAndConsoleLogicWrap />
         </div>
      </div>
   );
};
