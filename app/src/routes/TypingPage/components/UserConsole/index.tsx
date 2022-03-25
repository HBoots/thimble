import React from 'react';
import { medallions } from '../../../../constants/userChoices';
import { Medallion } from '../../../../models/UserSettings';

import styles from './style.module.css';

const Score: React.FC<{ bullseyeCounter: number; keyboardCounter: number }> = ({
   bullseyeCounter,
   keyboardCounter,
}) => {
   return (
      <div>
         <span>score </span>
         <span className={styles.success}>{bullseyeCounter}</span>
         <span>{`/${keyboardCounter}`}</span>
      </div>
   );
};

const ChooseMedallion: React.FC<{
   medallion: Medallion;
   setMedallion: React.Dispatch<React.SetStateAction<Medallion>>;
}> = ({ medallion, setMedallion }) => {
   return (
      <div
         className={styles.score}
         onClick={() =>
            setMedallion(medallions[(medallions.indexOf(medallion) + 1) % 3])
         }
      >
         {medallion}
      </div>
   );
};

const ChooseEasy: React.FC<{
   isEasy: boolean;
   setIsEasy: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isEasy, setIsEasy }) => {
   return (
      <div className={styles.score} onClick={() => setIsEasy(!isEasy)}>
         {isEasy ? 'easy' : 'hard'}
      </div>
   );
};

const ResetButton: React.FC<{
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
}> = ({ numResets, setNumResets }) => {
   return (
      <div className={styles.reset} onClick={() => setNumResets(numResets + 1)}>
         reset
      </div>
   );
};

const UserSentence: React.FC<{ typedSentence: string }> = ({
   typedSentence,
}) => {
   return (
      <div className={styles.userSentence}>
         <div className={styles.central}>
            <div className={styles.farLeft}>{typedSentence}</div>
         </div>
      </div>
   );
};

const Panel: React.FC<{
   bullseyeCounter: number;
   keyboardCounter: number;
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
   isEasy: boolean;
   setIsEasy: React.Dispatch<React.SetStateAction<boolean>>;
   medallion: Medallion;
   setMedallion: React.Dispatch<React.SetStateAction<Medallion>>;
}> = ({
   bullseyeCounter,
   keyboardCounter,
   numResets,
   setNumResets,
   isEasy,
   setIsEasy,
   medallion,
   setMedallion,
}) => {
   return (
      <div className={styles.panel}>
         <Score
            bullseyeCounter={bullseyeCounter}
            keyboardCounter={keyboardCounter}
         />
         <ChooseEasy isEasy={isEasy} setIsEasy={setIsEasy} />
         <ChooseMedallion medallion={medallion} setMedallion={setMedallion} />
         <ResetButton numResets={numResets} setNumResets={setNumResets} />
      </div>
   );
};

export const UserConsole: React.FC<{
   bullseyeCounter: number;
   keyboardCounter: number;
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
   typedSentence: string;
   isEasy: boolean;
   setIsEasy: React.Dispatch<React.SetStateAction<boolean>>;
   medallion: Medallion;
   setMedallion: React.Dispatch<React.SetStateAction<Medallion>>;
}> = ({
   bullseyeCounter,
   keyboardCounter,
   numResets,
   setNumResets,
   typedSentence,
   isEasy,
   setIsEasy,
   medallion,
   setMedallion,
}) => {
   return (
      <div className={styles.userConsole}>
         <UserSentence typedSentence={typedSentence} />
         <Panel
            bullseyeCounter={bullseyeCounter}
            keyboardCounter={keyboardCounter}
            numResets={numResets}
            setNumResets={setNumResets}
            isEasy={isEasy}
            setIsEasy={setIsEasy}
            medallion={medallion}
            setMedallion={setMedallion}
         />
      </div>
   );
};
