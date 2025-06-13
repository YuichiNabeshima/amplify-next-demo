import type { CustomerKind } from '@/src/types/enums/CustomerKind';
import type { Time } from '@/src/types/Time';

import type { Success } from '../../types/Status';

export interface ActionServiceArgsDTO {
  fullName: string;
  email: string;
  businessUuid: string;
  date: Date;
  time: Time;
  courseId: number;
  customerKind: CustomerKind;
  numberOfguests: number;
}

export interface ActionServiceResultDTO {
  status: Success;
  mail?: {
    subject: string;
    body: string;
  };
}
