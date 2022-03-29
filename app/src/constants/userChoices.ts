import { Medallion } from '../models/UserSettings';

import TargetLogoHit from '../assets/images/target-hit-x9-2000.png';
import TargetLogoMiss from '../assets/images/target-miss-x9-2000.png';
import TargetLogoPanel from '../assets/images/target-hit-x1.png';
import CrosshairsHit from '../assets/images/crosshairs-circle-hit.png';
import CrosshairsMiss from '../assets/images/crosshairs-circle-miss.png';
import CrosshairsPanel from '../assets/images/crosshairs-panel.png';
import DotHit from '../assets/images/dot-hit-x6-2000.png';
import DotMiss from '../assets/images/dot-miss-x6-2000.png';
import DotPanel from '../assets/images/dot-hit-x1.png';

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
         panel: TargetLogoPanel,
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
         panel: DotPanel,
      },
   },
];
