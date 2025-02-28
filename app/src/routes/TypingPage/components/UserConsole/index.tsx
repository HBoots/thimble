import React from 'react';

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
}> = ({
   bullseyeCounter,
   keyboardCounter,
   numResets,
   setNumResets,
   isEasy,
   setIsEasy,
}) => {
   return (
      <div className={styles.panel}>
         <Score
            bullseyeCounter={bullseyeCounter}
            keyboardCounter={keyboardCounter}
         />
         <div className={styles.score} onClick={() => setIsEasy(!isEasy)}>
            {isEasy ? 'easy' : 'hard'}
         </div>
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
}> = ({
   bullseyeCounter,
   keyboardCounter,
   numResets,
   setNumResets,
   typedSentence,
   isEasy,
   setIsEasy,
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
         />
      </div>
   );
};
