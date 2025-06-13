import type { BookingStatus } from '@/src/types/enums/BookingStatus';

export interface ActionServiceArgsDTO {
  bookingId: number;
  status: BookingStatus;
}

export type ActionServiceResultDTO = BookingStatus | null;
