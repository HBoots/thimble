import { Medallion } from './UserSettings';

export interface KeyboardDisplayProps {
   bullseyeCounter: number;
   setBullseyeCounter: React.Dispatch<React.SetStateAction<number>>;
   keyboardCounter: number;
   setKeyboardCounter: React.Dispatch<React.SetStateAction<number>>;
   typedSentence: string;
   setTypedSentence: React.Dispatch<React.SetStateAction<string>>;
   isEasy: boolean;
   medallion: Medallion;
}
