import React, { useState } from 'react';
// import { colors } from '../../../../helpers/jsColors'; //save

import TargetLogoHit from '../../../../assets/images/target-logo-hit.svg';
import TargetLogoMiss from '../../../../assets/images/target-logo-miss.svg';
import classNames from 'classnames';
import styles from './style.module.css';
import { MiniBoxProps, WholeKeyProps } from '../../../../models/WholeKey';

// this file, and especially CSS file, assume 3x3=9 miniBoxes in each wholeKey

const MiniBox: React.FC<MiniBoxProps> = ({
   bullseyeCounter,
   setBullseyeCounter,
   letter,
   keyCounter,
   keyboardCounter,
   miniBoxId,
   gradientRecord,
   setGradientRecord,
   isEasy,
}) => {
   // const numMinisToShow = 3; // save
   // const [miniCounter, setMiniCounter] = useState(0); //save

   const peripheralColumnsMinis = [0, 3, 6, 2, 5, 8];
   const centralColumnMinis = [1, 4, 7];
   const peripheralRowsMinis = [0, 1, 2, 6, 7, 8];
   const centralRowMinis = [3, 4, 5];

   const numTargetsToShow = 2;
   const [isClicked, setIsClicked] = useState(false);
   const [keyBoardCounterSnapshot, setKeyboardCounterSnapshot] = useState(0);

   return (
      <div
         // prettier-ignore
         // uncomment style={{... for width testing. CAREFUL, prettier ignore should NOT apply to className block
         // style={{backgroundColor: `#${((miniBoxId + 1) * 3) % 10}${((miniBoxId + 1) * 5) % 10}${((miniBoxId + 1) * 7) % 10}`,}}
         className={classNames(
            styles.miniBox,
            { [styles.miniBoxEasyCentral]: isEasy },
            {
               [styles.miniBoxEasyPeripheralWidth]:
                  isEasy && peripheralColumnsMinis.includes(miniBoxId),
            },
            {
               [styles.miniBoxEasyPeripheralHeight]:
                  isEasy && peripheralRowsMinis.includes(miniBoxId),
            },

            { [styles.miniBoxHardCentral]: !isEasy },
            {
               [styles.miniBoxHardPeripheralWidth]:
                  !isEasy && peripheralColumnsMinis.includes(miniBoxId),
            },
            {
               [styles.miniBoxHardPeripheralHeight]:
                  !isEasy && peripheralRowsMinis.includes(miniBoxId),
            },
         )}
         onClick={() => {
            setIsClicked(true);
            setKeyboardCounterSnapshot(keyboardCounter);
            setGradientRecord(() => {
               gradientRecord[miniBoxId] = gradientRecord[miniBoxId] + 1;
               return gradientRecord;
            });
            miniBoxId === 4 && setBullseyeCounter(bullseyeCounter + 1);
            // setMiniCounter(keyCounter); //save
         }}
         // SAVE BELOW:  This sets the colors for my follow-the-leader purple:
         // style={{backgroundColor: isClicked && keyCounter === miniCounter + 1? colors.purpleFeedback : isClicked && keyCounter - (miniCounter + 1) < numMinisToShow? colors.purpleFaded:'inherit'}}
      >
         {isClicked &&
            keyboardCounter - numTargetsToShow <= keyBoardCounterSnapshot && (
               <img
                  src={miniBoxId === 4 ? TargetLogoHit : TargetLogoMiss}
                  alt="target logo"
                  //temp:
                  className={classNames(styles.temptarget, {
                     // [brackets] are necessary because this is an object key
                     [styles.targetTrace]:
                        keyboardCounter - 1 !== keyBoardCounterSnapshot,
                  })}

                  // className={classNames(
                  //    styles.target,
                  //    {
                  //       [styles.targetTrace]:
                  //          keyboardCounter - 1 !== keyBoardCounterSnapshot,
                  //    },
                  //    {
                  //       [styles.targetCentralWidth]:
                  //          isEasy && centralColumnMinis.includes(miniBoxId),
                  //    },
                  //    {
                  //       [styles.targetPeripheralWidth]:
                  //          isEasy && peripheralColumnsMinis.includes(miniBoxId),
                  //    },
                  //    { [styles.targetSpacebar]: !isEasy && letter === ' ' },
                  //    {
                  //       [styles.targetSpacebarCentralWidth]:
                  //          isEasy &&
                  //          letter === ' ' &&
                  //          centralColumnMinis.includes(miniBoxId),
                  //    },
                  //    {
                  //       [styles.targetSpacebarPeripheralWidth]:
                  //          isEasy &&
                  //          letter === ' ' &&
                  //          peripheralColumnsMinis.includes(miniBoxId),
                  //    },
                  //    // [brackets] are necessary because this is an object key
                  // )}
               />
            )}
      </div>
   );
};

export const WholeKey: React.FC<WholeKeyProps> = ({
   bullseyeCounter,
   setBullseyeCounter,
   letter,
   keyboardCounter,
   typedSentence,
   setTypedSentence,
   isEasy,
}) => {
   const maxSentenceLength = 100;
   const miniBoxIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
   const [keyCounter, setKeyCounter] = useState(0);
   const [gradientRecord, setGradientRecord] = useState([
      0, 0, 0, 0, 0, 0, 0, 0, 0,
   ]);

   const mostPresses = Math.max(...gradientRecord);
   const mostPressedMiniBox = gradientRecord.indexOf(mostPresses);
   const directions = [
      'toLeftTop',
      'toTop',
      'toRightTop',
      'toLeft',
      'noGradient',
      'toRight',
      'toLeftBottom',
      'toBottom',
      'toRightBottom',
   ];

   const buildSentence = () => {
      let localSentence = typedSentence;
      if (localSentence.length >= maxSentenceLength) {
         localSentence = localSentence.substring(1);
      }
      return localSentence + letter;
   };

   return (
      <div
         className={classNames(styles.wholeKey, {
            [styles.wholeKeySpacebar]: letter === ' ',
         })}
         onClick={() => {
            setKeyCounter(keyCounter + 1);
            setTypedSentence(buildSentence());
         }}
      >
         {miniBoxIds.map((miniBoxId) => (
            <MiniBox
               key={miniBoxId}
               bullseyeCounter={bullseyeCounter}
               setBullseyeCounter={setBullseyeCounter}
               miniBoxId={miniBoxId}
               letter={letter}
               keyCounter={keyCounter}
               keyboardCounter={keyboardCounter}
               gradientRecord={gradientRecord}
               setGradientRecord={setGradientRecord}
               isEasy={isEasy}
            />
         ))}
         <div
            className={classNames(
               styles.shownKey,
               styles[directions[mostPressedMiniBox]],
               { [styles.noGradient]: mostPresses === 0 },
            )}
         >
            <div className={styles.letter}>{letter}</div>
         </div>
      </div>
   );
};
