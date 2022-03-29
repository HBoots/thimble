import { Medallion } from './UserSettings';

export interface PanelProps {
   bullseyeCounter: number;
   keyboardCounter: number;
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
   isEasy: boolean;
   setIsEasy: React.Dispatch<React.SetStateAction<boolean>>;
   medallion: Medallion;
   setMedallion: React.Dispatch<React.SetStateAction<Medallion>>;
}

export interface UserConsoleProps {
   bullseyeCounter: number;
   keyboardCounter: number;
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
   typedSentence: string;
   isEasy: boolean;
   setIsEasy: React.Dispatch<React.SetStateAction<boolean>>;
   medallion: Medallion;
   setMedallion: React.Dispatch<React.SetStateAction<Medallion>>;
}
