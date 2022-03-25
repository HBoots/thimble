import { Medallion } from '../models/UserSettings';

import TargetLogoHit from '../assets/images/target-logo-hit.svg';
import TargetLogoMiss from '../assets/images/target-logo-miss.svg';
import CrosshairsHit from '../assets/images/crosshairs-hit.png';
import CrosshairsMiss from '../assets/images/crosshairs-miss.png';
import CrosshairsPanel from '../assets/images/crosshairs-panel.png';

import DotHit from '../assets/images/letter_D.png';
import DotMiss from '../assets/images/letter_D.png';

export enum MedallionEnum {
   TARGET = 'target',
   CROSSHAIRS = 'crosshairs',
   DOT = 'dot',
}

export const medallions: Medallion[] = [
   {
      name: MedallionEnum.TARGET,
      images: {
         hit: TargetLogoHit,
         miss: TargetLogoMiss,
         panel: TargetLogoHit,
      },
   },
   {
      name: MedallionEnum.CROSSHAIRS,
      images: {
         hit: CrosshairsHit,
         miss: CrosshairsMiss,
         panel: CrosshairsPanel,
      },
   },
   {
      name: MedallionEnum.DOT,
      images: {
         hit: DotHit,
         miss: DotMiss,
         panel: DotHit,
      },
   },
];
