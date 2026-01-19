import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, AGE_GROUPS, PRODUCT_TYPES } from '../constants';
import { Product, Category, AgeGroup, ProductType } from '../types';

const Catalog: React.FC = () => {
  const { category: paramCategory, ageGroup: paramAgeGroup } = useParams<{ category?: string, ageGroup?: string }>();
  
  // State for Mobile Filter Panel
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(
    (paramCategory as Category) || 'all'
  );
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<AgeGroup[]>(
    paramAgeGroup ? [paramAgeGroup as AgeGroup] : []
  );
  const [selectedTypes, setSelectedTypes] = useState<ProductType[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortOption, setSortOption] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');

  // Update state when URL params change
  useEffect(() => {
    if (paramCategory) {
      setSelectedCategory(paramCategory as Category);
    } else {
      setSelectedCategory('all');
    }

    if (paramAgeGroup) {
      setSelectedAgeGroups([paramAgeGroup as AgeGroup]);
    }
  }, [paramCategory, paramAgeGroup]);

  // Handler for toggle selection (Age, Type)
  const toggleSelection = <T extends string>(
    item: T,
    current: T[],
    setter: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    if (current.includes(item)) {
      setter(current.filter(i => i !== item));
    } else {
      setter([...current, item]);
    }
  };

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category Filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;

      // Age Filter
      if (selectedAgeGroups.length > 0 && !selectedAgeGroups.includes(product.ageGroup)) return false;

      // Type Filter
      if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) return false;

      // Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      // Newest logic (mocked by ID or specific field)
      if (sortOption === 'newest') return b.isNew ? 1 : -1;
      return 0;
    });
  }, [selectedCategory, selectedAgeGroups, selectedTypes, priceRange, sortOption]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedAgeGroups([]);
    setSelectedTypes([]);
    setPriceRange([0, 10000]);
  };

  return (
    <div className="bg-white min-h-screen pb-12">
      <SEO 
        title="Catalog" 
        description={`Browse our collection of baby clothes. ${selectedCategory !== 'all' ? selectedCategory.replace('-', ' ') : 'All categories'}.`}
      />

      {/* Header / Title */}
      <div className="bg-brand-50 py-8 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">
            {selectedCategory === 'all' ? 'All Products' : selectedCategory.replace('-', ' ')}
            {selectedAgeGroups.length === 1 && ` (${selectedAgeGroups[0]} Years)`}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {filteredProducts.length} items found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
             <button 
               onClick={() => setIsFilterOpen(true)}
               className="flex items-center gap-2 text-gray-700 font-medium border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
             >
               <Filter className="h-4 w-4" /> Filters
             </button>
             
             <select 
               value={sortOption} 
               onChange={(e) => setSortOption(e.target.value as any)}
               className="border-gray-300 rounded-md text-sm focus:ring-brand-500 focus:border-brand-500"
             >
               <option value="newest">Newest</option>
               <option value="price-asc">Price: Low to High</option>
               <option value="price-desc">Price: High to Low</option>
             </select>
          </div>

          {/* Sidebar Filters (Desktop & Mobile Wrapper) */}
          <aside className={`
            fixed inset-0 z-[60] bg-white p-6 overflow-y-auto transition-transform duration-300 lg:translate-x-0 lg:static lg:block lg:w-64 lg:p-0 lg:border-r lg:border-transparent lg:h-auto lg:shadow-none
            ${isFilterOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}
          `}>
            <div className="flex justify-between items-center lg:hidden mb-6">
              <h2 className="text-xl font-bold text-gray-900">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 -mr-2 text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Filter Groups */}
            <div className="space-y-8">
              
              {/* Category */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="text-brand-600 focus:ring-brand-500 h-4 w-4 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">All Categories</span>
                  </label>
                  {CATEGORIES.map(cat => (
                    <label key={cat.value} className="flex items-center">
                      <input 
                        type="radio" 
                        name="category"
                        checked={selectedCategory === cat.value}
                        onChange={() => setSelectedCategory(cat.value as Category)}
                        className="text-brand-600 focus:ring-brand-500 h-4 w-4 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">{cat.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Age Group */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Age Group</h3>
                <div className="space-y-2">
                  {AGE_GROUPS.map(age => (
                    <label key={age.value} className="flex items-center">
                      <input 
                        type="checkbox"
                        checked={selectedAgeGroups.includes(age.value as AgeGroup)}
                        onChange={() => toggleSelection(age.value as AgeGroup, selectedAgeGroups, setSelectedAgeGroups)}
                        className="text-brand-600 focus:ring-brand-500 h-4 w-4 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">{age.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Product Type</h3>
                <div className="space-y-2">
                  {PRODUCT_TYPES.map(type => (
                    <label key={type.value} className="flex items-center">
                      <input 
                        type="checkbox"
                        checked={selectedTypes.includes(type.value as ProductType)}
                        onChange={() => toggleSelection(type.value as ProductType, selectedTypes, setSelectedTypes)}
                        className="text-brand-600 focus:ring-brand-500 h-4 w-4 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Price</h3>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="10000" 
                    step="100"
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
               <button 
                  onClick={clearFilters}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                >
                  Clear All Filters
                </button>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
             {/* Desktop Sort */}
             <div className="hidden lg:flex justify-end mb-6">
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-gray-500">Sort by:</span>
                  <select 
                    value={sortOption} 
                    onChange={(e) => setSortOption(e.target.value as any)}
                    className="border-gray-300 rounded-md text-sm focus:ring-brand-500 focus:border-brand-500"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
             </div>

             {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
             ) : (
               <div className="text-center py-20 bg-gray-50 rounded-lg">
                 <p className="text-gray-500 text-lg">No products match your selected filters.</p>
                 <button onClick={clearFilters} className="mt-4 text-brand-600 font-medium hover:underline">Clear filters</button>
               </div>
             )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;