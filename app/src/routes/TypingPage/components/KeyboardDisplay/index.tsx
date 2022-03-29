import React, { useState } from 'react';
import { Medallion } from '../../../../models/UserSettings';
import { WholeKey } from '../WholeKey';

import styles from './style.module.css';

export const KeyboardDisplay: React.FC<{
   bullseyeCounter: number;
   setBullseyeCounter: React.Dispatch<React.SetStateAction<number>>;
   keyboardCounter: number;
   setKeyboardCounter: React.Dispatch<React.SetStateAction<number>>;
   typedSentence: string;
   setTypedSentence: React.Dispatch<React.SetStateAction<string>>;
   isEasy: boolean;
   medallion: Medallion;
}> = ({
   bullseyeCounter,
   setBullseyeCounter,
   keyboardCounter,
   setKeyboardCounter,
   typedSentence,
   setTypedSentence,
   isEasy,
   medallion,
}) => {
   const lettersTop = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
   const lettersMiddle = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
   const lettersBottom = ["'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<<'];
   const spaceRow = ['^', ',', ' ', '.', '?'];
   const [isUpperCase, setIsUpperCase] = useState(false);

   return (
      <>
         <div
            className={styles.keyboardDisplay}
            // onClick={() => setKeyboardCounter(keyboardCounter + 1)}
         >
            <div className={styles.keyboardRow}>
               {lettersTop.map((letter) => (
                  <WholeKey
                     key={letter}
                     letter={letter}
                     keyboardCounter={keyboardCounter}
                     setKeyboardCounter={setKeyboardCounter}
                     bullseyeCounter={bullseyeCounter}
                     setBullseyeCounter={setBullseyeCounter}
                     typedSentence={typedSentence}
                     setTypedSentence={setTypedSentence}
                     isEasy={isEasy}
                     medallion={medallion}
                     isUpperCase={isUpperCase}
                     setIsUpperCase={setIsUpperCase}
                  />
               ))}
            </div>
            <div className={styles.keyboardRow}>
               {lettersMiddle.map((letter) => (
                  <WholeKey
                     key={letter}
                     letter={letter}
                     keyboardCounter={keyboardCounter}
                     setKeyboardCounter={setKeyboardCounter}
                     bullseyeCounter={bullseyeCounter}
                     setBullseyeCounter={setBullseyeCounter}
                     typedSentence={typedSentence}
                     setTypedSentence={setTypedSentence}
                     isEasy={isEasy}
                     medallion={medallion}
                     isUpperCase={isUpperCase}
                     setIsUpperCase={setIsUpperCase}
                  />
               ))}
            </div>
            <div className={styles.keyboardRow}>
               {lettersBottom.map((letter) => (
                  <WholeKey
                     key={letter}
                     letter={letter}
                     keyboardCounter={keyboardCounter}
                     setKeyboardCounter={setKeyboardCounter}
                     bullseyeCounter={bullseyeCounter}
                     setBullseyeCounter={setBullseyeCounter}
                     typedSentence={typedSentence}
                     setTypedSentence={setTypedSentence}
                     isEasy={isEasy}
                     medallion={medallion}
                     isUpperCase={isUpperCase}
                     setIsUpperCase={setIsUpperCase}
                  />
               ))}
            </div>
            <div className={styles.keyboardRow}>
               {spaceRow.map((letter) => (
                  <WholeKey
                     key={letter}
                     letter={letter}
                     keyboardCounter={keyboardCounter}
                     setKeyboardCounter={setKeyboardCounter}
                     bullseyeCounter={bullseyeCounter}
                     setBullseyeCounter={setBullseyeCounter}
                     typedSentence={typedSentence}
                     setTypedSentence={setTypedSentence}
                     isEasy={isEasy}
                     medallion={medallion}
                     isUpperCase={isUpperCase}
                     setIsUpperCase={setIsUpperCase}
                  />
               ))}
            </div>
         </div>
      </>
   );
};
