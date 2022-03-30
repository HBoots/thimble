import React from 'react';
import { HomeLinkSection } from '../../components/HomeLinkSection';
import { medallions } from '../../constants/userChoices';

import styles from './style.module.css';

export const TransitionTestingPage: React.FC = () => {
   return (
      <>
         <HomeLinkSection />
         <div className={styles.transitionTestingPage}>
            <div> TRANSITION TESTING:</div>
            <div className={styles.stretch}>stretch me on hover</div>
            <div className={styles.rotation}>rotate me on hover</div>
            <div className={styles.scale}>scale me on hover</div>
            <div className={styles.parent}>
               <div>parent</div>
               <div className={styles.child}>child</div>
            </div>
            {/* The "label" hack:  https://www.delftstack.com/howto/css/css-onclick/ */}
            <div>
               <input type="checkbox" id="btn" />
               <label htmlFor="btn">
                  <img
                     src={medallions[0].images.panel}
                     alt="success medallion"
                     // width={20}
                  />
               </label>
            </div>
            <div>
               <label htmlFor="toggle">Toggle</label>
               <input
                  type="checkbox"
                  id="toggle"
                  className={styles.visuallyHidden}
               />
               <div className={styles.controlMe}></div>
            </div>
         </div>
      </>
   );
};
