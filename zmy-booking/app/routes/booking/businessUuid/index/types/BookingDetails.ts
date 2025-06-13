import type { CustomerKind } from '@/src/types/enums/CustomerKind';
import type { Time } from '@/src/types/Time';

export interface BookingDetails {
  numberOfGuests: number;
  customerKind: CustomerKind;
  courseId: number;
  date: Date;
  time: Time;
}
