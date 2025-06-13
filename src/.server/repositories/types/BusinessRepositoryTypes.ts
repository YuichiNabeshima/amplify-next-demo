import type { CuisineKind } from '@/src/types/enums/CuisineKind';
import type { Neighborhood } from '@/src/types/enums/Neighborhood';
import type { PriceLevel } from '@/src/types/PriceLabel';

export interface FilterCondition {
  cuisine?: CuisineKind[];
  price_level?: PriceLevel;
  neighborhood?: Neighborhood[];
}

export type FetchBusinessesArgs = FilterCondition & {
  take?: number;
  skip?: number;
};
