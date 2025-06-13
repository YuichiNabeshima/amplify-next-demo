import { prisma } from '../../../../src/lib/prisma/client';

export const handler = async () => {
  console.log('[LAMBDA] Function started at:', new Date().toISOString());
  
  try {
    // テスト用の静的データ
    const mockBookings = [
      {
        id: 1,
        name: "テスト予約1",
        date: "2024-03-20",
        time: "19:00",
        guests: 2
      },
      {
        id: 2,
        name: "テスト予約2",
        date: "2024-03-21",
        time: "20:00",
        guests: 4
      }
    ];

    console.log('[LAMBDA] Returning mock data:', JSON.stringify(mockBookings, null, 2));
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockBookings)
    };
  } catch (error: any) {
    console.error('[LAMBDA] Error occurred:', error);
    console.error('[LAMBDA] Error stack:', error?.stack);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Failed to fetch bookings',
        details: error?.message || 'Unknown error'
      })
    };
  }
};
