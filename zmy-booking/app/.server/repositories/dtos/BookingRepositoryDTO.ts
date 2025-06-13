import type { BookingStatus } from '@/src/types/enums/BookingStatus';
import type { CustomerKind } from '@/src/types/enums/CustomerKind';

export interface BookingRepositoryDTO {
  id: number;
  date: Date;
  start: string;
  customer_id: number;
  business_id: number;
  course_id: number;
  number_of_guests: number;
  customer_kind: CustomerKind;
  status: BookingStatus;
}
