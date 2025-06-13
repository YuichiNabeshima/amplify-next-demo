'use client';

import { ChevronDown } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

export const dynamic = 'force-dynamic';

export function FilterBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get filter values from URL or use defaults
  const currentParams = new URLSearchParams(searchParams.toString());
  const currentArea = currentParams.get('area') || 'all';
  const currentPrice = currentParams.get('price') || 'all';
  const currentCuisine = currentParams.get('cuisine') || 'all';

  const handleFilterChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === 'all') {
      params.delete(type);
    } else {
      params.set(type, value);
    }
    
    // Reset to first page when filter changes
    params.set('page', '1');

    // Update the URL
    router.push(`?${params.toString()}`);
  };

  // Handle cuisine change
  const handleCuisineChange = (value: string) => {
    handleFilterChange('cuisine', value);
  };

  // Handle price change
  const handlePriceChange = (value: string) => {
    handleFilterChange('price', value);
  };

  // Handle neighborhood change
  const handleNeighborhoodChange = (value: string) => {
    handleFilterChange('neighborhood', value);
  };

  // Reset all filters
  const handleReset = () => {
    handleFilterChange('cuisine', 'all');
    handleFilterChange('price', 'all');
    handleFilterChange('neighborhood', 'all');

    // Remove all filter parameters but keep search if present
    const params = new URLSearchParams();
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      params.set('search', searchQuery);
    }
    params.set('page', '1');

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-3 mb-8">
      <div className="flex items-center justify-between md:hidden">
        <span className="text-sm font-medium">Filters:</span>
        <Button variant="outline" className="rounded-full" onClick={handleReset}>
          Reset
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm font-medium">Filters:</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={currentCuisine !== 'all' ? 'default' : 'outline'} className="rounded-full">
              {currentCuisine === 'all' ? 'Cuisine' : currentCuisine.charAt(0).toUpperCase() + currentCuisine.slice(1)}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Cuisine</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={currentCuisine} onValueChange={handleCuisineChange}>
              <DropdownMenuRadioItem value="all">All Cuisines</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="canadian">Canadian</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="italian">Italian</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="asian">Asian Fusion</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="seafood">Seafood</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="mexican">Mexican</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="vegan">Vegan</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={currentPrice !== 'all' ? 'default' : 'outline'} className="rounded-full">
              {currentPrice === 'all'
                ? 'Price Range'
                : currentPrice === '1'
                ? 'Under $30'
                : currentPrice === '2'
                ? '$30-$60'
                : currentPrice === '3'
                ? '$60-$100'
                : 'Over $100'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Price Range</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={currentPrice} onValueChange={handlePriceChange}>
              <DropdownMenuRadioItem value="all">All Prices</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="1">$ (Under $30)</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="2">$$ ($30-$60)</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="3">$$$ ($60-$100)</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="4">$$$$ (Over $100)</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={currentArea !== 'all' ? 'default' : 'outline'}
              className="rounded-full"
            >
              {currentArea === 'all'
                ? 'Neighborhood'
                : currentArea.charAt(0).toUpperCase() + currentArea.slice(1)}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Neighborhood</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={currentArea} onValueChange={handleNeighborhoodChange}>
              <DropdownMenuRadioItem value="all">All Areas</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="downtown">Downtown</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="gastown">Gastown</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="yaletown">Yaletown</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="westend">West End</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="kitsilano">Kitsilano</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="mainst">Main Street</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="chinatown">Chinatown</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:block ml-auto">
          <Button variant="outline" className="rounded-full" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
