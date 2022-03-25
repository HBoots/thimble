export interface Medallion {
   name: string;
   images: MedallionImages;
}

interface MedallionImages {
   hit: string;
   miss: string;
   panel: string;
}
