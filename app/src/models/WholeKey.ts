import { Medallion } from './UserSettings';

export interface MiniBoxProps {
   bullseyeCounter: number;
   setBullseyeCounter: React.Dispatch<React.SetStateAction<number>>;
   letter: string;
   // keyCounter: number;
   miniBoxId: number;
   keyboardCounter: number;
   gradientRecord: number[];
   setGradientRecord: React.Dispatch<React.SetStateAction<number[]>>;
   isEasy: boolean;
   medallion: Medallion;
}

export interface WholeKeyProps {
   bullseyeCounter: number;
   setBullseyeCounter: React.Dispatch<React.SetStateAction<number>>;
   letter: string;
   keyboardCounter: number;
   setKeyboardCounter: React.Dispatch<React.SetStateAction<number>>;
   typedSentence: string;
   setTypedSentence: React.Dispatch<React.SetStateAction<string>>;
   isEasy: boolean;
   medallion: Medallion;
   isUpperCase: boolean;
   setIsUpperCase: React.Dispatch<React.SetStateAction<boolean>>;
}
