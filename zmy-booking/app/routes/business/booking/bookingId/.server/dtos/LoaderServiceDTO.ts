import type { BookingStatus } from '@/src/types/enums/BookingStatus';
import type { CustomerKind } from '@/src/types/enums/CustomerKind';

export interface LoaderServiceArgsDTO {
  bookingId: number;
}

export interface LoaderServiceResultDTO {
  status: BookingStatus;
  name: string;
  email: string;
  numberOfGuests: number;
  customerKind: CustomerKind;
  course: string;
  date: string;
  time: string;
}
