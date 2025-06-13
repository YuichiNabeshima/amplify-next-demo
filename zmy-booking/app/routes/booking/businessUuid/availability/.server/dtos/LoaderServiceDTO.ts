import type { CustomerKind } from '@/src/types/enums/CustomerKind';

export interface LoaderServiceArgsDTO {
  businessUuid: string;
  customerKind: CustomerKind;
  courseId: number;
  date: Date;
}

export interface LoaderServiceResultDTO {
  avaliability: {
    [time: string]: number;
  };
}
