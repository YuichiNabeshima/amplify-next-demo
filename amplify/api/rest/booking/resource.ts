import { defineFunction } from '@aws-amplify/backend';

export const bookingFunction = defineFunction({
  name: 'booking-function',
  entry: '../../../functions/booking/src/index.ts',
});
