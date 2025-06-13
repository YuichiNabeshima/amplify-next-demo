import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { get } from 'aws-amplify/api';

export function useRestaurantList() {
  const [totalPages, setTotalPages] = useState(1);
  const [cards, setCards] = useState<any>([]);
  const searchParams = useSearchParams();
  const [filteredRestaurants, setFilteredRestaurants] = useState<any>([]);

  // Get current page from URL or default to 1
  const currentPage = Number.parseInt(searchParams.get('page') || '1', 10);

  // Get filter values from URL
  const cuisineFilter = searchParams.get('cuisine') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const neighborhoodFilter = searchParams.get('neighborhood') || 'all';
  const searchQuery = searchParams.get('search') || '';

  // Apply filters when URL parameters change
  useEffect(() => {
    const getData = async () => {

      const { body } = await get({
        apiName: 'api',
        path: `/booking`,
      }).response;

      const data = await body.json();
      setCards(data);
    }
    getData();

    let results = [];

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = cards.filter(
        (restaurant: any) =>
          restaurant.name.toLowerCase().includes(query) ||
          restaurant.cuisine.toLowerCase().includes(query) ||
          restaurant.priceLevel?.toString().includes(query) ||
          restaurant.neighborhood.toLowerCase().includes(query),
      );
    }

    setFilteredRestaurants(results);
  }, [cuisineFilter, priceFilter, neighborhoodFilter, searchQuery]);

  // Get current page restaurants
  const currentRestaurants = filteredRestaurants;

  return {
    filteredRestaurants,
    currentRestaurants,
    totalPages,
    currentPage,
  };
}
