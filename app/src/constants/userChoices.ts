import { Medallion } from '../models/UserSettings';

import TargetLogoHit from '../assets/images/target-logo-hit.svg';
import TargetLogoMiss from '../assets/images/target-logo-miss.svg';
import CrosshairsHit from '../assets/images/crosshairs-hit.png';
import CrosshairsMiss from '../assets/images/crosshairs-miss.png';
import DotHit from '../assets/images/letter_D.png';
import DotMiss from '../assets/images/letter_D.png';

export const medallions: Medallion[] = [
   {
      name: 'target',
      images: {
         hit: TargetLogoHit,
         miss: TargetLogoMiss,
         panel: TargetLogoHit,
      },
   },
   {
      name: 'crosshairs',
      images: {
         hit: CrosshairsHit,
         miss: CrosshairsMiss,
         panel: CrosshairsHit,
      },
   },
   {
      name: 'dot',
      images: {
         hit: DotHit,
         miss: DotMiss,
         panel: DotHit,
      },
   },
];
