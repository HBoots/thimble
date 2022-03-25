import React, { useState } from 'react';
import { medallions } from '../../../../constants/userChoices';
import { Medallion } from '../../../../models/UserSettings';
import { KeyboardDisplay } from '../KeyboardDisplay';
import { UserConsole } from '../UserConsole';

import styles from './style.module.css';

export const KeyboardAndConsoleSection: React.FC<{
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
}> = ({ numResets, setNumResets }) => {
   const [keyboardCounter, setKeyboardCounter] = useState(0);
   const [bullseyeCounter, setBullseyeCounter] = useState(0);
   const [typedSentence, setTypedSentence] = useState('');
   const [isEasy, setIsEasy] = useState(true);
   const [medallion, setMedallion] = useState<Medallion>(medallions[0]);

   return (
      <div className={styles.keyboardAndConsoleSection}>
         <UserConsole
            bullseyeCounter={bullseyeCounter}
            keyboardCounter={keyboardCounter}
            numResets={numResets}
            setNumResets={setNumResets}
            typedSentence={typedSentence}
            isEasy={isEasy}
            setIsEasy={setIsEasy}
            medallion={medallion}
            setMedallion={setMedallion}
         />
         <KeyboardDisplay
            bullseyeCounter={bullseyeCounter}
            setBullseyeCounter={setBullseyeCounter}
            keyboardCounter={keyboardCounter}
            setKeyboardCounter={setKeyboardCounter}
            typedSentence={typedSentence}
            setTypedSentence={setTypedSentence}
            isEasy={isEasy}
            medallion={medallion}
         />
      </div>
   );
};
