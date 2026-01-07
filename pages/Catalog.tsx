import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { FilterPanel } from '../components/FilterPanel';
import { SEO } from '../components/SEO';
import { Category, Product, FilterState } from '../types';

export const Catalog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');

  // Initial filters from URL or default
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    ageGroup: [],
    type: [],
    minPrice: 0,
    maxPrice: 1000,
  });

  // Sync URL params to filter state on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setFilters(prev => ({
        ...prev,
        category: [categoryParam as Category]
      }));
    }
  }, [searchParams]);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category match
      if (filters.category.length > 0 && !filters.category.includes(product.category)) return false;
      
      // Age match
      if (filters.ageGroup.length > 0 && !filters.ageGroup.includes(product.ageGroup)) return false;

      // Type match
      if (filters.type.length > 0 && !filters.type.includes(product.type)) return false;

      // Price match
      if (product.price < filters.minPrice || product.price > filters.maxPrice) return false;

      return true;
    });
  }, [filters]);

  // Sort Logic
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      // Default newest - putting new items first. 
      // Since we don't have a date field, we'll use the 'isNew' flag or ID
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return Number(b.id) - Number(a.id);
    });
  }, [filteredProducts, sortBy]);

  const activeFilterCount = 
    filters.category.length + 
    filters.ageGroup.length + 
    filters.type.length + 
    (filters.minPrice > 0 ? 1 : 0) + 
    (filters.maxPrice < 1000 ? 1 : 0);

  return (
    <>
      <SEO 
        title="Catalog" 
        description="Browse our extensive collection of baby clothes. Filter by age, category, and type to find the perfect outfit."
      />
      
      <div className="bg-gray-50 min-h-screen pb-12">
        {/* Header Banner */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
            <p className="text-gray-500 mt-2">Showing {sortedProducts.length} results</p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Filter Panel */}
            <FilterPanel 
              filters={filters} 
              setFilters={setFilters} 
              isOpen={isFilterOpen} 
              onClose={() => setIsFilterOpen(false)}
              resultCount={sortedProducts.length}
            />

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
                <button 
                  className="lg:hidden flex items-center gap-2 text-gray-700 font-medium"
                  onClick={() => setIsFilterOpen(true)}
                >
                  <Filter size={20} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                <div className="flex items-center gap-4 ml-auto">
                  <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                  <div className="relative">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="appearance-none bg-gray-50 border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-primary text-sm cursor-pointer"
                    >
                      <option value="newest">Newest Arrivals</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <SlidersHorizontal size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                  <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
                    <Filter size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">No products found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your filters to see more results.</p>
                  <button 
                    onClick={() => setFilters({
                      category: [],
                      ageGroup: [],
                      type: [],
                      minPrice: 0,
                      maxPrice: 1000
                    })}
                    className="mt-6 text-primary font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
