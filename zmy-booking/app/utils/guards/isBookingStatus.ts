import { BOOKING_STATUS } from '@/src/constants/enums/BOOKING_STATUS';
import type { BookingStatus } from '@/src/types/enums/BookingStatus';

export function isBookingStatus(status: string): status is BookingStatus {
  return Object.keys(BOOKING_STATUS).some((val) => val === status);
}
