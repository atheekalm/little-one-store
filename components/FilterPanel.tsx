import React from 'react';
import { FilterState, Category, AgeGroup, ProductType } from '../types';
import { X } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isOpen: boolean;
  onClose: () => void;
  resultCount: number;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ 
  filters, 
  setFilters, 
  isOpen, 
  onClose,
  resultCount 
}) => {
  const toggleArrayFilter = <T extends string>(
    key: keyof Pick<FilterState, 'category' | 'ageGroup' | 'type'>, 
    value: T
  ) => {
    setFilters(prev => {
      const current = prev[key] as T[];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 bottom-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto
        lg:relative lg:transform-none lg:w-64 lg:shadow-none lg:z-0 lg:block
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h2 className="text-xl font-bold text-gray-900">Filters</h2>
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-900">
              <X size={24} />
            </button>
          </div>

          <div className="lg:hidden mb-6 text-sm text-gray-500">
            {resultCount} products found
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Category</h3>
            <div className="space-y-2">
              {['baby-boy', 'baby-girl'].map((cat) => (
                <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      className="peer h-4 w-4 border-2 border-gray-300 rounded text-primary focus:ring-primary/50 transition-colors"
                      checked={filters.category.includes(cat as Category)}
                      onChange={() => toggleArrayFilter('category', cat as Category)}
                    />
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-900 capitalize">{cat.replace('-', ' ')}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Age Group Filter */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Age Group</h3>
            <div className="space-y-2">
              {['0-1', '1-2', '2-3'].map((age) => (
                <label key={age} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
                    checked={filters.ageGroup.includes(age as AgeGroup)}
                    onChange={() => toggleArrayFilter('ageGroup', age as AgeGroup)}
                  />
                  <span className="text-gray-600 group-hover:text-gray-900">{age} Years</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Product Type</h3>
            <div className="space-y-2">
              {['romper', 'dress', 'shirt', 'pants', 'accessory', 'shoes'].map((type) => (
                <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
                    checked={filters.type.includes(type as ProductType)}
                    onChange={() => toggleArrayFilter('type', type as ProductType)}
                  />
                  <span className="text-gray-600 group-hover:text-gray-900 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Price Range</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                min="0"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => setFilters(prev => ({ ...prev, minPrice: Number(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                min="0"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <button 
            onClick={() => setFilters({
              category: [],
              ageGroup: [],
              type: [],
              minPrice: 0,
              maxPrice: 1000
            })}
            className="w-full py-2 text-sm text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </aside>
    </>
  );
};
