import type { BookingStatus } from '@/src/types/enums/BookingStatus';
import type { Time } from '@/src/types/Time';

export interface Booking {
  id: number;
  status: BookingStatus;
  name: string;
  email: string;
  startTime: Time;
  endTime: Time;
  numberOfguests: number;
  courseLabel: string;
  customerKind: string;
  note?: string;
}
