import { TIME_SLOTS } from '@/src/constants/TIME_SLOT';
import type { Time } from '@/src/types/Time';

export function isTime(time: string): time is Time {
  if (TIME_SLOTS.includes(time)) {
    return true;
  }
  return false;
}
